function minimumDistance(nums) {
  const firstSeen = new Map();
  const secondSeen = new Map();
  let answer = -1;
  
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    
    if (secondSeen.has(currentValue)) {
      const firstSeenIndex = firstSeen.get(currentValue);
      const secondSeenIndex = secondSeen.get(currentValue);
      const distance = 2 * (i - firstSeenIndex);
      
      answer = answer === -1 ? distance : Math.min(answer, distance);
      
      firstSeen.set(currentValue, secondSeenIndex);
      secondSeen.set(currentValue, i);
      
      continue;
    }
    
    if (firstSeen.has(currentValue)) {
      secondSeen.set(currentValue, i);
      
      continue;
    }
    
    firstSeen.set(currentValue, i);
  }
  
  return answer;
}