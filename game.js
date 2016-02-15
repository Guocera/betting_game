"use strict";

var readlineSync = require('readline-sync');

function Player() {
  this.money = 100;

  this.broke = function() {
    if (this.money <= 0) {
      return true;
    } else {
      return false;
    }
  };

  this.getBet = function() {
    do {
      this.bet = readlineSync.question("Place a bet between $5 and $10: ");
    } while (invalidBet(this.bet));

    return this.bet;
  };

  this.getGuess = function() {
    do {
      this.guess = readlineSync.question("Guess a number between 1 and 10: ");
    } while (invalidGuess(this.guess));

    return this.guess
  };

  this.betOutcome = function(amount) {
    this.money += +amount;
  };

  this.correctAnswer = function(correct) {
    switch (+this.guess) {
      case +correct:
        return true;
      case (+correct + 1):
        return 'close';
      case (+correct - 1):
        return 'close';
      default:
        return false;
    }
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Game start

var player = new Player();

while (!player.broke()) {
  console.log("You have $" + player.money)
  var bet = player.getBet();
  var guess = player.getGuess();
  var correct = getRandomInt(1, 10); 
  var msg = "";

  switch (player.correctAnswer(correct)) {
    case true:
      player.betOutcome(bet);
      msg = "You won!  The correct guess was " + correct +
        " and you guessed " + guess + ".";
      break;
    case 'close':
      msg = "Close!  The correct guess was " + correct + 
        " and you guessed " + guess + ".";
      break;
    case false:
      player.betOutcome(-bet);
      msg = "You lost!  The correct guess was " + correct + 
        " and you guessed " + guess + ".";
      break;
  }

  console.log(msg);
}

console.log("Game Over")