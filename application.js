function Player() {
  this.money = 100;
  this.broke = function broke() {
    if (this.money === 0) {
      return true;
    } else {
      return false;
    }
  };
}

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

var bet
do {
  bet = prompt("Place a bet between $5 and $10");
} while (invalidBet(bet));

var guess
do {
  guess = prompt("Guess a number between 1 and 10");
} while (invalidGuess(guess));