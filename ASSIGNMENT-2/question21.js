// Class representing a node in the linked list
class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Reference to the next node (initially null)
  }
}

// Class representing the linked list
class LinkedList {
  constructor() {
    this.head = null; // Head node of the linked list (initially null)
  }

  // Method to append a new value to the linked list
  append(value) {
    // If the linked list is empty, create a new head node with the given value
    if (!this.head) {
      this.head = new Node(value);
    } else {
      // Otherwise, traverse the list to the last node and append the new node
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  // Method to check if the linked list is empty
  isListEmpty() {
    return this.head === null; // Return true if the head node is null
  }

  // Method to display the data in the linked list
  displayList() {
    let currentNode = this.head;
    // If the linked list is empty, display a message
    if (this.isListEmpty()) {
      console.log('Empty linked list');
    } else {
      // Otherwise, iterate through the list and display each node's data
      while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }
}

// Main function to demonstrate the linked list functionality
function main() {
  // Create a new linked list
  const list = new LinkedList();
  
  // Check if the list is empty and display the list
  console.log('Is the list empty?', list.isListEmpty());
  list.displayList();
  
  // Append values to the list
  list.append(5);
  list.append(6);
  list.append(2);
  
  // Check if the list is empty and display the list
  console.log('Is the list empty?', list.isListEmpty());
  list.displayList();
}

// Execute the main function
main();
