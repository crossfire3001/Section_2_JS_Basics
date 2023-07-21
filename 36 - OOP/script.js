"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof str); // string
console.log(typeof strObj); // object

// 2
console.dir([1, 2, 3]);

// 3

const soldier = {
  heath: 400,
  armor: 90,
  toTalk: function() {
    console.log('Hi');
  }
};

const johny = {
  health: 100,
};

// устаревший метод
// johny.__proto__ = soldier;
// актуальный метод
Object.setPrototypeOf(johny, soldier);

console.log(johny.armor);
johny.toTalk();

// 4

const cavalry = {
    legs: 4,
    speed: 120,
    toRun: function() {
        console.log('running with rage!')
    }
}

const jerry = Object.create(cavalry);

jerry.toRun();


