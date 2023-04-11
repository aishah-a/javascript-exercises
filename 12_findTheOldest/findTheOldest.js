const findTheOldest = function(array) {
  return array.reduce((previous, current) => {
    const oldestAge = getAge(previous.yearOfBirth, previous.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    
    return oldestAge < currentAge ? current : previous
  })
};

const getAge = function(birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
}

/*

forEach (person in people) 
  if (yearOfDeath) {
    let i = 0;
    for (; i < people.length; i++) {
      let personAge
      personAge = people[i].yearOfDeath - people[i].yearOfBirth;
      let age = personAge
      for (let person of people) {
        people[i].age = age
        }
      }
    const peopleSorted = []
    peopleSorted.push(people.sort((a, b) => a.age < b.age ? 1 : -1));
    return peopleSorted[0][0];
  }
}
*/


// Do not edit below this line
module.exports = findTheOldest;
