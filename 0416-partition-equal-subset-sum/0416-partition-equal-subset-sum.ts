function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);

    if (sum % 2 !== 0) {
      return false;
    }

    const target = sum / 2;

    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
      for (let i = target; i >= 0; i--) {
        if (dp[i]) {
          continue;
        }

        dp[i] = dp[i - num];

        if (dp[target]) {
          return true;
        }
      }
    }

    return false;
};