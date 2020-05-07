/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 保存结果的数组
  const result = []
  // 给原数组排序
  nums.sort(function(a,b){
    return a - b
  })
  // 遍历已排序的数组，到length-2是因为数组中剩最后两个数据时，start与end重复（这样不合理）
  for(let i = 0;i<nums.length-2;i++){
    // 如果是数组中的第一个数据（没有前一数据无法比较）或者当前数据和前一数据数值相等，就跳过这个数据
   if(i === 0 || nums[i] !== nums[i-1]){
    //  定义两个指针
     let start = i + 1 , end = nums.length-1
     while(start < end){
      if(nums[i] + nums[start] + nums[end] === 0){
        result.push([nums[i],nums[start],nums[end]])
        start++
        end--
        // 这两个while循环是判断start和end指针挪动以后和上以数据是否相同（避免重复）
        while(start < end && nums[start] === nums[start-1]){
          start++
        }
        while(start < end && nums[end] === nums[end+1]){
          end--
        }
      }else if(nums[i] + nums[start] + nums[end] < 0){
       start++
      }else{
        end--
      }
     }
   }
  }
  return result
};
// @lc code=end

