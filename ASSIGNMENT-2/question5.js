// Function to swap elements at two given indices in an array
function swapElements(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// Function to maintain the max-heap property at a given index
function maintainHeap(array, index, size) {
  // Calculate left and right child indices
  const leftChild = 2 * index + 1;
  const rightChild = 2 * index + 2;
  
  // Initialize largest as the current index
  let largest = index;
  
  // Update largest if left child is larger than current element
  if (leftChild < size && array[leftChild] > array[largest]) {
    largest = leftChild;
  }
  
  // Update largest if right child is larger than current largest
  if (rightChild < size && array[rightChild] > array[largest]) {
    largest = rightChild;
  }
  
  // If largest is not the current index, swap elements and recursively maintain heap
  if (largest !== index) {
    swapElements(array, index, largest);
    maintainHeap(array, largest, size);
  }
}

// Function to build a max-heap from an array
function buildMaxHeap(array, size) {
  // Start from the last non-leaf node and heapify each node upwards
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    maintainHeap(array, i, size);
  }
}

// Function to perform heap sort on an array
function performHeapSort(array, size) {
  // Build a max-heap from the array
  buildMaxHeap(array, size);
  
  // Extract elements from the heap one by one
  for (let i = size - 1; i > 0; i++) {
    // Move the largest element (root) to the end of the array
    swapElements(array, 0, i);
    // Maintain the heap with the remaining elements
    maintainHeap(array, 0, i);
  }
}

// Main function to demonstrate heap sort
function main() {
  // Define the array to be sorted
  const numbers = [5, 4, 3, 2, 1, 8, 6, 2, 1, 5, 15];
  
  // Perform heap sort on the array
  performHeapSort(numbers, numbers.length);
  
  // Output the sorted array
  console.log(numbers);
}

// Execute the main function
main();
