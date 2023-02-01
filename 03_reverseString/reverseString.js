const reverseString = function(str) {
    let newString = '';

    for (let index = str.length - 1; index >= 0; index--) {
        newString += str[index];    
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
