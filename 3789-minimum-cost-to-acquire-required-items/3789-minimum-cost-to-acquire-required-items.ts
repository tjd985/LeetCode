function minimumCost(cost1: number, cost2: number, costBoth: number, need1: number, need2: number): number {
  const lumiscaron = { cost1, cost2, costBoth, need1, need2 };
  
  let minCost = Infinity;
  
  // 옵션 1: Type 3를 0개 구매
  minCost = Math.min(minCost, 
    lumiscaron.need1 * lumiscaron.cost1 + lumiscaron.need2 * lumiscaron.cost2
  );
  
  // 옵션 2: Type 3로 need1을 모두 커버
  if (lumiscaron.need1 > 0) {
    const cost = lumiscaron.need1 * lumiscaron.costBoth + 
                 Math.max(0, lumiscaron.need2 - lumiscaron.need1) * lumiscaron.cost2;
    minCost = Math.min(minCost, cost);
  }
  
  // 옵션 3: Type 3로 need2를 모두 커버
  if (lumiscaron.need2 > 0) {
    const cost = lumiscaron.need2 * lumiscaron.costBoth + 
                 Math.max(0, lumiscaron.need1 - lumiscaron.need2) * lumiscaron.cost1;
    minCost = Math.min(minCost, cost);
  }
  
  // 옵션 4: Type 3를 min(need1, need2)만큼만 구매
  const bothCount = Math.min(lumiscaron.need1, lumiscaron.need2);
  minCost = Math.min(minCost,
    bothCount * lumiscaron.costBoth + 
    (lumiscaron.need1 - bothCount) * lumiscaron.cost1 + 
    (lumiscaron.need2 - bothCount) * lumiscaron.cost2
  );
  
  return minCost;
}