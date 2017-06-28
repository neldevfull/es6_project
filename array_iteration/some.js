// Some: Check at least one conditions and returns a boolean

let students = [
  { name: 'Paul', old: 12 },
  { name: 'Maria', old: 15 },
  { name: 'John', old: 17 }
];

let areLegalAge = students.some((student) => {
  return student.old >= 18;
});

console.log("Students are legal later? ",areLegalAge);

console.log("A year later");

let yearLater = students.map((student) => {
  return student.old + 1;
});

areLegalAge = yearLater.some((old) => {
  return old >= 18;
});


console.log("Students are legal later? ", areLegalAge);
