const longestPalindrome = function(s) {
  let result = 0;
  const keys = {};
  
  for (const char of s) {
    keys[char] = (keys[char] || 0) + 1;
    
    if (keys[char] % 2 == 0) {
      result += 2;
    }
  }
  
  return s.length > result ? result + 1 : result;
};