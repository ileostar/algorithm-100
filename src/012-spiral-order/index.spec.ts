import { describe, expect, it } from 'vitest';
import { spiralOrder } from './index'

describe('spiralOrder',()=>{
  it('case one',()=>{
    const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    const res = spiralOrder(matrix)
    expect(res).toEqual([1,2,3,6,9,8,7,4,5])
  })
  it('case two',()=>{
    const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    const res = spiralOrder(matrix)
    expect(res).toEqual([1,2,3,4,8,12,11,10,9,5,6,7])
  })
})
