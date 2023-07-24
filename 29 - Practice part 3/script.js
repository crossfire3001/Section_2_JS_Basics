"use strict";

let numberOfYears;

const start = () => {
  numberOfYears = prompt("How do you do?", "");
  while (numberOfYears == "" || numberOfYears == null || isNaN(numberOfYears)) {
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

const rememberMyGames = () => {
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
};

rememberMyGames();

const detectPersonalGameLevel = () => {
  if (personalGamingDB.count <= 10) {
    console.log("Маловатенько играете дружище!");
  } else if (personalGamingDB.count > 10 && personalGamingDB.count <= 30) {
    console.log("Пойдет но нужно больше!");
  } else if (personalGamingDB.count > 30) {
    console.log("Настоящий геймер!");
  } else {
    console.log("Ошибка системы!!!");
  }
};

detectPersonalGameLevel();

const showMyDB = (hidden) => {
  if (!hidden) {
    console.log(personalGamingDB);
  }
};

showMyDB(personalGamingDB.privat);

const writeYouGenres = () => {
  for (let b = 1; b < 4; b++) {
    personalGamingDB.genres[i - 1] = prompt(
      `Your favorite games genre?", ${b}`
    );
    // personalGamingDB.genres.push(genre);
  }
};

writeYouGenres();

console.log(personalGamingDB);
