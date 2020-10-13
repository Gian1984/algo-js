const readlineSync = require("readline-sync");

// --- METOD 1 ---

// let grade = Number(readlineSync.question("Your favourite number?"));

// let valid = false;
// while (!valid) {
//     valid = true; // assume it's valid
//     if (grade !== 42) {
//         grade = Number(readlineSync.question("Your favourite number?"));
//         valid = false; // It it happens to not be valid, change it to invalid
//     } else if (grade === 0) {
//         grade = Number(readlineSync.question("Grat"));
//     }
// }


// --- METOD 2 ---


let numb = readlineSync.question("your favourite number?");
while (numb != 42) {
    numb = readlineSync.question("your favourite number?");
    if (numb != 42) {
        console.log("Are you sure?");
    }
}
if (numb = 42) {
    console.log("you did it!!!");
}