"use strict";

let numberOfYears;

const start = () => {
  numberOfYears = prompt("How do you do?");

  while (
    personalGamingDB == "" ||
    personalGamingDB == null ||
    isNaN(personalGamingDB)
  ) {
    numberOfYears = prompt("How do you do?");
  }
};

start();

const personalGamingDB = {
  count: numberOfYears,
  games: {},
  gameCompanies: {},
  genres: [],
  privat: false,
};

/*for (let b = 0; b < 3; b++) {
  let writeYouGenres = prompt(
    `Your favorite games genre under number ${b + 1}`
  );
  personalGamingDB.genres.push(writeYouGenres);
} */

const hidden = true;

if (hidden) {
  personalGamingDB.privat = true;
}

console.log(personalGamingDB);

/* console.log(isNaN(personalGamingDB.count));
console.log(personalGamingDB.count != '');
console.log(personalGamingDB.count != null); */
