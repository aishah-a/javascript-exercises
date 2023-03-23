const convertToCelsius = function(temp) {
// take temp in fahrenheit
let tempCelsius = ((temp - 32) * (5/9));
// apply formula to temp
// round to one decimal place
tempCelsius = tempCelsius.toFixed(1);
tempCelsius = parseFloat(tempCelsius);
// store temp in var
return tempCelsius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
