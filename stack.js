//first in First out

class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
  }
  remove() {
    return this.stack.pop();
  }
}

const plates = new Stack();
plates.add("Apple");
plates.add("Watermelon");
plates.add("Orange");
plates.add("Pear");
plates.add("Cherry");
plates.add("Strawberry");
plates.add("Nectarine");
plates.add("Grape");
plates.add("Blueberry");
plates.add("Pomegranate");

console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
plates.remove();
