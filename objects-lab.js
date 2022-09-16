const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function () {
    let guess;
    while (true) {
      guess = prompt(
        `Enter a guess between ${this.smallestNum} and ${this.biggestNum}: ${this.secretNum}`
      );
      if (guess == this.secretNum) break;
      if (guess > this.secretNum) {
        alert("Guess is too high. Try again.");
      } else if (guess < this.secretNum) {
        alert("Guess is too low. Try again.");
      }
    }

    return parseInt(guess);
  },

  play: function () {
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;

    this.prevGuesses.push(game.getGuess());
  },
  render: function () {},
};

game.play();
console.log(game.prevGuesses);
