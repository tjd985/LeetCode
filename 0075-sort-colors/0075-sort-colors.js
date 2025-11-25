/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      const num1 = nums[j];
      const num2 = nums[j + 1];

      if (num2 < num1) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};