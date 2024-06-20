import { describe, expect, it } from 'vitest'
import { search } from './index'

describe('binarySearch', () => {
  it('default', () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 9
    const res = search(nums, target)
    expect(res).toEqual(4)
  })
  it('case two', () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 2
    const res = search(nums, target)
    expect(res).toEqual(-1)
  })
})
