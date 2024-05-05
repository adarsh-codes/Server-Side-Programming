// Function to verify if an array is sorted in non-decreasing order
function isArraySorted(array) {
  // Iterate through the array, comparing each element with the next
  for (let index = 0; index < array.length - 1; index++) {
    // If the current element is greater than the next, the array is not sorted
    if (array[index] > array[index + 1]) {
      return false;
    }
  }
  // If no elements are out of order, the array is sorted
  return true;
}
