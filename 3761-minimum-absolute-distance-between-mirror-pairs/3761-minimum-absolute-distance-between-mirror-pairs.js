function reverseNumber(number) {
  return String(Number(String(number).split("").reverse().join("")));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
  const mirrorMap = new Map();

  let answer = -1;

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const key = reverseNumber(number);

    if (mirrorMap.has(String(number))) {
      const value = mirrorMap.get(String(number));
      
      answer = answer === -1 ? i - value : Math.min(answer, i - value);
    }

    mirrorMap.set(key, i);
  }

  return answer;
};