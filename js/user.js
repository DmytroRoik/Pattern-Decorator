function User(){
  this.lastVisiteDate=new Date(2018,0,18,18,40,10);
  this.globalDiscount=Math.floor(Math.random()*21);
  this.nightDiscount=Math.floor(Math.random()*31);
  this.weekendDiscount=Math.floor(Math.random()*11);
  this.ordersCount=Math.floor(Math.random()*101);//[0,100]
  this.ordersTotalPrice=Math.floor(Math.random()*1001);//[0,1000]
  this.bonus=0;
}
