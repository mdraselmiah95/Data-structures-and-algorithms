//First in First out =>FIFO

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
}
