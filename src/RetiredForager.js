var RetiredForagerBee = function(age, color, food, job, canFly, treasureChest) {
  ForagerBee.call(this, age, color, food, job, canFly, treasureChest);
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(){
  this.treasureChest.push('treasure');
};



