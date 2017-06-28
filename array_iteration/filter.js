// Filter: Purpose of filter to list

let students = [
  { name: 'Paul', old: 18 },
  { name: 'Maria', old: 16 },
  { name: 'John', old: 20 }
];

let studentsLegalAge = students.filter((student) => {
  return student.old >= 18;
});

for (let student of studentsLegalAge) {
  console.log(student.name);
}
