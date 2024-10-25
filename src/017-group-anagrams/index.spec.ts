import { describe, expect, it } from 'vitest'
import { groupAnagrams } from './index'

describe('groupAnagrams', () => {
  it('default', () => {
    const res = groupAnagrams(['a'])
    expect(res).toEqual([['a']])
  })
})
