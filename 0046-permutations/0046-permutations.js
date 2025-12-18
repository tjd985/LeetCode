/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const answer = [];
  const isVisit = new Array(nums.length).fill(false);

  const inner = (current, isVisit) => {
    if (current.length === nums.length) {
      return answer.push(current);
    }

    for (let i = 0; i < nums.length; i++) {
      const currentValue = nums[i];

      if (isVisit[i]) {
        continue;
      }

      isVisit[i] = true;

      inner([...current, currentValue], isVisit);

      isVisit[i] = false;
    }
  }

  inner([], isVisit);

  return answer;
};