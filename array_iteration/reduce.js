// Reduces an array to values other than the original

let students = [
    { name: 'John', old: 18},
    { name: 'Peter', old: 56},
    { name: 'Maria', old: 32}
]

// First parameter is the accumulator, the second is the iterator
let names = students.reduce((getNames, student) => {
    getNames.push(student.name);
    return getNames;
}, []);

console.log(names);
