import { validateHeaderName } from "http"

/**
 * matchBracket
 * @description 判断是否括号匹配
 * @param str string
 */
export function matchBracket(str: string): boolean {
  const len = str.length
  if(len === 0) return true
  const res : string[] = []
  function isMatch(r: string,l: string): boolean {
    if(r === '(' && l === ')') return true
    if(r === '[' && l === ']') return true
    if(r === '{' && l === '}') return true

    return false
  }
  Array.from(str).forEach((val,idx) =>{
    if('([{'.includes(val)){
      res.push(val)
    } else if('}])'.includes(val)) {
      if(isMatch(res[res.length-1],val)) {
        res.pop()
      } else {
        res.push(val)
        return false
      }
    }
  })

  return res.length === 0
}
