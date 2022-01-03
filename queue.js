//First in First out =>FIFO

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
}

const popular = new Queue();

popular.enqueue("Star Wars");
popular.enqueue("Avatar ");
popular.enqueue("Black Panther ");
popular.enqueue("Avengers");
popular.enqueue("Titanic ");

console.log(popular.queue);
