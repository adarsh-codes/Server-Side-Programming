function insertionSort(array) {
  let i = 1;
  while (i < array.length) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
    i++;
  }
}

const array = [10, 8, 6, 4, 2];
insertionSort(array);
console.log(array);
