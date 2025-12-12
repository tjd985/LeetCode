
var TimeMap = function() {
    this.map = new Map();

    return null;
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  const list = this.map.get(key) ?? [];

  if (!list.length) {
     this.map.set(key, list);
  }

  list.push([timestamp, value]);

  return null;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  const targetList = this.map.get(key);

  if (!targetList) {
    return '';
  }

  let left = 0;
  let right = targetList.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (timestamp >= targetList[mid][0]) {
      left = mid + 1;

      continue;
    }

    right = mid;
  }

  if (targetList[left][0] <= timestamp) {
    return targetList[left][1];
  }

  return targetList[left - 1]?.[1] ?? '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */