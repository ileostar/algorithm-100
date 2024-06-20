import { describe, expect, it } from 'vitest'
import { maxSubArray } from './index'

describe('maxSubArray', () => {
  it('default', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    const res = maxSubArray(nums)
    expect(res).toEqual(6)
  })
})
