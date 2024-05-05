function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function bubbleSort(array) {
  let i = 0;
  while (i < array.length) {
    let flag = false;
    let j = 0;
    while (j < array.length) {
      if (array[j] > array[j + 1]) {
        flag = true;
        swap(array, j, j + 1);
      }
      j++;
    }
    if (!flag) break;
    i++;
  }
}

const array = [10, 8, 6, 5, 4, 2, 3, 1, 0, 6, 0];
bubbleSort(array);
console.log(array);
