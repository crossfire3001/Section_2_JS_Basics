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

  if (
    game != "" &&
    rating != "" &&
    game != null &&
    rating != null &&
    game.length < 50
  ) {
    personalGamingDB.games[game] = rating;
  } else {
    i--;
  }
}

if (personalGamingDB.count <= 10) {
  console.log("Маловатенько играете дружище!");
} else if (personalGamingDB.count > 10 && personalGamingDB.count <= 30) {
  console.log("Пойдет но нужно больше!");
} else if (personalGamingDB.count > 30) {
  console.log("Настоящий геймер!");
} else {
  console.log("Ошибка системы!!!");
}

console.log(personalGamingDB);
