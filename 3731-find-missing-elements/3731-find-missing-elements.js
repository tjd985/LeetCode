/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
  const answer = [];
  nums.sort((a, b) => a - b);

  for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {    
    if (nums.includes(i)) {
      continue;
    }

    answer.push(i);
  }

  return answer;
};