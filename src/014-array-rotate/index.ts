/**
 * arrayRotate
 * https://leetcode.cn/problems/rotate-image/?envType=study-plan-v2&envId=2024-spring-sprint-100
 */
export function arrayRotate(matrix: number[][]): number[][] {
  const n = matrix.length
  const rowEnd = Math.floor(n / 2)
  for (let i = 0; i < rowEnd; i++) {
    const columnEnd = n - 1 - i
    for (let j = i; j < columnEnd; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n - 1 - j][i]
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
      matrix[j][n - 1 - i] = temp
    }
  }
  return matrix
}
