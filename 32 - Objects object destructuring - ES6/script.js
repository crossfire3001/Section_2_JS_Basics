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

// перебор всех свойств объекта - ключ: значение
for (let key in options) {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
