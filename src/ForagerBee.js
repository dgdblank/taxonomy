var ForagerBee = function(age, color, food, job, canFly, treasureChest) {
  Bee.call(this, age, color, food, job);
  this.canFly = canFly;
  this.treasureChest = treasureChest;
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
};

