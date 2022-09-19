const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  getGuess: function () {
    let guess = parseInt(
      prompt(
        `Enter a guess between ${this.smallestNum} and ${this.biggestNum}: ${this.secretNum}`
      )
    );
    this.prevGuesses.push(guess);
    return guess;
  },

  render: function (guess) {
    if (guess === this.secretNum) {
      alert(
        `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
      );
    } else if (guess > this.secretNum) {
      alert(
        `Guess is too high. Try again.
         Previous guesses: ${game.prevGuesses.join(", ")}`
      );
    } else if (guess < this.secretNum) {
      alert(
        `Guess is too low. Try again.
         Previous guesses: ${game.prevGuesses.join(", ")}`
      );
    }
  },

  play: function () {
    let guess;
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;
    while (guess !== this.secretNum) {
      guess = this.getGuess();
      this.render(guess);
      if (guess === this.secretNum) break;
    }
  },
};

game.play();
console.log(game.prevGuesses);
