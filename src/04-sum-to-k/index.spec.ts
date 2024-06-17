import { describe, expect, it } from 'vitest'
import { sumToK } from './index'

describe('sumToK', () => {
  it('case one', () => {
    const res = sumToK([1, 1, 1], 2)
    expect(res).toEqual(2)
  })
  it('case two', () => {
    const res = sumToK([1, 2, 3], 3)
    expect(res).toEqual(2)
  })
})
