/**
 * removeDuplicates
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=2024-spring-sprint-100
 */
export function removeDuplicates(nums: number[]): number {
  let slow = 0;
  let fast = 1;
  while(fast<=nums.length) {
      if(nums[slow]===nums[fast]){
          fast++
      } else {
          nums[++slow] = nums[fast++]
      }
  }
  return slow
};
