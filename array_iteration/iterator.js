/*
    Symbol.iterator retrieves the iterator and uses the next method
    to get through the list
*/

let companies = ['google', 'facebook', 'twitter'];
let iteratorCompanies = companies[Symbol.iterator]();

companies.forEach((iterator) => {
    console.log(iteratorCompanies.next());
});

console.log(iteratorCompanies.next());
