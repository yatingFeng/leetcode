/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 * 贪心算法：
 * 1.定义一个变量maxJump，等于数组的长度-1
 * 2.从后往前遍历，判断前一位的值+索引的和是否大于等于maxJump
 * 如果大于等于的话说明前一位一定能走到后面一位
 * 3.大于等于情况下：maxjump变为前一位的索引
 * 4.如果小于的话，就放弃前一位，继续往前
 * 5.for循环遍历完成之后，判断maxjump是否等于0，
 * 等于的话返回true，否则返回false
 * [3,1,0,2,4]计算过程
 *  0,1,2,3,4
 * 第一步：maxjump = 4
 * 第二步：2+3=5 >= 4,maxjump = 3
 * 第三步：0+2=2 <3 ,继续往前
 * 第四步：1+1=2 <3,继续往前
 * 第五步: 3+0=3 >=3,maxjump =0,返回true
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 动态规划（topdown）
// var canJump = function (nums) {
//   // 记录数组的总长度
//   const totalLength = nums.length 
//   // 初始化一个记忆数组，填充为0
//   const memo = Array(totalLength).fill(0)
//   // 最后一位为1
//   memo[totalLength - 1] = 1

//   // 递归函数，传递一个位置
//   function jump(position){
//     // 看当前的位置是否是通路（1通，-1不通，0未知）
//     if(memo[position] === 1){
//       return true
//     }else if(memo[position] === -1){
//       return false
//     }

//     // 定义一个变量maxJump用来存放跳跃步数（防止越界）
//     const maxJump = Math.min(position + nums[position],totalLength -1)
//     // 遍历所有的步数
//     for(let i = position +1;i<=maxJump;i++){
//       const jumpResult = jump(i)
//       // 如果是true,证明：此位置是通的，将true往上传
//       if(jumpResult === true){
//         memo[position] =1
//         return true
//       }
//     }
//     // 如果所有的路都尝试了，仍没有返回true，就将此位置置为-1（不通），
//     // 将false往上传
//     memo[position] = -1
//     return false
//   }

//   let result = jump(0)
//   return result
// };

// 动态规划（downup）
var canJump = function (nums) {
  // 记录数组的总长度
  const totalLength = nums.length 
  // 初始化一个记忆数组，填充为0
  const memo = Array(totalLength).fill(0)
  // 最后一位为1
  memo[totalLength - 1] = 1

  // 从倒数第二位开始向前遍历（倒数第一位已经是1）
  for(let i = totalLength - 2; i>=0; i--){
    const maxJump = Math.min(i+nums[i],totalLength -1)
    // 遍历可走的步数
    for(let j = i+1;j <= maxJump;j++){
      // 只要有某个步数可以到1，剩下的就不用看了直接break返回
      if(memo[j] === 1){
        memo[i] = 1
        break
      }
    }
  }
  // 如果顺利的遍历到了第一位，且为1，就代表成功了
  if(memo[0] === 1){
    return true
  }else{
    return false
  }
};

// 贪心算法
// var canJump = function(nums) {
//   let maxJump = nums.length-1
//   for(let i = nums.length-2;i>=0;i--){
//     if(nums[i]+i >= maxJump){
//       maxJump = i
//     }
//   }
//   return maxJump === 0
// };
// @lc code=end

