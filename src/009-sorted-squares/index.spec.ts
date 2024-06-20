import { describe, expect, it } from 'vitest'
import { sortedSquares } from './index'

describe('sortedSquares', () => {
  it('default', () => {
    const nums = [-4, -1, 0, 3, 10]
    const res = sortedSquares(nums)
    expect(res).toEqual([0, 1, 9, 16, 100])
  })
})
