
// Given an array of objects representing people with a birth and death year, return the oldest person.

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

let date = new Date();
let currentYear = date.getFullYear();

let i = 0;
for (; i < people.length; i++) {
  let personAge
  personAge = people[i].yearOfDeath - people[i].yearOfBirth;
  let age = personAge
  for (let person of people) {
    people[i].age = age
  }
}


// calculate ages
// age = yearOfDeath people.yearOfBirth
// IF !yearOfDeath IN people
// still alive, calculate current age
// const sorted = (people.sort(a, b) => a.age > b.age ? 1 : -1

// sort by age
// return oldest


const findTheOldest = function(array) {
}

// Do not edit below this line
module.exports = findTheOldest;
