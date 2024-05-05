function findElementIndex(array, target) {
  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Check if the current element is the target
    if (array[i] === target) {
      // If a match is found, return the index
      return i;
    }
  }
  
  // If no match is found, return -1
  return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const searchValue = 5;

console.log(findElementIndex(numbers, searchValue));
