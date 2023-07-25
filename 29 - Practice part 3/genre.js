"use strict";

const personalGamingDB = {
  count: 5,
  games: {},
  gameCompanies: {},
  genres: [],
  privat: true,
};

const writeYouGenres = () => {
  for (let b = 1; b < 4; b++) {
    personalGamingDB.genres[b - 1] = prompt(
      `Your favorite games genre?", ${b}`
    );
    if (personalGamingDB.genres != null && personalGamingDB.genres != "") {
      personalGamingDB.genres; // ошибочно принимает данные
    } else {
      console.log("error");
      b--;
    }
  }
  personalGamingDB.genres.forEach((genre) => {
    console.log(`Любимый жанр #${genre.b} это ${genre}`); // не находит b
  });
};

const showMyDB = (hidden) => {
  if (!hidden) {
    personalGamingDB.privat = true;
  } else {
    personalGamingDB.privat = false;
  }
};

showMyDB(personalGamingDB.privat);

// writeYouGenres();
console.log(personalGamingDB);
