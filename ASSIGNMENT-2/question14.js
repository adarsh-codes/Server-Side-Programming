var library = [
  {
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    readingStatus: true,
  },
  {
    author: 'George Orwell',
    title: '1984',
    readingStatus: true,
  },
  {
    author: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    readingStatus: false,
  },
];

library.forEach((book) => {
  console.log(book['title'], ':', book['readingStatus']);
});
