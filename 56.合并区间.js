/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 如果当要要合并的集合的长度小于2（只有一个区间）时，直接返回
  if(intervals.length < 2){
    return intervals
  }
  // 对所有区间进行排序
  intervals.sort(function(a,b){
    //三元表达式防止[1,2][1,3]这种情况
    return a[0]===b[0] ? a[1]-b[1]: a[0]-b[0]
  })
  // 定义一个变量存储当前的区间
  let curr = intervals[0]
  // 定义一个变量存储合并区间后的结果
  let result = []

  // for of遍历集合，与当前区间进行对比
  for(let interval of intervals){
    //如果当前区间的结尾 大于或等于 要对比的区间的开始 
    if(curr[1] >= interval[0]){
      //将两个区间合并，取出两个区间结尾较大的那个
      curr[1]  = Math.max(curr[1],interval[1])
    }else{
      // 否则的话，直接将区间存放进数组
      result.push(curr)
      // 更新当前区间
      curr = interval
    }
  }
  // for循环中的第一个if判断，curr没办法被添加进result
  // 所以再判断一下
  if(curr.length !== 0){
    result.push(curr)
  }
  return result
};
// @lc code=end

