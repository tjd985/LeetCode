/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    return function(n) {
      let startIndex = 1;
      let endIndex = n;
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      
      while (true) {
        const isBad = isBadVersion(middleIndex);

        if (!isBad) {
          startIndex = middleIndex + 1;
          middleIndex = Math.floor((startIndex + endIndex) / 2);
          
          continue;
        }
        
        if (!isBadVersion(middleIndex - 1)) {
          return middleIndex;
        }
        
        endIndex = middleIndex - 1;
        middleIndex = Math.floor((startIndex + endIndex) / 2);
      }
    };
};