/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 定义一个新的空的链表
  let curr = new ListNode()
  // 将新定义的链表赋值dummy,最后返回dummy
  let dummy = curr
// 当两个链表都不为空时
  while(l1 !==null && l2 !== null){
    // 如果l1的值比l2的值小
    if(l1.val < l2.val){
      // 将l1的值存放在新的链表中
      curr.next = l1
      // 此时，l1中的指针往后移到第二个数那里
      l1 = l1.next
    }else{
      // 如果l1的值比l2的值大，将l2的值放入新的链表
      curr.next = l2
      // l2中的指针后移
      l2 = l2.next
    }
    // 每当新的链表中存入了一个数据，就将新链表的指针后移（下次存放数据在后面一位）
    curr = curr.next
  }
  // 当l1的链表不为空时，此时l2链表中的数据已经全部存入新的链表，l1中剩下的数据都是相对比较大的
  // 又因为l1链表是已经排好序的,所以直接将l1中的所有内容存入新的链表即可
  if(l1 !==null){
    curr.next = l1
  }
  if(l2 !==null){
    curr.next = l2
  }
  // 因为新的链表一直存放数据，导致指针不在第一个位置（可能在倒数第一个或第2/3位）
  // 所以返回curr的话得到的结果不是curr中所有的数据，所以将dummy.next返回
  return dummy.next
};
// @lc code=end

