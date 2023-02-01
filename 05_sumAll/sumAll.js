const sumAll = function (num1, num2) {
    if (typeof (num1) == 'number' && typeof (num2) == 'number') {
        let sum = 0;

        if (num1 < 0 || num2 < 0) {
            return 'ERROR';
        }

        if (num1 > num2) {
            let num3 = num1;
            num1 = num2;
            num2 = num3;
        }

        for (let index = num1; index < num2 + 1; index++) {
            sum += index;
        }
        return sum;
    }

    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
