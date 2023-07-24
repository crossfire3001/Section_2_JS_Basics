"use strict";

console.log(2 * 4 == 8); // true
console.log(2 * 4 === "8"); // false

const isChecked = true,
  isClosed = true;

console.log(isChecked && isClosed); // true

const isChecke = true,
  isClose = false;

console.log(isChecke && isClose); // false
console.log(isChecke || isClose); // true
console.log(isChecke || !isClose); // true
console.log(2 + 2 * 2 != '6'); // false
console.log(2 + 2 * 2 !== '6'); // true