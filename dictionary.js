class Dictionary {
  constructor() {
    this.dictionary = {};
  }
  add(key, value) {
    this.dictionary[key] = value;
  }
  get(key) {
    return this.dictionary[key];
  }
}

const phoneBook = new Dictionary();

phoneBook.add("Matt Damon", "012348927348");
phoneBook.add("George Clooney", "548902356236");
phoneBook.add("Johnny Depp", "52142834085");
phoneBook.add("Ben Affleck", "6532168452");
phoneBook.add("Kevin Spacey", "729374098");

console.log(phoneBook.dictionary);
