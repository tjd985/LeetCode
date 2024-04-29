/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minimumAddedInteger = function(nums1, nums2) {
  const difference = [];
  const results = [];
  
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  
  if (nums2.length === 1) {
    for (const num of nums1) {
      results.push(nums2[0] - num);
    }
    
    return Math.min(...results);
  }
  
  for (let i = 1; i < nums2.length; i++) {
    difference.push(nums2[i] - nums2[i - 1]);
  }
  
  for (let i = 0; i < nums1.length - 1; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      const coppiedNums1 = [...nums1];
      
      coppiedNums1.splice(i, 1);
      coppiedNums1.splice(j - 1, 1);
      
      for (let k = 0; k < coppiedNums1.length - 1; k++) {
        if (coppiedNums1[k + 1] - coppiedNums1[k] !== difference[k]) {
          break;
        }
        
        if (k === coppiedNums1.length - 2) {
          results.push(nums2[0] - coppiedNums1[0]);
        }
      }
    }
  }
  
  return results.length ? Math.min(...results) : 0;
};
