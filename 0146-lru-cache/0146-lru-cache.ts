class Node {
  key: number;
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(key: number, value: number) {
    const newNode = new Node(key, value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return newNode;
    }

    if (this.head) {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;
    }

    return newNode;
  }

  remove(node: Node) {
    // is only 1 node
    if (node.prev === null && node.next === null) {
      this.head = null;
      this.tail = null;

      return;
    }

    // is head
    if (node.prev === null) {
      this.head = node.next;
      this.head.prev = null;

      return;
    }

    // is tail
    if (node.next === null) {
      this.tail = node.prev;
      this.tail.next = null;

      return;
    }

    // is between
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

class LRUCache {
  map: Map<number, Node>;
  doublyLinkedList: DoubleLinkedList;
  maxSize: number;

    constructor(capacity: number) {
      this.map = new Map();
      this.doublyLinkedList = new DoubleLinkedList();
      this.maxSize = capacity;
    }

    get(key: number): number {
      const node = this.map.get(key);

      if (!node) {
        return -1;
      }

      this.doublyLinkedList.remove(node);
      this.map.set(key, this.doublyLinkedList.push(key, node.value));

      return node.value;
    }

    put(key: number, value: number): void {
      if (this.map.has(key)) {
        this.doublyLinkedList.remove(this.map.get(key));
      }

      this.map.set(key, this.doublyLinkedList.push(key, value));

      if (this.map.size > this.maxSize) {
        const headNode = this.doublyLinkedList.head;

        this.doublyLinkedList.remove(headNode);
        this.map.delete(headNode.key);
      }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */