import { describe, expect, it } from 'vitest'
import { arrayRotate } from './index'

describe('arrayRotate', () => {
  it('case one', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const res = arrayRotate(matrix)
    expect(JSON.stringify(res)).toEqual('[[7,4,1],[8,5,2],[9,6,3]]')
  })

  it('case two', () => {
    const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
    const res = arrayRotate(matrix)
    expect(JSON.stringify(res)).toEqual('[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]')
  })
})
