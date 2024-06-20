/**
 * binarySearch
 * https://leetcode.cn/problems/binary-search/description/
 */
export function search(nums: number[], target: number): number {
  return binarySearch(nums, target, 0, nums.length - 1)
};

function binarySearch(nums: number[], target: number, low: number, high: number): number {
  if (low > high)
    return -1

  const mid = low + Math.floor((high - low) / 2)
  if (nums[mid] === target)
    return mid
  else if (nums[mid] > target)
    return binarySearch(nums, target, low, mid - 1)
  else
    return binarySearch(nums, target, mid + 1, high)
}
