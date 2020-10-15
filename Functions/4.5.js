/* Exercise 4.5
Create a function named calcDistance which takes the coordinates of two 
different points A and B in a 2D space. That function must return the 
distance between those two points.

Examples results:

Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
Create a program to use that function.

Write a documentation for the calcDistance function.

Note: You probably need to make some search on Google to learn the 
mathematical formula to do that. You will also probably need to search 
for useful functions in JavaScript to help you making complex
mathematical formulas...
*/

/**
 * Add two numbers together
 * @author Gianluca Tiengo
 * @param {Variable} "a" Enter coordinate for point A on axis x
 * @param {Variable} "c" Enter coordinate for point A on axis y 
 * @param {Variable} "b" Enter coordinate for point B on axis x
 * @param {Variable} "d" Enter coordinate for point B on axis y
 * @returns {Number} Function distance returns distance between 2 point A and B
 */

const readlineSync = require("readline-sync");
let a = readlineSync.question("Enter coordinate for point A on axis x ");
let c = readlineSync.question("Enter coordinate for point A on axis y ");
let b = readlineSync.question("Enter coordinate for point B on axis x ");
let d = readlineSync.question("Enter coordinate for point B on axis y ");


function distance(a, b) {
    let dx = a - b;
    let dy = c - d;
    let dist = Math.sqrt(dx * dx + dy * dy);
    return dist;
}

console.log(distance(a, b))