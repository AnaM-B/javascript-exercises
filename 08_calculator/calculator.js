const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current);
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(n) {
  if (n === 0) return 1;
   
  let product = 1;

  for(let i = n; i > 0; i--) {
    product *= i
  };

  return product;
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
