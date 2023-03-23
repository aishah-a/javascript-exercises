const removeFromArray = function (array, ...arg) {
   const removedArray = [];
    array.forEach(element => {
    if (!arg.includes(element)) {
    removedArray.push(element);
    }
    });
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
