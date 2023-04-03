const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(array) {
  let result = array.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
  }, 0);
  return result;
}

const multiply = function(array) {
  let result = array.reduce((accumulator, currentVal) => {
   return accumulator * currentVal
  }, 1)
  return result;
}


const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
