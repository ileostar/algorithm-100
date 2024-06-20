/**
 * reverseList
 * 反转链表
 * https://leetcode.cn/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * 迭代法：双指针
 *
 * @export
 * @param {ListNode} head
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let cur: ListNode | null = head
  let temp: ListNode | null = null
  while (cur) {
    temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}

/**
 * 递归从前往后翻
 *
 * @param {ListNode} head
 */
export function reverseListTwo(head: ListNode | null): ListNode | null {
  function recur(prev: ListNode | null, cur: ListNode | null): ListNode | null {
    if (cur === null)
      return prev
    const temp: ListNode | null = cur.next
    cur.next = prev
    prev = cur
    cur = temp
    return recur(prev, cur)
  }
  return recur(null, head)
}

/**
 * 递归从后往翻
 *
 * @param {ListNode} head
 */
export function reverseListThree(head: ListNode | null): ListNode | null {
  if (head === null)
    return null
  let newHead: ListNode | null = null
  function recur(node: ListNode | null, prevNode: ListNode | null) {
    if (node!.next === null) {
      newHead = node
      newHead!.next = prevNode
    }
    else {
      recur(node!.next, node)
      node!.next = prevNode
    }
  }
  recur(head, null)
  return newHead
}
