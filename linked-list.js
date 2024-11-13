/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */



class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head
    }
    this.head = newNode;
    this.length += 1;

    return newNode;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let secondtoLastNode = this.head;
      while (currentNode.next) {
        secondtoLastNode = currentNode;
        currentNode = currentNode.next;
      }

      secondtoLastNode.next = null;

      this.tail = secondtoLastNode;

      this.length -= 1;

      if (!this.length) {
        this.head = null;
        this.tail = null;
      }

      return currentNode

    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.head;

      this.head = this.head.next;

      this.length -= 1;

      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return nodeToRemove
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === idx) {
        return currentNode
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this.findNode(idx);
    if (node) {
      node.val = val; s
    } else {
      return null;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false; // Invalid index
    }

    const newNode = new Node(val);

    if (idx === 0) {
      // Insert at head
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode; // If list is empty, set the tail to new node
      }
    } else {
      let current = this.head;
      let previous = null;

      // Traverse to the index
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }

      // Insert the new node
      newNode.next = current;
      previous.next = newNode;
      if (newNode.next === null) {
        this.tail = newNode; // If inserting at the end, update the tail
      }
    }

    this.length++;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    let current = this.head;

    if (idx === 0) {
      this.head = current.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let previous;
      for (let i = 0; i < idx; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      if (current === this.tail) {
        this.tail = previous;
      }
    }

    this.length--;
    return current;
  }


  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0; // Return 0 for an empty list
    }

    let current = this.head;
    let sum = 0;

    // Traverse the list and sum the values
    while (current) {
      sum += current.val;
      current = current.next;
    }

    // Calculate and return the average
    return sum / this.length;
  }
}

module.exports = LinkedList;
