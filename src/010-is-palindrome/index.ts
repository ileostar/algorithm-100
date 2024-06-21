/**
 * isPalindrome
 * https://leetcode.cn/problems/valid-palindrome/?envType=study-plan-v2&envId=2024-spring-sprint-100
 */
export function isPalindrome(s: string): boolean {
  s = s.replace(/\W|[_]/g, '').toLowerCase()
  return s.split('').reverse().join('') === s
};
