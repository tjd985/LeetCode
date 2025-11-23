/**
 * @param {number} n
 * @param {number} target
 * @return {number[]}
 */

 function sumToN(n) {
  return n * (n + 1) / 2;
 }

function lexSmallestNegatedPerm(n, target) {
  const sum = sumToN(n);
  const answer = [];

  if (target < -sum || target > sum || (taget === 0 && n === 1)) {
    return [];
  }

  for (let i = n; i >= 1; i--) {
    if (sumToN(i - 1) - i >= target) {
      target += i;
      answer.push(-i);

      continue;
    }

    target -= i;
    answer.push(i);
  }

  if (target !== 0) return [];

  return answer.sort((a, b) => a - b);
}