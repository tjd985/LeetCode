function findMaxVal(n: number, restrictions: number[][], diff: number[]): number {
  const maxList = [];
  const restrictMap = {};
  const result = [0];

  restrictions.forEach(([index, value]) => {
    restrictMap[index] = value;
  });

  for (let i = n - 1; i >= 0; i--) {
    if (restrictMap[i] !== undefined) {
      maxList[i] = Math.min(restrictMap[i], (maxList[i + 1] ?? Infinity) + (diff[i] ?? 0));

      continue;
    }

    maxList[i] = (maxList[i + 1] ?? Infinity) + (diff[i] ?? 0);
  }

  for (let i = 1; i < n; i++) {
    result[i] = Math.min(result[i - 1] + diff[i - 1], maxList[i]);
  }

  return Math.max(...result);
};