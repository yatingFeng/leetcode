/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 解题思路：
 * 1.创建一个map
 * 2.for循环遍历nums数组
 * 3.用target减nums[i],以计算哪个数能跟当前的数字相加得到target
 * 4.检查map里有没有这个数，如果有则返回结果；
 *    如果没有则把nums[i]当作key,i当作value放入map中
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 创建一个map用来存放{key,value}
  const map = new Map()
  for(let i =0;i<nums.length;i++){
    // 获取到差值
    const complete = target-nums[i]
    // 判断map中有没有这个差值
    if(map.has(complete)){
      // 有的话，直接返回这个差值的value,和i
      return [map.get(complete),i]
    }else{
      // 没有的话，将数据和i存进map
      map.set(nums[i],i)
    }
  }
  // 什么都没有找到就返回空数组
  return []
};
// @lc code=end

