const maxProfit = function(prices) {
  let profit = 0;
  let buyPrice = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
      
      continue;
    }
    
    const newProfit = prices[i] - buyPrice;
    
    profit = profit < newProfit ? newProfit : profit;
  }
  
  return profit
};