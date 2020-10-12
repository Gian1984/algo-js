const readlineSync = require("readline-sync");
let buy1 = readlineSync.question("How many apples u have buy?");
let use2 = readlineSync.question("How many apples u have use?");
console.log(Math.trunc(buy1 % use2));