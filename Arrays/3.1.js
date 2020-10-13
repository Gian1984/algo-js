/* Exercise 3.1
Write a program that will add all the elements of an array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 15




let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function(a, b) {
    return a + b;
}, 0);

console.log(sum);

*/

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);