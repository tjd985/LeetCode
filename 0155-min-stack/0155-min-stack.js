
var MinStack = function() {
    this.arr = [];
    this.min = null;
    this.length = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
    this.min = this.min === null ? val : Math.min(this.min, val);
    this.length++;

    return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop();
  this.min = Math.min(...this.arr);
  this.length--;

  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.length ? this.arr[this.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min === Infinity ? null : this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */