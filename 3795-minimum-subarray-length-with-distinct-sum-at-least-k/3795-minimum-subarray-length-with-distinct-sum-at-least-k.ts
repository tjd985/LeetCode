function minLength(nums: number[], k: number): number {
  const has = {
    [nums[0]]: 1,
  };
  const MAX = nums.length - 1;
  
  let left = 0;
  let right = 0;
  let sum = nums[0];
  let answer = -1;

  while (true) {
    if (sum >= k) {
      const length = right - left + 1;
      
      answer = answer === -1 ? length : Math.min(answer, length);
    }
    
    if (sum < k) {
      right++;

      if (right > MAX) {
        break;
      }

      if (has[nums[right]]) {
        has[nums[right]] = (has[nums[right]] ?? 0) + 1;
        
        continue;
      }

      has[nums[right]] = (has[nums[right]] ?? 0) + 1;
      
      sum += nums[right];
    } else {
      has[nums[left]]--;

      if (!has[nums[left]]) {
        sum -= nums[left];
      }
      
      left++;

      if (left > right || left > MAX) {
        break;
      }
    }
  }

  return answer;
};