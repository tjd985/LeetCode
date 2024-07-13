/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  const res = Array(amount + 1).fill();
  let cur = 0;
  res[0] = 0;
  
  while (cur <= amount) {
    cur++;

    res[cur] = 1;
    if (coins.includes(cur)) continue;

    const temp = [];
    
    for (const coin of coins) {
      if (cur - coin < 0) {
        continue;
      }
      
      if (res[cur - coin] === -1) {
        continue;
      }
      
      temp.push(res[cur - coin]);
    }

    temp.length === 0 ? (res[cur] = -1) : (res[cur] += Math.min(...temp));
  }

  return res[amount];
};
