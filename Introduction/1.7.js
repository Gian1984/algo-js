const readlineSync = require("readline-sync");
let shoesSize = readlineSync.question("Your shoes's size?");
let birthYears = readlineSync.question("Your birth year?");
console.log(((((shoesSize * 2) + 5) * 50) - birthYears) + 1766)