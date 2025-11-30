/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countElements = function(nums, k) {
  nums.sort((a, b) => a - b);
  let answer = 0;

  if (k === 0) {
    return nums.length;
  }

  let same = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (next > current) {
      if (nums.length - 1 - i >= k) {
        answer += same;
        same = 1;

        continue;
      }
    }

    same++;
  }

  return answer;
};