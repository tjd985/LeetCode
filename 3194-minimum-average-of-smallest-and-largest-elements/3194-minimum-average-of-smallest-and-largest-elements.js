/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumAverage(nums) {
  const isVisit = Array.from({length: nums.length}, (value) => false);
  const result = [];
  
  for (let i = 0 ; i < Math.floor(nums.length); i++) {
    const [minValue, maxValue] = findMinAndMax(nums, isVisit);
    
    result.push(Number(((minValue + maxValue) / 2).toFixed(1)));
  }
  
  return Math.min(...result);
};

function findMinAndMax(list, isVisit) {
  let minIndex = 0;
  let minValue = Infinity;
  let maxIndex = 0;
  let maxValue = 0;
  
  for (let i = 0; i < list.length; i++) {
    const currentNum = list[i];
    
    if (isVisit[i]) {
      continue;
    }
    
    if (minValue > currentNum) {
      minValue = currentNum;
      minIndex = i;
    }
    
    if (maxValue < currentNum) {
      maxValue = currentNum;
      maxIndex = i;
    }
  }
  
  isVisit[minIndex] = true;
  isVisit[maxIndex] = true;
  
  return [minValue, maxValue];
}