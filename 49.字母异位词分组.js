/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // 1.检查数组是否为空
  if(strs.length === 0){
    return []
  }
  const map = new Map()
  // 2.遍历所有字符串
  for(const str of strs){
    // 3.建立一个长度为26的数组，起始值为0
    // 这一步的作用是什么：假设现在有一个单词ade
    // 初始值：[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// 计算后的值：[1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const characters = new Array(26).fill(0)
    for(let i = 0;i<str.length;i++){
      //计算每个单词中每个字母的ascii码，a的值为97，减去97就是0，
      const ascii = str.charCodeAt(i) - 97
      // a时:就可以在数组的第一个脚标上的值+1（计算出现的频率）
      characters[ascii]++
    }
    // 将出现的频率（数组）转换为字符串，表示map中的key
    const key = characters.join()
    // 判断map中有没有这个key
    if(map.has(key)){
      // 有的话，将str添加到对应的key后面（注意解构之前的值）
      map.set(key,[...map.get(key),str])
    }else{
      // 没有的话就是新建一个key和value(注意是数组格式)
      map.set(key,[str])
    }
  }

  const result = []
  // 4.遍历map,
  for(const arr of map){
    // arr[0]取到的是key,arr[1]取到的是value
    result.push(arr[1])
  }
  return result
};
// @lc code=end

