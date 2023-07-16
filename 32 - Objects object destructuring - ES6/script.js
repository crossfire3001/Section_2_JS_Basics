"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

console.log(options.name);

// удаление свойства
delete options.name;

console.log(options);

let counter = 0;
// перебор всех свойств объекта - ключ: значение
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

console.log(options["colors"]["border"]);

console.log(counter);

// 2
const obs = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

// получение массива со всеми ключами
console.log(Object.keys(obs));

console.log(Object.keys(obs).length);

// 3
const optimus = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

// запуск функции
optimus.makeTest();

// 4
// деструктуризация объекта
const leon = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

// деструктуризация
const { border, bg } = leon.colors;
console.log(border);