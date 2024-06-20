/**
 * arrayRotate
 *
 */
export function arrayRotate(arr: number[], k: number | string): number[] {
  const len = arr.length
  if (len === 0 || !k)
    return arr
  const step = Math.abs((k as number) % len)
  Array.from({ length: step }).forEach(() => {
    const n = arr.pop()
    n && arr.unshift(n)
  })
  return arr
}
