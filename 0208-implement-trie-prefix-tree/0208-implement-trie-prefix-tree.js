
var Trie = function() {
  this.length = 0;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this[this.length + 1] = word;
  this.length++;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const latestWord = this[this.length];
  
  for (let i = 1; i <= this.length; i++) {
    if (this[i] === word) {
      return true;
    }
  }
  
  return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  for (let i = 1; i <= this.length; i++) {
    const currentWord = this[i];
    
    for (let j = 0; j < prefix.length; j++) {
      if (currentWord[j] !== prefix[j]) {
        break;
      }
      
      if (j === prefix.length - 1) {
        return true;
      }
    }
  }
  
  return false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */