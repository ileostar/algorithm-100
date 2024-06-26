/**
 * gameOfLife
 * https://leetcode.cn/problems/game-of-life/?envType=study-plan-v2&envId=2024-spring-sprint-100
 */
export function gameOfLife(board: number[][]): number[][] {
    const dir = [
      [1,1],
      [1,0],
      [1,-1],
      [0,-1],
      [-1,-1],
      [-1,0],
      [-1,1],
      [0,1],
    ]
    const res = board.map((row, y) => (
      row.map((val, x) => {
        const all = dir.map(([r, z]) => board[y + r]?.[x + z]).filter(Boolean) as number[]

        if (all.length < 2 || all.length > 3)
          return 0
        else if (all.length === 3)
          return 1

        return val
      })
    )) as number[][]
    return res
}
