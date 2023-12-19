const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function() {
  let sumResult = 0;

	for (let i = 0; i < arguments[0].length; i++) {
    sumResult += arguments[0][i];
  }

  return sumResult;
};

const multiply = function() {
  let product = 1;

  for (let i = 0; i < arguments[0].length; i++) {
    product *= arguments[0][i];
  }

  return product;
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(x) {
	let factArray = [];
  let product = 1;

  for(let i = 0; i < x; i++) {
    factArray.push(x - i);
  }

  for (let i = 0; i < factArray.length; i++) {
    product *= factArray[i];
  }

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
