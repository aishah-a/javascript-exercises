const palindromes = function (str) {
    let regex = /[\W_]/g; //remove all non alphanum chars
    let string = str.toLowerCase().replace(regex, '');
    let reverseString = string.split('').reverse().join('');
    
    return reverseString === string;
}


// Do not edit below this line
module.exports = palindromes;
