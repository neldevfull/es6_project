// Every: Check all conditions and returns a boolean

let students = [
  { name: 'Paul', old: 18 },
  { name: 'Maria', old: 18 },
  { name: 'John', old: 20 }
];

let areLegalAge = students.every((student) => {
  return student.old >= 18;
});

console.log(areLegalAge);
