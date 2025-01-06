const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

  constructor () {
    this.listQuene = null;
  }

  getUnderlyingList() {
    return this.listQuene;
  }

  enqueue(value) {
    let newListQuene = {value, next: null};
    if (!this.listQuene) {
      this.listQuene = newListQuene;
      return this;
    }
    let val = this.listQuene;
    while (val.next) {
      val = val.next;
    }
    val.next = newListQuene;
    return this;
  }

  dequeue() {
    let remove = this.listQuene.value;
    this.listQuene = this.listQuene.next;
    return remove;
  }
}

module.exports = {
  Queue
};
