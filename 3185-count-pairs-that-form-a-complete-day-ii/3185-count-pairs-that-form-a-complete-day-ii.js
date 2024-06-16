/**
 * @param {number[]} hours
 * @return {number}
 */
const countCompleteDayPairs = function(hours) {
  const hashMap = new Map();
  const set = new Set();
  let result = 0;
  
  for (const hour of hours) {
    const rest = hour % 24;
    set.add(rest);
    
    if (hashMap.has(rest)) {
      hashMap.get(rest).push(hour);
    } else {
      hashMap.set(rest, [hour]);
    }
  }
  
  for (const value of set) {
    const otherValue = 24 - value;
    const valueCount = hashMap.get(value).length;
    
    if (value === 0 || value === 12) {
        result += valueCount * (valueCount - 1) / 2;
        
        continue;
      }
    
    if (set.has(otherValue)) {
      const otherValueCount = hashMap.get(otherValue).length;
      
      result += valueCount * otherValueCount;
    }
    
    set.delete(value);
    set.delete(otherValue);
  }
  
  return result;
};