const numbers = [45, 12, 5, 9, -5, 12];

function selection_sort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}
