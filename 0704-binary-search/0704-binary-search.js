/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let middleIndex = Math.floor(nums.length / 2);
  
  while(startIndex <= endIndex) {
    if (nums[middleIndex] === target) {
      return middleIndex;
    }
    
    if (nums[middleIndex] > target) {
      endIndex = middleIndex - 1;
      middleIndex = Math.floor((endIndex + startIndex) / 2);
    } else {
      startIndex = middleIndex + 1;
      middleIndex = Math.floor((endIndex + startIndex) / 2);
    }
  }
  
  return -1;
};