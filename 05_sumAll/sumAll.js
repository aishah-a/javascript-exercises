const sumAll = function(num1, num2) {
    let finalSum = 0;
    for (let i = num1; i < num2 + 1; i++) {
        finalSum += i;
    }
    return finalSum;
};


// number 1
// number 2
// return all numbers between = num = num 1 OR num > num1 AND num < num2

// Do not edit below this line
module.exports = sumAll;
