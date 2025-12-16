/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const pMap = {};

  for (const str of p) {
    pMap[str] = (pMap[str] ?? 0) + 1;
  }

  let left = 0;
  let right = 0;
  let count = p.length;
  const answer = [];

  while (right < s.length) {
    const currentValue = s[right];

    console.log(left, right, count);

    if (pMap[currentValue] > 0) {
      count--;
    }

    pMap[currentValue] -= 1;
    right++;

    if (count === 0) {
      answer.push(left);
    }

    if (right - left === p.length) {
      if (pMap[s[left]] >= 0) {
        count++;
      }

      pMap[s[left]] += 1;
      left++;
    }
  }

  return answer;
};