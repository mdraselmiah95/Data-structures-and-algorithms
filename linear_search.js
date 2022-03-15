const number = [23, 5, 35, 2134, 7, 99, 45, 23, 76, 34];
function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}
// const index = linear_search(number, 34);
// const index = linear_search(number, 35);
const index = linear_search(number, 305);
console.log(index);
