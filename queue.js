//First in First out =>FIFO

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    this.queue.shift();
  }
}

const popular = new Queue();

popular.enqueue("Star Wars");
popular.enqueue("Avatar ");
popular.enqueue("Black Panther ");
popular.enqueue("Avengers");
popular.enqueue("Titanic ");
popular.enqueue("Marvel's The Avengers");
popular.enqueue("Incredible");
popular.enqueue("The Lion King");

console.log(popular.queue);
popular.dequeue();
console.log(popular.queue);
