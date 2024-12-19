const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.tail) {
      // Append to the end and adjust tail
      this.tail.next = newNode;
    } else {
      // If the queue is empty update the head
      this.head = newNode;
    }
    this.tail = newNode; // New node is now the tail
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    // If queue is now empty, also reset the tail to null
    if (!this.head) {
      this.tail = null;
    }
    return removedValue;
  }
}

module.exports = {
  Queue
};
