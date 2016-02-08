function Player() {
  this.money = 100;

  this.broke = function broke() {
    if (this.money === 0) {
      return true;
    } else {
      return false;
    }
  };

  this.getBet = function getBet() {
    do {
      this.bet = prompt("Place a bet between $5 and $10");
    } while (invalidBet(this.bet));
  };

  this.getGuess = function getGuess() {
    do {
      this.guess = prompt("Guess a number between 1 and 10");
    } while (invalidGuess(this.guess));
  };

  function invalidBet(bet) {
    if (!isNaN(bet) && bet >= 5 && bet <= 10) {
      return false;
    } else {
      return true;
    }
  }

  function invalidGuess(guess) {
    if (!isNaN(guess) && guess >= 1 && guess <= 10) {
      return false;
    } else {
      return true;
    }
  }
}


// Game start


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player = new Player()

player.getBet()
player.getGuess()


var correct = getRandomInt(1, 10)

// switch guess {
//   case (correct):

// }
