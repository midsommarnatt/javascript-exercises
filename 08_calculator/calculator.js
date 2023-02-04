const add = function(...args) {
	let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

const subtract = function(...args) {
	return args[0] - args[1];
};

const sum = function(arr) {
  let total = 0;
	for (const i of arr) {
    total += i;
  };
  return total;
};

const multiply = function(arr) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (!num) {
    return 1;
  }
  total = num;
	for (let i = num - 1; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
