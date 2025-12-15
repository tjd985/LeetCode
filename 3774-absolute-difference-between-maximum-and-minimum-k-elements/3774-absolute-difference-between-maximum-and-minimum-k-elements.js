/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
  nums.sort((a, b) => a - b);
  let maxSum = 0;
  let minSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[nums.length - (i + 1)];
    minSum += nums[i];
  }

  return Math.abs(maxSum - minSum);
};