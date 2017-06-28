// Map: Purpose to manipulate the values of the array

const numbers = [2, 4, 8];

const double = numbers.map((number) => {
  return number * 2;
});

for (let number of double) {
  console.log(number);
}
