/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1.创建一个HashMap,把括号配对放进去
  const mapping = new Map()
  // key是左括号，value是右括号
  mapping.set("(", ")")
  mapping.set("[", "]")
  mapping.set("{", "}")
  // 2.创建一个stack栈（利用栈的先进后出原理）
  const stack = new Array()
  // for循环遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 如果map中有这个key,那说明它是个左括号
    if (mapping.has(s[i])) {
      // 从map中取出相应的右括号，压入栈
      stack.push(mapping.get(s[i]))
    } else {
      // 如果是个右括号，取出栈中的第一个字符判断与当前字符是否相等
      if (s[i] !== stack.pop()) {
        // 不相符返回false
        return false
      }
    }
  }
  //for循环结束后，判断栈是否为空
  if (stack.length !== 0) {
    //不为空说明还有一些左括号没有被闭合，返回false
    return false
  }
  return true
};
// @lc code=end

