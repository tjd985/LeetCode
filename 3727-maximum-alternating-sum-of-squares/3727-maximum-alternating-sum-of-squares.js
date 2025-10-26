const maxAlternatingSum = function(nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));

  console.log(nums);
  
  let answer = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const minNumber = nums[i];
    const maxNumber = nums[nums.length - (i + 1)];
    
    if (i >= nums.length - (i + 1)) {
      if (i > nums.length - (i + 1)) {
        return answer;
      }
      
      return answer + Math.pow(minNumber, 2);
    }

    answer += Math.pow(maxNumber, 2);
    answer -= Math.pow(minNumber, 2);
  }

  return answer;
}