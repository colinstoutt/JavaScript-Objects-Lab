const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  getGuess: function () {
    let guess;
    while (true) {
      guess = parseInt(
        prompt(
          `Enter a guess between ${this.smallestNum} and ${this.biggestNum}: ${this.secretNum}`
        )
      );

      this.prevGuesses.push(guess);

      if (guess === this.secretNum) break;
    }
    return guess;
  },

  play: function () {
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;

    this.render(this.getGuess());
  },

  render: function (guess) {
    if (guess === this.secretNum) {
      alert(
        `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
      );
    } else if (guess > this.secretNum) {
      alert(
        `Guess is too high. Try again.
          Previous guesses: ${this.prevGuesses.join(", ")}`
      );
    } else if (guess < this.secretNum) {
      alert(
        `Guess is too low. Try again.
          Previous guesses: ${this.prevGuesses.join(", ")}`
      );
    }
  },
};

game.play();
console.log(game.prevGuesses);
