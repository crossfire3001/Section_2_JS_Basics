"use strict";

// 1
let a = 5,
  b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

// 2

// примитивные типы данных: строки, числа, логические значения - передаются по значению
const obj = {
  a: 5,
  b: 1,
};

const copy = obj; // передача идет по ссылке, не копия
copy.a = 100;

console.log(copy); // a: 100, b: 1
console.log(obj); // a: 100, b: 1

// 3

// создание копии объектов, массивов

// при помощи цикла
function copi(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

// 4

// при помощи цикла на реальном примере
const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copi(numbers); // клонирование объекта
// поверхностная копия
newNumbers.a = 10;
// глубокая копия
newNumbers.c.x = 10;

console.log(newNumbers); // a = 10
console.log(numbers); // a = 2

// 5

// при помощи Object.assign()

const newNumberz = {
  a: 10,
  b: 11,
  i: {
    z: 133,
    e: 2,
  },
};

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(newNumberz, add));

// 6

const adds = {
  d: 17,
  e: 20,
};

const clone = Object.assign({}, adds);

clone.d = 20;

console.log(adds);
console.log(clone);

// 7
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // копия старого массива

newArray[1] = "adadada";
console.log(newArray);
console.log(oldArray);

// 8

// spread оператор

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

// 9
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 9];

log(...num);

// 9
const array = ["a", "b", "d"];

const newAarray = [...array];

console.log(array);

// 10
const overtime = {
  one: 1,
  two: 2,
};

const newObs = {...overtime};

console.log(newObs);