"use strict";

const personalGamingDB = {
  privat: false,
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
};
