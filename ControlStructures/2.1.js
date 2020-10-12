const readlineSync = require("readline-sync");
let age = readlineSync.question("What's your age?");
if (age >= 18) {
    console.log("You probably are and adult");
} else {
    console.log("You are not yet an adult")
}