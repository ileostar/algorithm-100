import { describe, expect, it } from 'vitest'
import { isPalindrome } from './index'

describe('isPalindrome', () => {
  it('case one', () => {
    const s = 'A man, a plan, a canal: Panama'
    const res = isPalindrome(s)
    expect(res).toEqual(true)
  })
  it('case two', () => {
    const s = 'race a car'
    const res = isPalindrome(s)
    expect(res).toEqual(false)
  })
  it('case three', () => {
    const s = ' '
    const res = isPalindrome(s)
    expect(res).toEqual(true)
  })
})
