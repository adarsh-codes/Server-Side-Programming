// Function to merge two sorted subarrays
function mergeSubarrays(array, start, middle, end) {
  // Create temporary arrays for the two subarrays
  const leftArray = [];
  const rightArray = [];
  
  // Populate the left subarray with elements from start to middle
  for (let i = start; i <= middle; i++) {
    leftArray.push(array[i]);
  }
  
  // Populate the right subarray with elements from middle + 1 to end
  for (let j = middle + 1; j <= end; j++) {
    rightArray.push(array[j]);
  }
  
  // Pointers to iterate through left and right subarrays
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Merge the two subarrays back into the main array
  let currentIndex = start;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      array[currentIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      array[currentIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    currentIndex++;
  }
  
  // Copy remaining elements from leftArray, if any
  while (leftIndex < leftArray.length) {
    array[currentIndex] = leftArray[leftIndex];
    leftIndex++;
    currentIndex++;
  }
  
  // Copy remaining elements from rightArray, if any
  while (rightIndex < rightArray.length) {
    array[currentIndex] = rightArray[rightIndex];
    rightIndex++;
    currentIndex++;
  }
}

// Recursive function to perform merge sort
function performMergeSort(array, start, end) {
  // Base case: return if the subarray is of size 1 or empty
  if (start >= end) {
    return;
  }
  
  // Calculate the middle index of the subarray
  const middle = Math.floor((start + end) / 2);
  
  // Recursively sort the left half
  performMergeSort(array, start, middle);
  
  // Recursively sort the right half
  performMergeSort(array, middle + 1, end);
  
  // Merge the two sorted halves
  mergeSubarrays(array, start, middle, end);
}

// Sample array to be sorted
const sampleArray = [10, 9, 6, 8, 1, 2];

// Perform merge sort on the sample array
performMergeSort(sampleArray, 0, sampleArray.length - 1);

// Output the sorted array
console.log(sampleArray);
