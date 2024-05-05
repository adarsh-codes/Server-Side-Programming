// Function to check if a given value is an instance of RegExp
function isRegularExpression(value) {
  // Return true if the value is an instance of RegExp, otherwise false
  return value instanceof RegExp;
}

// Example usage:

// Define a regular expression
const regexPattern = /\d+/;
// Check if the value is a regular expression
console.log(isRegularExpression(regexPattern)); // Output: true

// Define a string (not a regular expression)
const notRegexPattern = 'This is not a regex';
// Check if the value is a regular expression
console.log(isRegularExpression(notRegexPattern)); // Output: false

