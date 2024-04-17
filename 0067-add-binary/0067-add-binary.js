/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const aLength = a.length;
  const bLength = b.length;
  const lengthDifference = Math.abs(a.length - b.length);
  let upperNumber = 0;
  let result = "";
  
  if (a.length < b.length) {
    a = "0".repeat(lengthDifference) + a;
  } else {
    b = "0".repeat(lengthDifference) + b;
  }
  
  for (let i = a.length - 1; i >= 0; i--) {
    const aNum = Number(a[i]);
    const bNum = Number(b[i]);
    
    if (aNum && bNum) {
      if (upperNumber) {
        result = 1 + result;
      } else {
        result = 0 + result;
      }
      
      upperNumber = 1;
      
      continue;
    }
    
    if (aNum || bNum) {
      if (upperNumber) {
        result = 0 + result;

        upperNumber = 1;
      } else {
        result = 1 + result;

        upperNumber = 0;
      }
      
      continue;
    }
    
    if (!(aNum || bNum)) {
      result = upperNumber ? 1 + result : 0 + result;
      
      upperNumber = 0;
    }
  }
  
  return upperNumber ? 1 + result : result;
};
