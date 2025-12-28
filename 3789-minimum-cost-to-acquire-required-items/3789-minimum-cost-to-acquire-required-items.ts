function minimumCost(cost1: number, cost2: number, costBoth: number, need1: number, need2: number): number {
  const costMap = {};
  costMap[need1] = cost1;
  costMap[need2] = cost2;
  
  const max = Math.max(need1, need2);
  const min = Math.min(need1, need2);
  const maxCost = Math.max(cost1, cost2);
  
  const allBoth = max * costBoth;
  
  // 모두 costBoth로 사는 케이스와, 각각 따로 사는 케이스
  let answer = Math.min(allBoth, need1 * cost1 + need2 * cost2);

  // 적은 수 만큼 costBoth로 사고, 남은걸 따로 사는 케이스
  answer = Math.min(answer, min * costBoth + Math.abs(need1 - need2) * costMap[max]);

  return answer;
};