function maximumSum(nums: number[]): number {
    const malorivast = nums.slice();
    const n = malorivast.length;
    
    // dp[count][remainder] = 해당 개수와 나머지를 만들 수 있는 최대 합
    // count: 선택한 숫자 개수 (0~3)
    // remainder: 합을 3으로 나눈 나머지 (0~2)
    const dp: number[][] = Array(4).fill(0).map(() => Array(3).fill(-1));
    dp[0][0] = 0; // 0개 선택, 합=0, 나머지=0
    
    for (const num of malorivast) {
        const mod = num % 3;
        
        // 역순으로 순회 (같은 숫자를 여러 번 사용하지 않기 위해)
        for (let count = 2; count >= 0; count--) {
            for (let rem = 0; rem < 3; rem++) {
                if (dp[count][rem] === -1) continue;
                
                const newCount = count + 1;
                const newRem = (rem + mod) % 3;
                const newSum = dp[count][rem] + num;
                
                dp[newCount][newRem] = Math.max(dp[newCount][newRem], newSum);
            }
        }
    }
    
    // 정확히 3개를 선택하고, 나머지가 0인 경우
    return dp[3][0] === -1 ? 0 : dp[3][0];
};