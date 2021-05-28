//Date Variables

const christmasDayAsDate = new Date(2021, 12, 25);
const valentinesDayAsDate = new Date(2022, 2, 14);
const newYearsDayAsDate = new Date(2022, 1, 1);
const todaysDayDate = new Date();

//Functions
/* Takes to dates and returns the diffence in days as a number */ 
const daysBetweenDates = (dateOne, dateTwo) => parseInt((dateOne - dateTwo)/(24*3600*1000));

$("#trigger").click(function(christmasDayAsDate, todaysDayDate, daysBetweenDates){
  
  $("#days-until").append("<li>" + daysBetweenDates(todaysDayDate, christmasDayAsDate).toString()+" days until Christmas</li>");
})

$("#trigger").click(function(newYearsDayAsDate, todaysDayDate, daysBetweenDates){
  
  $("#days-until").append("<li>" +  daysBetweenDates(todaysDayDate, newYearsDayAsDate).toString()+" days until New Year</li>");
})

$("#trigger").click(function(valentinesDayAsDate, todaysDayDate, daysBetweenDates){

  $("#days-until").append("<li>" + daysBetweenDates(todaysDayDate, valentinesDayAsDate).toString()+" days until Valentines Day</li>");
})