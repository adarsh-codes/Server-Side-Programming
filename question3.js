// Function to swap elements at two given indices in an array
function swapElements(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// Function to partition the array around a pivot
function partition(array, start, end) {
  // Use the first element as the pivot
  const pivotIndex = start;
  let left = start;
  let right = end;

  // Move elements around the pivot
  while (left < right) {
    // Increment left index while array[left] is less than or equal to pivot
    while (left < end && array[left] <= array[pivotIndex]) {
      left++;
    }
    
    // Decrement right index while array[right] is greater than pivot
    while (right > start && array[right] > array[pivotIndex]) {
      right--;
    }
    
    // If left and right have not crossed, swap elements at left and right indices
    if (left < right) {
      swapElements(array, left, right);
    }
  }
  
  // Swap the pivot element with the right index element to place the pivot in its final position
  swapElements(array, pivotIndex, right);
  
  // Return the final index of the pivot
  return right;
}

// Function to perform quicksort on an array
function quickSortArray(array, start, end) {
  if (start < end) {
    // Partition the array and get the index of the pivot element
    const pivotIndex = partition(array, start, end);
    
    // Recursively sort the subarrays before and after the pivot
    quickSortArray(array, start, pivotIndex - 1);
    quickSortArray(array, pivotIndex + 1, end);
  }
}

// Sample array to be sorted
const numbers = [10, 9, 7, 6, 5, 2, 1];

// Perform quicksort on the array
quickSortArray(numbers, 0, numbers.length - 1);

// Output the sorted array
console.log(numbers);
