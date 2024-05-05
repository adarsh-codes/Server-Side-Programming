// Function to check and parse a JSON string and handle exceptions
function checkBlock() {
  // Define a JSON string with a syntax error
  const faultyJsonString = '{"name": "John",  : 30}';
  
  // Try to parse the JSON string
  try {
    // Attempt to parse the JSON string
    const parsedData = JSON.parse(faultyJsonString);
    // If parsing is successful, log the parsed data
    console.log(parsedData);
  } catch (error) {
    // Handle any errors that occur during parsing
    if (error instanceof SyntaxError) {
      // If the error is a SyntaxError, log a specific message
      console.log('Syntax Error');
    } else {
      // If the error is of another type, log a general error message
      console.log('An error occurred: ' + error.message);
    }
  }
}

// Call the checkBlock function to execute the code
checkBlock();
