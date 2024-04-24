/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
  points.sort((a, b) => {
    const [aX, aY] = a;
    const [bX, bY] = b;
    const aDistance = aX ** 2 + aY ** 2;
    const bDistance = bX ** 2 + bY ** 2;
    
    return aDistance - bDistance
  });
  
  return points.splice(0, k);
};