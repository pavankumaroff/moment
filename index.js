const moment = require("moment");

const m = moment();
const m1 = moment(600000);
const k = moment.unix(70000);
const k2 = moment.utc("2022-09-30");
const m2 = moment("2022");
const m3 = moment("2022-09");
const m4 = moment("2022-09-30");
const m5 = moment("2022-09-30T17");
const m6 = moment("2022-09-30T17:30");
const m7 = moment("2022-09-30T17:30:45");
const m8 = moment("2022-09-30T17:30:45.989");
const m9 = moment("2022-09-30T17:30:45.989Z");
const m10 = moment("2022-09-30T17:30:45.989+00:00");
const m11 = moment("2022-09-30T17:30:45.989+05:30");
const mm1 = moment("14/11/2022", "DD/MM/YYYY");
const mm2 = moment("17:35:56", "HH:mm:ss");
const mm3 = moment("17:00 PM", "HH:mm A");