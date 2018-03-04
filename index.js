var Word = require("./word.js");
var inquirer = require("inquirer");
var randomWord = require("random-word");

var newWord = new Word(randomWord());
var trueCount = 0;
var guessesLeft = newWord.wordArr.length;
var allGuessed = false;
var correct = 0;
var guesses = [];

console.log("\nYour word:");

function game() {
    newWord.display();
    console.log("You have " + guessesLeft + " guesses left.\n");

    inquirer.prompt([{
        message: "Guess a letter.",
        name: "letterGuessed",
        validate: function (value) {
            if (!guesses.includes(value)) {
                return true;
            } else {
                console.log("\nYou already guessed that letter.")
                return false;
            }
        }
    }]).then(function (userGuess) {
        var correct = 0;

        newWord.letterGuess(userGuess.letterGuessed);


        guesses.push(userGuess.letterGuessed);
        newWord.wordArr.forEach(function (element) {

            if (element.guessed === true) {
                correct++;
            }
        });

        if (correct > trueCount) {
            console.log("CORRECT!");
            trueCount = correct;
            if (trueCount === newWord.wordArr.length) {
                gameEnd();
            } else {
                game();
            }
        } else if (correct <= trueCount) {
            console.log("INCORRECT!");
            guessesLeft--;
            if (guessesLeft === 0) {
                gameEnd();
            } else {
                game();
            }
        }

    });
}

function gameEnd() {
    if (guessesLeft === 0) {
        console.log("YOU LOSE!");
        newWord.wordArr.forEach(function (element) {
            element.guessed = true;
        })
        console.log("The word was:")
        newWord.display();
    } else {
        console.log("YOU WIN");
    }
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to play again?",
        name: "playAgain",
        default: true
    }]).then(function (input) {
        if (input.playAgain === true) {
            newWord = new Word(randomWord());
            trueCount = 0;
            guessesLeft = newWord.wordArr.length;
            allGuessed = false;
            correct = 0;
            guesses = [];
            newWord.display();
            game();
        }
    })
}

game();