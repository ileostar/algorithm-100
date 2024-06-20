import { describe, expect, it } from 'vitest'
import { maxSubArray } from './index'

describe('maxSubArray', () => {
  it('default', () => {
    const res = maxSubArray()
    expect(res).toEqual('demo')
  })
})
