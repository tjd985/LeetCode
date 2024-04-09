
const MyQueue = function() {
  this.queue = [];
  
  return this;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue.push(x);
  
  return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let value = null;
  
  if (this.queue.length) {
    value = this.queue.splice(0, 1);
  }
  
  return value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue.length ? this.queue[0] : null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length ? false : true;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */