Date.prototype.deltaHourFromNow = function(){
  var curDate=new Date();
  var result=curDate-this;
  return Math.floor(result/60/60/1000);
};
