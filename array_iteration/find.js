// Find: When we want to find a specific item

let students = [
  { name: 'Paul', old: 18 },
  { name: 'Maria', old: 16 },
  { name: 'John', old: 20 }
];

let student = students.find((student) => {
  return student.name === 'Paul';
});

console.log(student);
