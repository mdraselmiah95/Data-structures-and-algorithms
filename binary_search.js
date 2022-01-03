const numbers = [1, 5, 13, 25, 46, 78, 89, 90, 123, 345, 566, 999];

function binary_search(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (target < array[mid]) {
      end = mid - 1;
    }
    if (target > array[mid]) {
      start = mid + 1;
    }
  }
  return -1;
}

const index = binary_search(number, 90);
console.log(index);
