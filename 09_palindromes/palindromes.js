const palindromes = function (str) {
    str = Array.from(str);
    const newStr = str
        .filter(char => char.toLowerCase() != char.toUpperCase())
        .map(char => char.toLowerCase());

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] != newStr[newStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
