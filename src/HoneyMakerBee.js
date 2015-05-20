var HoneyMakerBee = function(age, color, food, job, honeyPot) {
  Bee.call(this, age, color, food, job);
  this.honeyPot = honeyPot;
};

//eat
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
//
HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
};
//
HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
};
