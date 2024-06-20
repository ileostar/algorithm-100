/**
 * removeElement
 * https://leetcode.cn/problems/remove-element/description/
 */
export function removeElement(nums: number[], val: number): number {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (val !== nums[fast])
      nums[slow++] = nums[fast]

    fast++
  }
  return slow
};
