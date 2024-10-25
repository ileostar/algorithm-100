import { describe, expect, it } from 'vitest'
import { lengthOfLongestSubstring } from './index'

describe('lengthOfLongestSubstring', () => {
  it('default', () => {
    const res = lengthOfLongestSubstring('abcabcbb')
    expect(res).toEqual(3)
  })
  it('case two', () => {
    const res = lengthOfLongestSubstring('abba')
    expect(res).toEqual(2)
  })
})
