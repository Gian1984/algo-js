/*Exercise 5.2
Create a function named randomizeCast(tvSerie) that will take as argument
the data structure you defined in the previous exercise and return a list
of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie()
to ask the user about a TV serie then display a randomized list of the
previous cast that will form the new cast of your next serie. */


const readlineSync = require("readline-sync");

let name = readlineSync.question("What's the name of your favorite series? ");
let year = readlineSync.question("Year of production? ");
let n = Number(readlineSync.question("how many actor names in this series do you know? "));
let actors = []


function askTvSerie() {
    for (let i = 0; i < n; i++) {
        actors.push(readlineSync.question("Write the name of an actor: "));
    }

    let object = {
        "name": name,
        "year": year,
        "actors": actors,
    }
    return object
}

function randomizeCast(tvSerie) {
    for (let i = 0; i < tvSerie.actors.length - 1; i++) {
        const random = Math.floor(Math.random() * i);
        const x = tvSerie.actors[i];

        tvSerie.actors[i] = tvSerie.actors[random];
        tvSerie.actors[random] = x;
    }

    return tvSerie;

}

console.log(randomizeCast(askTvSerie()));