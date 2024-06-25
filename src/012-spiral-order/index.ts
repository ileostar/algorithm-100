/**
 * spiralOrder
 * https://leetcode.cn/problems/spiral-matrix/submissions/542015729/?envType=study-plan-v2&envId=2024-spring-sprint-100
 */
export function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  if (matrix.length === 0) return res;

  let left = 0,
      top = 0,
      right = matrix[0].length - 1,
      bottom = matrix.length - 1;

  while (true) {
      // 从左向右打印，上边界向下收缩一层
      for (let i = left; i <= right; i++) res.push(matrix[top][i]);
      if (++top > bottom) break;

      // 向上到下打印，右边界向左收缩一层
      for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
      if (left > --right) break;

      // 从右向左打印，下边界向上收缩一层
      for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
      if (top > --bottom) break;

      // 从下向上打印，左边界向右收缩一层
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      if (++left > right) break;
  }

  return res;
};

