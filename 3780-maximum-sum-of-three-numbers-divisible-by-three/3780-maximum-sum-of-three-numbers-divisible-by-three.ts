function maximumSum(nums: number[]): number {
  const rest0List = [];
  const rest1List = [];
  const rest2List = [];

  nums.sort((a, b) => b - a);

  let answer = 0;

  nums.forEach((value) => {
    switch (value % 3) {
      case 0:
        rest0List.push(value);

        break;
      case 1:
        rest1List.push(value);
        
        break;
      case 2:
        rest2List.push(value);
        
        break;
      default:
        break;
    }
  });

  if (rest0List.length >= 3) {
    answer = Math.max(answer, rest0List[0] + rest0List[1] + rest0List[2]);
  }

  if (rest1List.length >= 3) {
    answer = Math.max(answer, rest1List[0] + rest1List[1] + rest1List[2]);
  }

  if (rest2List.length >= 3) {
    answer = Math.max(answer, rest2List[0] + rest2List[1] + rest2List[2]);
  }

  if (rest0List.length && rest1List.length && rest2List.length) {
    answer = Math.max(answer, rest0List[0] + rest1List[0] + rest2List[0]);
  }

  return answer;
};