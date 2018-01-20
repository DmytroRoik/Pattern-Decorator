var u=new User();
var du=new DecorateUser(u);
console.log('decorate User',du);
console.log('discount',du.getDiscount());
console.log('bonus',du.getBonus());
