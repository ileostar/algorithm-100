import { describe, expect, it } from 'vitest';
import { arrayRotate } from './index'

describe('arrayRotate',()=>{
  it('default',()=>{
    const res = arrayRotate()
    expect(res).toEqual("demo")
  })
})
