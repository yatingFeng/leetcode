/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 如果字符串长度小于2，直接返回字符串
  if(s.length < 2){
    return s
  }
  // 定义两个变量start:存储当前找到的最大回文字符串的起始位置
  //maxLength:记录字符串的长度（终止位置就是start+maxLength）
  let start = 0
  let maxLength = 1
  function expandAroundCenter(left,right){
    // 判断左边、右边是否越界，且左边的字符与右边的字符是否相等
    while(left >=0 && right < s.length && s[left] === s[right]){
      // 判断时候需要更新起始位置和回文字符串最大长度
      if(right - left +1 > maxLength){
        maxLength = right - left +1
        start = left
      }
      // 从中间向两边扩散
      left--
      right++
    }
  }
  for(let i = 0; i<s.length; i++){
    // （a,b,a）以b(i)为中心向两边扩散
    expandAroundCenter(i-1,i+1)
    // （a,a,b,b）相邻字符相同的情况
    expandAroundCenter(i,i+1)
  }
  // 返回最大回文字符穿
  return s.substring(start,start+maxLength)
};
// @lc code=end

