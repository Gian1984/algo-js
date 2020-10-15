/* Exercises
Exercise 4.1
Create a function named calcSurface that takes the length and width 
of a rectangle and returns its surface. 

Then create a program that asks the length and width of a rectangle to 
the user then displays the surface of that rectangle. 

That program must use the function you created.

Write a documentation for the calcSurface function.
*/

/**
 * @author Gianluca Tiengo
 * @param {VarDate} lenght is rectangle side.
 * @param {VarDate} width is  rectangle side.
 * @return {Surface} multiply give the surface of a rectangle.
 */


const readlineSync = require("readline-sync");
let length = readlineSync.question("Enter the lenght: ");
let width = readlineSync.question("Enter the width: ");

function multiply(a, b) {
    return a * b;
}
console.log("Surface =" + multiply(length, width));