function productExceptSelf(nums: number[]): number[] {
  const zeroIndexMap = new Map();
  let hasZero = false;

  const multiple = nums.reduce((acc, cur, index) => {
    if (!cur) {
      zeroIndexMap.set(index,true);
      hasZero = true;

      return acc;
    }

    return acc * cur;
  }, 1);

  if (zeroIndexMap.size >= 2) {
    return new Array(nums.length).fill(0);
  }

  return nums.map((value, index) => {
    if (!value) {
      return multiple;
    }

    if (hasZero) {
      return 0;
    }

    return multiple / value;
  });
};