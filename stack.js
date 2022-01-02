//first in First out

class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
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
