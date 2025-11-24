/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const stack = [];

    for (let i = 0; i < intervals.length; i++) {
      if (!stack.length) {
        stack.push(intervals[i]);

        continue;
      }

      const [topIntervalStart, topIntervalEnd] = stack[stack.length - 1];
      const [targetStart, targetEnd] = intervals[i];

      const canOverlap = topIntervalEnd >= targetStart;

      if (canOverlap) {
        stack.pop();
        stack.push([topIntervalStart, Math.max(topIntervalEnd, targetEnd)]);

        continue;
      }

      stack.push(intervals[i]);
    }

    return stack;
};