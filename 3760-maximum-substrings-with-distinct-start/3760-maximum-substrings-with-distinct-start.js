/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
  const set = new Set(...[s.split("")]);

  return set.size;
};