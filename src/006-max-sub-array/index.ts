/**
 * maxSubArray
 * https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked
 */
export function maxSubArray(nums: number[]): number {
  const dp: number[] = Array.from({ length: nums.length })
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0)
      dp[i] = dp[i - 1] + nums[i]
    else dp[i] = nums[i]
  }
  return Math.max(...dp)
};
