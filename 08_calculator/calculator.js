const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (sum) => {
  result = 0;
  sum.forEach(element => {
    result += element;
  });
  return result;
}

const multiply = (n) => {
  result = 1;
  n.forEach(element => {
    result *= element;
  });
  return result;
}

const power = (a, b) => a ** b;

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
