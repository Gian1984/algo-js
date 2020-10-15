/*
Exercise 4.3
By reusing the function rand10() created in Exercise 2, write a function
named multiRand(n) that returns an array of n numbers between 1 and 10.
You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number 
of random numbers to generate then display that same number of
random numbers.
*/

/**
 * Add two numbers together
 * @author Gianluca Tiengo
 * @param  {Number} "x" Let the user choise how many numbers need.
 * @return {Number}  "n" return a random array.
 */
const readlineSync = require("readline-sync");
let x = readlineSync.question("How many number you need? ");

function multiRand() {
    let n = [];
    for (let i = 0; i < x; i++) {
        n.push(Math.floor(Math.random() * 10) + 1);
    }
    return n;
}

console.log(multiRand());