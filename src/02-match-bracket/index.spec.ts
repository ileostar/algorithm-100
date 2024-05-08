import { describe, expect, it } from 'vitest';
import { matchBracket } from './index'

describe('matchBracket',()=>{
  it('成功匹配',()=>{
    const res = matchBracket('(ab))')
    expect(res).toEqual(false)
  })
  it('失败匹配',()=>{
    const res = matchBracket('({d[cc]b}a)')
    expect(res).toEqual(true)
  })
})
