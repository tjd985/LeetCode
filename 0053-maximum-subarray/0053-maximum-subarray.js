/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let result = 0;
  let currentMaxNum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    if (num < 0) {
      currentMaxNum = currentMaxNum > result ? currentMaxNum : result;
    }
    
    result = result + num > 0 ? result + num : 0;
  }

  if (currentMaxNum === 0 && result === 0) {
    return Math.max(...nums);
  }
  
  return currentMaxNum > result ? currentMaxNum : result;
};