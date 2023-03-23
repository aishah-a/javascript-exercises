const leapYears = function(year) {
    let isLeapYear = false;
    // divisible by 4
    if ((year % 4 === 0) && (year % 100 !== 0)) {
        isLeapYear = true;
    // divisible by 100 AND 400 {
    } else if ((year % 100 === 0) && (year % 400 === 0)) {
        isLeapYear = true;
    // not divisible by 100;
    } else if ((year % 100 === 0) && (year % 400 !== 0)) {
    isLeapYear = false;
    }
    return isLeapYear;


    // divisible by 4

    // NOT divisible by 100
    // divisible by 100 IF divisible by 400 as well
}

// Do not edit below this line
module.exports = leapYears;
