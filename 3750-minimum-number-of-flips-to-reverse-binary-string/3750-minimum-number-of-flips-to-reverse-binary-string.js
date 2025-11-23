/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
  const binary = n.toString(2);
  const reversedBinary = binary.split("").reverse();

  return reversedBinary.reduce((acc, cur, index) => {
    if (cur !== binary[index]) {
      return acc + 1;
    }

    return acc;
  }, 0);
}