/**
 * @param {number[]} d
 * @param {number[]} r
 * @return {number}
 */
var minimumTime = function(d, r) {
  function binarySearch() {
    let left = 0;
    let right = Number.MAX_SAFE_INTEGER;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (canDelivery(mid, d, r)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  function canDelivery(time, d, r) {
    const canOneDelivery = time - Math.floor(time / r[0]);
    const canTwoDelivery = time - Math.floor(time / r[1]);

    const lcm = r[0] * r[1] / gcd(r[0], r[1]);
    const sameCharge = Math.floor(time / lcm);

    return canOneDelivery >= d[0] && canTwoDelivery >= d[1] && time - sameCharge >= d[0] + d[1];
  }

  function gcd(num1, num2) {
    return num1 % num2 === 0 ? num2 : gcd(num2, num1 % num2);
  }

  return binarySearch(d, r);
};