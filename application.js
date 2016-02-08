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

do {
  var bet = prompt("Place a bet between $5 and $10");
} while (invalidBet(bet));