"use strict";

const personalGamingDB = {
  count: 0,
  games: {},
  gameCompanies: {},
  genres: [],
  privat: false,
  start() {
    personalGamingDB.count = prompt("How do you do?", "");
    while (
      personalGamingDB.count == "" ||
      personalGamingDB.count == null ||
      isNaN(personalGamingDB.count)
    ) {
      personalGamingDB.count = prompt("How do you do?");
    }
  },
  rememberMyGames() {
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
  },
  detectPersonalGameLevel() {
    if (personalGamingDB.count <= 10) {
      console.log("Маловатенько играете дружище!");
    } else if (personalGamingDB.count > 10 && personalGamingDB.count <= 30) {
      console.log("Пойдет но нужно больше!");
    } else if (personalGamingDB.count > 30) {
      console.log("Настоящий геймер!");
    } else {
      console.log("Ошибка системы!!!");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalGamingDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalGamingDB.privat) {
      personalGamingDB.privat = false;
    } else {
      personalGamingDB.privat = true;
    }
  },
  writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favorite games genre under number ${i}`);

      if (genre === "" || genre == null) {
        console.log("error");
        i--;
      } else {
        personalGamingDB.genres[i - 1] = genre;
      }
    }
    personalGamingDB.genres.forEach((item, index) => {
      console.log(`Любиый жанр #${index + 1} - это ${item}`);
    });
  },
};
