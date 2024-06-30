/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = function(nums) {
  const cases = {
    "onlyOdd": [],
    "oddAndEven": [],
    "onlyEven": [],
    "evenAndOdd": [],
  };
  
  nums.forEach((number) => {
    if (number % 2 === 0) {
      cases.onlyEven.push(number);
      
      const oAndELatestNumber = cases.oddAndEven[cases.oddAndEven.length - 1];
      const eAndOLatestNumber = cases.evenAndOdd[cases.evenAndOdd.length - 1];;
      
      if (oAndELatestNumber) {
        if (oAndELatestNumber % 2 !== 0) {
          cases.oddAndEven.push(number);
        }
      }
      
      if (eAndOLatestNumber % 2 !== 0 || !cases.evenAndOdd.length) {
        cases.evenAndOdd.push(number);
      }
    } else {
      cases.onlyOdd.push(number);
      
      const oAndELatestNumber = cases.oddAndEven[cases.oddAndEven.length - 1];
      const eAndOLatestNumber = cases.evenAndOdd[cases.evenAndOdd.length - 1];
      
      if (oAndELatestNumber % 2 === 0 || !cases.oddAndEven.length) {
        cases.oddAndEven.push(number);
      }
      
      if (eAndOLatestNumber) {
        if (eAndOLatestNumber % 2 === 0) {
          cases.evenAndOdd.push(number);
        }
      }
    }
  });
  
  return Math.max(...Object.values(cases).map((numList) => numList.length));
};