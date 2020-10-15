/* Exercise 4.4
Create a function named average(arr) that takes an array of numbers 
as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as 
argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers 
as argument and returns the maximum element.

Create a program that asks a number to the user then generate 
that same amount of random numbers but also displays their average,
 min and max. To do so, use the three functions you just created as well 
 as the multiRand(n) function created in Exercise 3.

Write a documentation for all the functions you created.

*/

/**
 * Add two numbers together
 * @author Gianluca Tiengo
 * @param  {Number} "y" Let the user choise how many numbers want generate.
 * @return {Number} the function multiRand return a random sequence of number.
 * @param  {Variable} "x" callback the multiRand function result in maxMinAvg function.
 * @return {Numbers} return of the function in order higher number, lower number and the Average.
 */



const readlineSync = require("readline-sync");
let y = readlineSync.question("How many number you need? ");

function multiRand() {
    let n = [];
    for (let i = 0; i < y; i++) {
        n.push(Math.floor(Math.random() * 10) + 1);
    }
    return n;
}

function maxMinAvg() {
    let x = multiRand()
    let max = x[0];
    let min = x[0];
    let sum = x[0];
    for (let i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
        if (x[i] < min) {
            min = x[i];
        }
        sum = sum + x[i];
    }
    return [max, min, sum / x.length];
}
console.log(multiRand());
console.log(maxMinAvg());