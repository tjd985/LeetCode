/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const targetNum = Math.ceil(nums.length / 2);
  const numCount = {};
  
  for (const num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;
    
    if (numCount[num] >= targetNum) {
      return num;
    }
  }
};