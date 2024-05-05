function findWordPositions(text, searchTerm) {
  const positions = [];
  let searchIndex = -1;
  while (true) {
    // Find the next occurrence of the searchTerm in the text, starting from searchIndex + 1
    searchIndex = text.indexOf(searchTerm, searchIndex + 1);
    // If searchIndex is negative, no more occurrences were found; break the loop
    if (searchIndex < 0) {
      break;
    }
     // Add the found position to the positions array
    positions.push(searchIndex);
  }
  return positions;
}
const sentence = 'Today is a good day to go out and play cricket, and it is a good day for a picnic.';
const searchTerm = 'is';
console.log(findWordPositions(sentence, searchTerm));
