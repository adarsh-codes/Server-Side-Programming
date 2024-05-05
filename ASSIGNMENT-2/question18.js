// Function to convert lowercase string to uppercase and uppercase string to lowercase
function convertCase(lowercase, uppercase) {
  // Convert lowercase string to uppercase
  const upperConverted = lowercase.toUpperCase();
  
  // Convert uppercase string to lowercase
  const lowerConverted = uppercase.toLowerCase();
  
  // Log the converted strings
  console.log('Converted to uppercase:', upperConverted);
  console.log('Converted to lowercase:', lowerConverted);
}

// Main function to demonstrate the conversion
function main() {
  // Define lowercase and uppercase strings
  const lowercaseString = 'abc';
  const uppercaseString = 'DEF';
  
  // Perform case conversion and display the results
  convertCase(lowercaseString, uppercaseString);
}

// Execute the main function
main();
