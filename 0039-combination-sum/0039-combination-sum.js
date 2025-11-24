/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const answer = [];

  function add(currentList, index, sum) {
    if (sum === target) {
      answer.push(currentList);

      return;
    }

    for (let i = index; i < candidates.length; i++) {
      const nextNumber = candidates[i];

      if (sum + nextNumber > target) {
        break;
      }

      add([...currentList, nextNumber], i, sum + nextNumber);
    }
  }

  add([], 0, 0);

  return answer;
};