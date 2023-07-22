"use strict";

function hello() {
  console.log("hello World");
  debugger;
}

hello();

function hihi() {
  console.log("Say hihi");
}

hihi();

const arr = [1, 14, 4, 30, 56],
  sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(sorted);
