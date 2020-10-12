const readlineSync = require("readline-sync");
let Name = readlineSync.question("What's your name?");
let Firstname = readlineSync.question("What's your first name?");
let City = readlineSync.question("What's your city?");
console.log(Firstname + " " + Name + " " + City);