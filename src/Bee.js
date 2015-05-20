var Bee = function(age, color, food, job) {
  Grub.call(this, age, color, food);
  this.job = job;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

