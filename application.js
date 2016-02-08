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