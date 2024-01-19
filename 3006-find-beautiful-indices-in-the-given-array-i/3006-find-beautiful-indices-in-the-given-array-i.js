const beautifulIndices = function(s, a, b, k) {
  const indexA = [];
  const indexB = [];
  const result = new Set();
  
  for (let i = 0; i < s.length; i++) {
    const subStringA = s.slice(i, i + a.length);
    const subStringB = s.slice(i, i + b.length);
    
    if (subStringA === a) {
      indexA.push(i);
    }
    
    if (subStringB === b) {
      indexB.push(i);
    }
  }
  
  for (const a of indexA) {
    for (const b of indexB) {
      if (Math.abs(a - b) <= k) {
        result.add(a);
      }
    }
  }
  
  return Array.from(result).sort((a, b) => a - b);
};