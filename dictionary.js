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
phoneBook.add("Robert De Niro", "623542367");
phoneBook.add("Brad Pitt", "08193472897");

console.log(phoneBook.dictionary);

// const Johnny = phoneBook.get("Johnny Depp");
// console.log(Johnny);

const Niro = phoneBook.get("Robert De Niro");
console.log(Niro);
