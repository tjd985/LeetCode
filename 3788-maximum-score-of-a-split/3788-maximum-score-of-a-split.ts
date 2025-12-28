function maximumScore(nums: number[]): number {
  const prefixSum = [];
  const minValueList = [];
  let answer = -Infinity;

  for (let i = nums.length - 1; i >= 1; i--) {
    const currentValue = nums[i];
    
    if (!minValueList.length) {
      minValueList.push(nums[i]);

      continue;
    }

    minValueList.push(Math.min(minValueList[minValueList.length - 1], currentValue));
  }
  
  for (let i = 0; i < nums.length - 1; i++) {
    prefixSum[i] = (prefixSum[i - 1] ?? 0) + nums[i];
    answer = Math.max(prefixSum[i] - minValueList[minValueList.length - i - 1], answer);
  }

  return answer;
};