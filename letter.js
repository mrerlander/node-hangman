var Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;
}

Letter.prototype.guess = function () {
    if (this.guessed === true) {
        return (this.letter);
    } else {
        return ("_ ");
    }
}

Letter.prototype.guessedSwitch = function () {
    if (this.guessed === false) {
        this.guessed = true;
    }
}

module.exports = Letter;