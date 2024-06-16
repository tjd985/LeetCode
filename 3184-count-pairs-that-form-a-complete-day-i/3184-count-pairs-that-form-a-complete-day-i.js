/**
 * @param {number[]} hours
 * @return {number}
 */
const countCompleteDayPairs = function(hours) {
  let count = 0;
  
  for (let i = 0; i < hours.length - 1; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      const isComplete = (hours[i] + hours[j]) % 24 === 0;
      
      if (isComplete) {
        count++;
      }
    }
  }
  
  return count;
};