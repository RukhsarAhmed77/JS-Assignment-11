//JS Assignment 11

// Task 01

// var num = +3.45214;
// var num2 =(Math.round(num));
// var num3 =(Math.floor(num));
// var num4 =(Math.ceil(num));
// alert("Number : " + num +"\nRound off : " + num2 + "\nFloor value : " + num3 + "\nCeil value : " + num4)



//Task 02

// var num = -2.673;
// var num2 =(Math.round(num));
// var num3 =(Math.floor(num));
// var num4 =(Math.ceil(num));
// alert("Number : " + num +"\nRound off : " + num2 + "\nFloor value : " + num3 + "\nCeil value : " + num4)


//Task 03

// var userInput = prompt("Please enter a number:");

// var number = parseFloat(userInput);

// var absoluteValue = Math.abs(number);

// console.log("The absolute value of " + number + " is " + absoluteValue);

//Task 04

// var diceValue = Math.floor(Math.random() * 6) + 1;
// console.log("Rolled: " + diceValue);

//Task 05

// var input = prompt("Choose head or tail").toLowerCase();

// var head = 0;
// var tail = 1;

// var randomNumber = Math.floor(Math.random() * 2);

// if (randomNumber === head) {
//     console.log("Heads");
//     if (input === "head") {
//         console.log("You win!");
//     } else {
//         console.log("You lose!");
//     }
// } else if (randomNumber === tail) {
//     console.log("Tails");
//     if (input === "tail") {
//         console.log("You win!");
//     } else {
//         console.log("You lose!");
//     }
// }

//Task 06

// var randomNumber = Math.floor(Math.random() * 100);

// console.log(randomNumber);

//Task 08

// var input = +prompt("Choose a number from 1 to 10")

// var randomNumber = Math.floor(Math.random() * 10) + 1;

// console.log(randomNumber);

// if (input != randomNumber) {
//     console.log("Try Again");
// }else{
//     console.log("Congratulations! You guessed correctly");
// }