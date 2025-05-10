class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let currentNode = this.head;
    let totalSize = 0;

    while (currentNode) {
      totalSize += 1;
      currentNode = currentNode.nextNode;
    }

    return totalSize;
  }

  getHead() {
    return this.head ? this.head.value : "";
  }

  getTail() {
    if (!this.head) {
      return "";
    }

    let currentNode = this.head;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  at(index) {
    let currentNode = this.head;

    if (index === 1) {
      return currentNode.value;
    }

    let position = 1;

    while (position < index) {
      currentNode = currentNode.nextNode;
      position += 1;
    }

    return currentNode.value;
  }

  toString() {
    let currentNode = this.head;
    let nodes = "";

    while (currentNode) {
      nodes += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }

    return `${nodes} null`;
  }
}
