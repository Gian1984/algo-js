const readlineSync = require("readline-sync");
let sat1 = readlineSync.question("How u're satisfact of service?");
let sat2 = readlineSync.question("How u're satisfact of quality?");
console.log((Math.trunc(sat1)) * (Math.trunc(sat2)));