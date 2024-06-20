/**
 * quickSort
 *
 */
export function quickSort(arr: number[]): number[] {
  function sort(left: number, right: number) {
    if (left >= right)
      return
    const pivot = arr[left]
    let i = left
    let j = right
    while (i < j) {
      while (i < j && arr[j] >= pivot) j--
      if (i < j) {
        arr[i] = arr[j]
        i++
      }
      while (i < j && arr[i] <= pivot) i++
      if (i < j) {
        arr[j] = arr[i]
        j--
      }
    }
    arr[i] = pivot
    sort(left, i - 1)
    sort(i + 1, right)
  }
  sort(0, arr.length - 1)
  return arr
}
