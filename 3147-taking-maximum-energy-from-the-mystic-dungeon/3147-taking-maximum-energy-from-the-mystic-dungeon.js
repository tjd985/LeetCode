/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
const maximumEnergy = function (energy, k) {
  const result = [];
  
  function search(currentIndex, currentSum) {
    if (currentIndex + k > energy.length - 1) {
      result.push(currentSum);
      
      return;
    }
    
    if (currentSum < 0) {
      currentSum = 0;
    }
    
    search(currentIndex + k, currentSum + energy[currentIndex + k]);
  }
  
  for (let i = 0; i <= k; i++) {
    search(i, energy[i]);
  }
  
  return Math.max(...result);
};