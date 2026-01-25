function rotateElements(nums: number[], k: number): number[] {
  if (k === 0) {
    return nums;
  }

  const nonNegativeList = nums.map((num, i) => {
    return num > -1 ? [i, num] : null;
  }).filter((value) => !!value);

  const diff = k % nonNegativeList.length;
  const afterList = [];
  
  nonNegativeList.forEach((nonNegative, index) => {
    const [_, value] = nonNegative;
    const targetIndex = (index - diff + nonNegativeList.length) % nonNegativeList.length;

    const [targetPosition, nonUse] = nonNegativeList[targetIndex];

    afterList.push([targetPosition, value]);
  });

  afterList.forEach(([index, value]) => {
    nums[index] = value;
  });

  return nums;
};