/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 * 解题思路：
 * 1.先判断数组是否为空，为空的话直接返回数组
 * 2.定义四个边界及当前方向
 * 3.当左边界小于等于右边界，且上边界小于等于下边界时，执行while循环
 * 按照右、下、左、上的顺序，以此将路径上的字符添加到结果里
 * 4.while循环结束后，返回结果
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 数组为空时，直接将空数组返回
  if (matrix.length === 0) {
    return []
  }
  // 定义上右下左的边界
  // 上和左都为0，右：第一行的长度-1；bottom:数组的长度
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length-1;
  let left = 0

  // 定义方向，和存放字符的数组
  let direction = "right"
  let result = []
  // 当左边界小于等于右边界，上边界小于等于下边界时，才做操作
  while (left <= right && top <= bottom) {
    // 当方向为右时，从左至右遍历，
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        // 行值是相同的，不同的是列i,将matrix[top][i]加入数组
        result.push(matrix[top][i])
      }
      // 上面一行遍历完之后，top+1，方向变为向下
      top++
      direction = "down"
    } else if (direction === "down") {
      // 当方向为下 时，从第一行遍历到最后一行
      for (let i = top; i <= bottom; i++) {
        // 行的值不同是i，列的值是相同的
        result.push(matrix[i][right])
      }
      // 右边的列遍历完，right-1;方向变为left
      right--
      direction = "left"
    } else if (direction === "left") {
      // 当方向为left时，从一行的右边向左遍历
      for (let i = right; i >= left; i--) {
        // 行的值是相同的，列的值是不同的
        result.push(matrix[bottom][i])
      }
      // 下面的一行遍历完，bottom-1,方向变为向上
      bottom--
      direction = "top"
    } else if (direction === "top") {
      // 从底部向上遍历
      for (let i = bottom; i >= top; i--) {
        // 列的值是相同的，行的值是i
        result.push(matrix[i][left])
      }
      // 左边一列执行完，left+1向右移，方向变为向右
      left++
      direction = "right"
    }
  }
  return result
};
// @lc code=end

