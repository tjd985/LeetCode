/**
 * @param {number} hp
 * @param {number[]} damage
 * @param {number[]} requirement
 * @return {number}
 */
var totalScore = function(hp, damage, requirement) {
  let answer = 0;

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (target > arr[mid]) {
        left = mid + 1;

        continue;
      }

      right = mid;
    }

    return left;
  }

  const accDamageList = [0];

  damage.forEach((value, index) => {
    accDamageList[index + 1] = accDamageList[index] + value;
  });

  for (let roomIndex = 0; roomIndex < damage.length; roomIndex++) {
    const minHP = accDamageList[roomIndex + 1] + requirement[roomIndex];
    const gap = minHP - hp;

    const startIndex = binarySearch(accDamageList, gap);

    if (startIndex <= roomIndex) {
      answer += roomIndex - startIndex + 1;
    }
  }

  return answer;
};