import { describe, expect, it } from 'vitest';
import { sunToK } from './index'

describe('sunToK',()=>{
  it('case one',()=>{
    const res = sunToK([1,1,1], 2)
    expect(res).toEqual(2)
  })
  it('case two',()=>{
    const res = sunToK([1,2,3], 3)
    expect(res).toEqual(2)
  })

})
