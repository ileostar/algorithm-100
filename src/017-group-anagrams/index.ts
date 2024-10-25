/**
 * groupAnagrams
 * https://leetcode.cn/problems/group-anagrams/submissions/557783124/?envType=study-plan-v2&envId=top-100-liked
 */
export function groupAnagrams(strs: string[]): string[][] {
  const obj: Record<string, string[]> = {}
  for (const s of strs) {
    const uni = s.split('').sort().join()
    if (obj[uni])
      obj[uni].push(s)
    else
      obj[uni] = [s]
  }
  return Object.values(obj)
};
