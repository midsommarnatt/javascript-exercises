const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] === arg) {
                arr.splice(index, 1);
            } 
        }       
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
