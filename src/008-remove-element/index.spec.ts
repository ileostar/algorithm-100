import { describe, expect, it } from 'vitest'
import { removeElement } from './index'

describe('removeElement', () => {
  it('default', () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    const res = removeElement(nums, val)
    expect(res).toEqual(2)
  })
})
