class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
}

addToTail(value) {
  const newNode = new Node(value);
  if (this.tail) {
    this.tail.next = newNode;
    newNode.previous = this.tail;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
}

addToHead(value) {
  const newNode = new Node(value);
  if (this.head) {
    this.head.previous = newNode;
    newNode.next = this.head;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
}

removeHead() {
  if (!this.head) return null;
  const value = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.previous = null;
  } else {
    this.tail = null;
  }
  return value;
}

removeTail() {
  if (!this.tail) return null;
  const value = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return value;
}
search(comparator) {
  let current = this.head;
  while (current) {
    if (typeof comparator === 'function' ? comparator(current.value) : comparator === current.value) {
      return current.value;
    }
    current = current.next;
  }
  return null;
}
}


module.exports = {
  Node,
  LinkedList
};
