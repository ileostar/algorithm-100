/**
 * lengthOfLongestSubstring
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked
 */
export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0
  let start = 0
  const map = new Map()

  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end]))
      start = Math.max(start, map.get(s[end]) + 1)

    map.set(s[end], end)
    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
};
