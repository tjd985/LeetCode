/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const zeroCount = nums.filter((value) => !value).length;

  if (zeroCount >= 2) {
    return new Array(nums.length).fill(0);
  }

  const beforeMultiple = [];
  const afterMultiple = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      beforeMultiple.push(1);
      afterMultiple.push(1);

      continue;
    }

    beforeMultiple.push(beforeMultiple[i - 1] * nums[i - 1]);
    afterMultiple.push(afterMultiple[i - 1] * nums[nums.length - i]);
  }

  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    answer[i] = beforeMultiple[i] * afterMultiple[nums.length - i - 1];
  }

  return answer;
};