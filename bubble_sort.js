const numbers = [12, 44, 21, 54, 65, 78, 34, 97, 11, 97, 2, 92, 8, 23];

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[y]];
      }
    }
  }
  return array;
}