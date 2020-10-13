const readlineSync = require("readline-sync");
let dayWeek = readlineSync.question("Choose a number between 1 & 7:");
while (dayWeek > 7) {
    dayWeek = readlineSync.question("Choose a number between 1 & 7:");
    if (dayWeek > 7) {
        console.log("Are you sure?");
    }
}
if (dayWeek < 7) {
    if (dayWeek == 1) {
        console.log("Mon");
    } else if (dayWeek == 2) {
        console.log("Tue");
    } else if (dayWeek == 3) {
        console.log("Wed");
    } else if (dayWeek == 4) {
        console.log("Thu");
    } else if (dayWeek == 5) {
        console.log("Fri");
    } else if (dayWeek == 6) {
        console.log("Sat");
    } else if (dayWeek == 7) {
        console.log("Sun");
    }

}