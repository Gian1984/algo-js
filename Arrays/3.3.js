/*
Exercise 3.3
Write a program that will create a duplicate of a given array.

Bonus: make a first version that will only do it using push(). 
Make a second version that uses a single method call to perform the copy.
(You'll have to search on the MDN or Google for this one.)

--- method 1 loop ----
*/
/*
let numbersCopy = [];

for (let i = 0; i < numbers.length; i++) {
    numbersCopy[i] = numbers[i];
}
console.log(numbers, numbersCopy)
*/
// ---Method 2 push 

let numbers = [1, 2, 3];
let numbersCopy = [];

numbersCopy.push(1, 2, 3);
console.log(numbers, numbersCopy);