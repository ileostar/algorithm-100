import { describe, expect, it } from 'vitest'
import { removeDuplicates } from './index'

describe('removeDuplicates', () => {
  it('case one', () => {
    const res = removeDuplicates([1, 1, 2])
    expect(res).toEqual(2)
  })
  it('case two', () => {
    const res = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    expect(res).toEqual(5)
  })
})
