"use strict";

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

  this.betOutcome = function betOutcome(amount) {
    this.money += +amount;
  };

  this.correctAnswer = function correctAnswer(correct) {
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

$(document).ready(function() {
  $('#play').click( function() {
    var player = new Player();
    // var player = e.data;
    console.log(player);
    player.guess = $('#guess').val();
    player.bet = $('#bet').val();
    var correct = getRandomInt(1, 10); 
    console.log(player);

    switch (player.correctAnswer(correct)) {
      case true:
        player.betOutcome(player.bet);
        alert("You won!  The correct guess was " + correct +
          " and you guessed " + player.guess + ".  Money:" + player.money);
        break;
      case 'close':
        alert("Close!  The correct guess was " + correct + 
          " and you guessed " + player.guess + ".  Money:" + player.money);
        break;
      case false:
        player.betOutcome(-player.bet);
        alert("You lost!  The correct guess was " + correct + 
          " and you guessed " + player.guess + ".  Money: " + player.money);
        break;
    }
  });
});




// player.getBet();
// player.getGuess();
// var correct = getRandomInt(1, 10);


