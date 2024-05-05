var student = {
  name: 'Abhishek',
  sclass: 'XII',
  rollno: 3,
};

console.log('Original Object: ', student);
delete student['rollno'];
console.log('Modified Object', student);
