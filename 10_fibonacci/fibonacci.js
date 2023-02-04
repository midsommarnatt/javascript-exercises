const fibonacci = function(number) {
    let num = parseInt(number);
    if (num < 0) {return 'OOPS'};
    let sequence = [1];

    for (let i = 0; i < num; i++) {
        if (sequence.length == 1) {
            sequence.push(sequence[i] + 0);
            continue;
        }
        sequence.push(sequence[i] + sequence[i - 1]);
    }
    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
