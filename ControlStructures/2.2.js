const readlineSync = require("readline-sync");
let min = readlineSync.question("What's your lowest number?");
let max = readlineSync.question("What's your highest number?");
let current = readlineSync.question("Choose a number!");
if (current > min && current < max) {
    console.log("Your number is between");
} else {
    console.log("Your number is not between")
}