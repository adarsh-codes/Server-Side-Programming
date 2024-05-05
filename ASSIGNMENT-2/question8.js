function toCharArray(word) {
  charArray = [];
  for (let i = 0; i < word.length; i++) charArray.push(word[i]);
  return charArray;
}

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

function main() {
  str = 'asdanfjksdbzxcabnksjba';
  charArray = toCharArray(str);
  bubbleSort(charArray);
  console.log(charArray.join(''));
}

main();
