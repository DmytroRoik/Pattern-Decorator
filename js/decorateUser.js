function DecorateUser(user){
  for(prop in user){
    this[prop]=user[prop];
  }
}
DecorateUser.prototype.getDiscount = function(argument){
  var date=new Date(),
  isNightNow=false,
  isWorkingDay=true,
  discount=0;

  if(date.getHours()>=23||date.getHours()<5)isNightNow=true;
  if(date.getDay()==6||date.getDay()==7)isWorkingDay=false;

  if(isNightNow)discount+=this.nightDiscount;
  if(!isWorkingDay)discount+=this.weekendDiscount;
  discount+=this.globalDiscount;
  return discount;
};
DecorateUser.prototype.getBonus = function(){
  var bonus=240-this.lastVisiteDate.deltaHourFromNow();
  if(bonus>0)this.bonus+=bonus+this.ordersCount;
  return this.bonus;
};

