import { describe, expect, it } from 'vitest';
import { quickSort } from './index'

describe('quickSort',()=>{
  it('default',()=>{
    const res = quickSort([5,2,4,3,1,7,9,8])
    expect(res).toEqual([1,2,3,4,5,7,8,9])
  })
})
