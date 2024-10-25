import { describe, expect, it } from 'vitest'
import { findMin } from './index'

describe('findMin', () => {
  it('default', () => {
    const res = findMin([1, 2, 3, 4, 5])
    expect(res).toEqual(1)
  })
})
