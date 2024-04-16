var longestPalindrome = function(s) {
  let ans = 0;
  const keys = {};
  
  for (const char of s) {
    keys[char] = (keys[char] || 0) + 1;
    
    if (keys[char] % 2 == 0) {
      ans += 2;
    }
  }
  
  console.log(ans);
  
  return s.length > ans ? ans + 1 : ans;
};