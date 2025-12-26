function threeSum(nums: number[]): number[][] {
  const answer = [];
  const has = {};

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const currentValue = nums[i];

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = currentValue + nums[j] + nums[k];

      if (sum > 0) {
        k--;

        continue;
      }

      if (sum < 0) {
        j++;

        continue;
      }

      const key = `${currentValue}${nums[j]}${nums[k]}`;

      if (has[key]) {
        j++;
        
        continue;
      }

      answer.push([currentValue, nums[j], nums[k]]);
      has[key] = true;
    }
  }

  return answer;
};