/*Exercise 3.2
Write a program that will calculate the average value of a given array.

Test it with the following arrays:

[1, 2, 3, 4, 5] => 3
[100, 101, 102] => 101

-- Method 1 ----

let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1, 2, 3, 4, 5]));

---Method 2 ---

*/

let arr = [1, 2, 3, 4, 5];
let average = 0;

for (let i = 0; i < arr.length; i++) {
    average += arr[i];
}
console.log(average / arr.length)