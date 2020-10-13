const readlineSync = require("readline-sync");

let n = (readlineSync.question("give a number of loops:"));
let total = 0;

for (let i = 0; i < n; i++) {
    total += new Number(readlineSync.question("giva a number:"));

}
console.log(total);