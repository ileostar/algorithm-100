import { describe, expect, it } from 'vitest'
import { ListNode, reverseList } from './index'

describe('reverseList', () => {
  it('default', () => {
    const list2 = new ListNode(3)
    const list1 = new ListNode(2, list2)
    const list = new ListNode(1, list1)

    const res = reverseList(list)
    expect(res).toEqual(list2)
  })
})
