export class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null
  private tail: LinkedListNode<T> | null = null

  push(value: T): void {
    const node = new LinkedListNode(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    }
    else {
      this.tail!.next = node
      this.tail = node
    }
  }

  pop(): T | null {
    if (!this.head)
      return null

    const value = this.head.value
    this.head = this.head.next
    if (!this.head)
      this.tail = null

    return value
  }

  shift(): T | null {
    if (!this.head)
      return null

    const value = this.head.value
    this.tail = this.tail!.next
    if (!this.tail)
      this.head = null

    return value
  }

  unshift(value: T): void {
    const node = new LinkedListNode(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    }
    else {
      node.next = this.head
      this.head = node
    }
  }

  get(index: number): T | null {
    let current = this.head
    for (let i = 0; i < index && current; i++)
      current = current.next

    return current ? current.value : null
  }

  set(index: number, value: T): boolean {
    let current = this.head
    for (let i = 0; i < index && current; i++)
      current = current.next

    if (current) {
      current.value = value
      return true
    }
    return false
  }

  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length)
      return false

    if (index === 0) {
      this.unshift(value)
      return true
    }
    if (index === this.length) {
      this.push(value)
      return true
    }
    const node = new LinkedListNode(value)
    let current = this.head
    for (let i = 0; i < index - 1 && current; i++)
      current = current.next

    if (current) {
      node.next = current.next
      current.next = node
      return true
    }
    return false
  }

  remove(index: number): T | null {
    if (index < 0 || index >= this.length)
      return null

    if (index === 0)
      return this.shift()

    if (index === this.length - 1)
      return this.pop()

    let current = this.head
    for (let i = 0; i < index - 1 && current; i++)
      current = current.next

    if (current && current.next) {
      const value = current.next.value
      current.next = current.next.next
      return value
    }
    return null
  }

  get length(): number {
    let length = 0
    let current = this.head
    while (current) {
      length++
      current = current.next
    }
    return length
  }

  toArray(): T[] {
    const arr: T[] = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
}
