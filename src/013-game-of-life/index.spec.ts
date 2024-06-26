import { describe, expect, it } from 'vitest';
import { gameOfLife } from './index'

describe('gameOfLife',()=>{
  it('case one',()=>{
    const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
    const res = gameOfLife(board)
    expect(res).toEqual([[0,0,0],[1,0,1],[0,1,1],[0,1,0]])
  })
  it('case two',()=>{
    const board = [[1,1],[1,0]]
    const res = gameOfLife(board)
    expect(res).toEqual([[1,1],[1,1]])
  })
})
