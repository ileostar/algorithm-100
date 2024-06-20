/**
 * sortedSquares
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 */
export function sortedSquares(nums: number[]): number[] {
  return nums.sort((a, b) => Math.abs(a) - Math.abs(b)).map(i => i ** 2)
}

// other function
// export function sortedSquares(nums: number[]): number[] {
//   const res = []
//   let left = 0;
//   let right = nums.length - 1
//   let index = nums.length - 1
//   while(left <= right) {
//     const leftVal = nums[left] ** 2
//     const rightVal = nums[right] ** 2
//     if(leftVal < rightVal) {
//       res[index--] = rightVal
//       right--
//     } else {
//       res[index--] = leftVal
//       left ++
//     }
//   }
//   return res
// }
