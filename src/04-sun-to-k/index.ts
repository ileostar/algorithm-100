/**
 * sunToK
 * https://leetcode.cn/problems/subarray-sum-equals-k/description/?envType=study-plan-v2&envId=top-100-liked
 */
export function sunToK(nums: number[], k:number): number {
  const sumObj: { [key: number]: number } = {}
  let sum = 0
  let count = 0

  // 前缀和
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if(sum === k) count++

    if(sumObj[sum - k]) count += sumObj[sum - k]
    if(sumObj[sum])
      sumObj[sum]++
    else
      sumObj[sum] = 1
  }

  return count
}
