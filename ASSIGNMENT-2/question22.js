// Class representing a rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width; // Width of the rectangle
    this.height = height; // Height of the rectangle
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height; // Formula for area: width * height
  }

  // Method to calculate the perimeter of the rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height); // Formula for perimeter: 2 * (width + height)
  }
}

// Main function to demonstrate the usage of the Rectangle class
function main() {
  // Create a Rectangle instance with width 5 and height 4
  const rectangle = new Rectangle(5, 4);
  
  // Calculate and print the area of the rectangle
  console.log('Area:', rectangle.calculateArea());
  
  // Calculate and print the perimeter of the rectangle
  console.log('Perimeter:', rectangle.calculatePerimeter());
}

// Execute the main function
main();
