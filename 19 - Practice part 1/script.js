"use strict";

const numberOfYears = +prompt("How many years are you playing games?", "");

const personalGamingDB = {
  count: numberOfYears,
  games: {},
  gameCompanies: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let game = prompt("One of your last played games?", "");
  let rating = +prompt("What rating did it have on IGN?", "");

  personalGamingDB.games[game] = rating;
}

console.log(personalGamingDB);
