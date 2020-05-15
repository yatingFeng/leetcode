/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 思路：[-2,1,-3,4,-1,2,1,-5,4]
 * 从第一个元素开始遍历，看是与后面的和大还是后面的单独一个数da
 * 第一步：[-2] maxsum = -2,memo[0] =-2
 * 第二步：[-2,1]的和-1 比 1 小 ,数组变为[1],maxsum = 1,memo[1] = 1
 * 第三步：[1,-3]的和-2 比 -3大，数组变为[1,-3],maxsum = -2,memo[2] =1
 * 第四步：[1,-3,4]的和-2 比 4小，所以数组变为[4],maxsum = 4,memo[3] = 4
 * 第五步：[4,-1]的和3 比 -1大，所以数组变为[4,-1],maxsum = 3,memo[4] = 4
 * 第六步：[4,-1,2]的和为5 比 2大，所以数组变为[4,-1,2],maxsum = 5,memo[5] = 5
 * 第七步：[4,-1,2,1]的和为6 比 1大，所以数组变为[4,-1,2,1],maxsum = 6,memo[6] = 6
 * 第八步：[4,-1,2,1,-5]的和1 比 -5大，所以数组变为[4,-1,2,1,-5]，maxsum = 1,memo[7] = 6
 * 第九步：[4,-1,2,1,-5,4]的和5 比 4大，所以数组变为[4,-1,2,1,-5,4],maxsum = 4,memo[8] = 6
 */
var maxSubArray = function (nums) {
  // 用来存放每次遍历求得的 连续子数组的最大和
  const memo = []
  // 当数组只有一个元素时，最大字串就是这个元素，最大和也是这个元素
  memo[0] = nums[0]
  // 假设最大值
  let max = nums[0]

  // for循环遍历原数组（从数组中的第二个元素起，因为第一个元素已经设为最大值了）
  for (let i = 1; i < nums.length; i++) {
    // 做个抉择求出最大值：是当前数组加上下一位的和 大 还是下一位单独作为一个数组的和大
    // 将上步骤求出的最大值，放在memo中
    memo[i] = Math.max(nums[i] + memo[i - 1], nums[i])
    // 重置max的值
    max = Math.max(max, memo[i])
  }
  return max
};
// @lc code=end

