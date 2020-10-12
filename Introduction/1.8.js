const readlineSync = require("readline-sync");
let yourName = readlineSync.question("Your first name is?");
let grandmaName = readlineSync.question("Your grandmother first name?");
let cake = readlineSync.question("What you bring to eat?")
let wine = readlineSync.question("What you bring to drink?")

console.log(`Once upon a time there was a sweet little girl. Everyone who saw her liked her, but most of all her grandmother ${grandmaName}, who did not know what to give the child next. Once she gave her a little cap made of red velvet. Because it suited her so well, and she wanted to wear it all the time, she came to be known as Little Red ${yourName} Hood. One day her mother said to her: - Come Little Red ${yourName} Hood. Here is a piece of ${cake} and a bottle of ${wine}. Take them to your grandmother ${grandmaName}. She is sick and weak, and they will do her well. Mind your manners and give her my greetings. Behave yourself on the way, and do not leave the path, or you might fall down and break the glass, and then there will be nothing for your sick grandmother ${grandmaName}.-`)