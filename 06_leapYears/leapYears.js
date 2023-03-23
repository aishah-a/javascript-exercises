const leapYears = function(year) {
    let isLeapYear = false;
    // divisible by 4
    if (year % 4 === 0) {
        isLeapYear = true;
    // divisible by 100 AND 400 {
    } else if ((year % 100 === 0) && (year % 400 === 0)) {
        isLeapYear = true;
    }
    return isLeapYear;
    

// Do not edit below this line
module.exports = leapYears;
