import { describe, expect, it } from 'vitest';
import { arrayRotate } from './index'

describe('arrayRotate',()=>{
  it('正常情况',()=>{
    const res = arrayRotate([1,2,3,4,5,6,7],3)
    expect(res).toEqual([5,6,7,1,2,3,4])
  })
  it('数组为空',()=>{
    const res = arrayRotate([],3)
    expect(res).toEqual([])
  })
  it('k是0',()=>{
    const res = arrayRotate([1,2,3,4,5,6,7],0)
    expect(res).toEqual([1,2,3,4,5,6,7])
  })
  it('k是负值',()=>{
    const res = arrayRotate([1,2,3,4,5,6,7],-3)
    expect(res).toEqual([5,6,7,1,2,3,4])
  })
  it('k不是数字',()=>{
    // @ts-ignore
    const res = arrayRotate([1,2,3,4,5,6,7],'3')
    expect(res).toEqual([5,6,7,1,2,3,4])
  })
})
