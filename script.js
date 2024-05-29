"use strict";

// 1st approach

const factorial = function (n) {
  let result = n;
  for (let i = n - 1; i > 1; i--) {
    result = result * i;
  }
  return result;
};

console.log(factorial(7));

// Second approach

const factorialCheck = function (n) {
  let result = 1;
  for (let i = 1; i >= n; i++) {
    result = result * i;
  }
  return result;
};
console.log(factorial(7));

// Recursive approach

const factorialRecursive = function (n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
    factorialRecursive(result);
  }
  return result;
};
console.log(factorialRecursive(5));
