class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.length += 1;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
      this.tail = newNode;
      this.length += 1;
    }
  }

  // Adds a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.length += 1;
  }

  // Returns the number of nodes in the list
  size() {
    return this.length;
  }

  // Returns the first node in the list
  getHead() {
    return !this.head ? null : this.head.value;
  }

  // Returns the last node in the list
  getTail() {
    return !this.tail ? null : this.tail.value;
  }

  // Returns the node at the given index
  at(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      return this.head.value;
    }

    let currentNode = this.head;
    let position = 0;

    while (position < index) {
      currentNode = currentNode.nextNode;

      if (currentNode === null) {
        return null;
      }

      position += 1;
    }

    return currentNode.value;
  }

  // Inserts a new node at the given index
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    let position = 1;

    while (position < index) {
      if (currentNode.nextNode === null) {
        currentNode.nextNode = newNode;
        this.length += 1;
        return;
      }

      currentNode = currentNode.nextNode;
      position += 1;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
    this.length +=1;
  }

  // Removes the node at the given index
  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      const removeNode = this.head;
      this.head = this.head.nextNode;
      this.length -= 1;

      return removeNode.value;
    }

    let currentNode = this.head;
    let position = 1;
    
    while (position < index) {
      if (currentNode.nextNode === null) {
        return null;
      }

      currentNode = currentNode.nextNode;
      position += 1;
    }

    const removeNode = currentNode.nextNode;

    currentNode.nextNode = removeNode.nextNode;
    this.length -=1;

    return removeNode.value;
  }

  // Removes the last element in the list
  pop() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return poppedNode.value;
    }

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.nextNode) {
      newTail = currentNode;
      currentNode = currentNode.nextNode;
    }

    this.tail = newTail;
    this.tail.nextNode = null;
    this.length -= 1;

    return currentNode.value;
  }

  // Return true if the value is in the list, otherwise false
  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  // Returns the index of the node with the given value, otherwise null
  find(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.nextNode;
      index += 1;
    }

    return null;
  }

  // Represents the objects in the list as strings
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
