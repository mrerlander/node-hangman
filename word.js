var Letter = require("./letter.js");

var Word = function (word) {
    this.wordArr = word.split("");
    this.built = false;
}

Word.prototype.display = function () {
    var display = "";

    if (this.built === false) {
        for (var i = 0; i < this.wordArr.length; i++) {
            if (this.wordArr[i] !== " ") {
                this.wordArr[i] = new Letter(this.wordArr[i]);
            }
        }
        this.built = true;
    }

    this.wordArr.forEach(function (element) {
        if (element !== " ") {
            display += element.guess();
        } else {
            display += " ";
        }
    });
    console.log(display);
}

Word.prototype.letterGuess = function (guess) {
    for (var i = 0; i < this.wordArr.length; i++) {
        if (this.wordArr[i].letter === guess) {
            this.wordArr[i].guessedSwitch();
        }
    }
    this.display();
}

module.export = Word;