/*Exercise 5.1
Create a function named askTvSerie() that will ask the user 
for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. 
The data structure must be elegant.

Create a program that use that function to generate a TV serie object 
and display it to the user in JSON format. */

const readlineSync = require("readline-sync");
let name = readlineSync.question("Enter name of your favorite series: ");
let year = readlineSync.question("Enter production year: ");
let member1 = readlineSync.question("Enter first cast member: ");
let member2 = readlineSync.question("Enter second cast member: ");

function askTvSerie() {
    return person;
}

let person = {
    Name: name,
    Year: year,
    Actor1: member1,
    Actor2: member2,

}


console.log(JSON.stringify(askTvSerie(), null, 5));