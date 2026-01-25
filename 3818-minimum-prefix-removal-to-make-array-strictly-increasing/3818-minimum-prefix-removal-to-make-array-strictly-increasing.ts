function minimumPrefixLength(nums: number[]): number {
  let answer = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (next <= current) {
      answer = i + 1;
    }
  }

  return answer;
};