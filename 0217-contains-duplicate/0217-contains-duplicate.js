/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const numsObject = {};
  
  for (const num of nums) {
    if (numsObject[num]) {
      return true;
    }
    
    numsObject[num] = true;
  }
  
  return false
};