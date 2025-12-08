/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let answer = 0;

  while (left < right) {
    const leftValue = height[left];
    const rightValue = height[right];

    answer = Math.max(answer, (right - left) * Math.min(leftValue, rightValue));

    if (leftValue < rightValue) {
      left++;

      continue;
    }

    right--;
  }

  return answer;
};