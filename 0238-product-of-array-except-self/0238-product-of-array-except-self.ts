function productExceptSelf(nums: number[]): number[] {
  const beforeList = [1];
  const answer = [];

  for (let i = 1; i < nums.length; i++) {
    beforeList[i] = beforeList[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = beforeList[i] * right;
    right *= nums[i];
  }

  return answer;
};