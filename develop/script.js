
//displays in format Wednesday, December 4th, 2019
$("#currentDay").html(moment().format('dddd') + ", " + moment().format('LL'));
console.log(moment().format('dddd') + ", " + moment().format('LL'));
  

// var NowMoment = moment();
// var eDisplayMoment = document.getElementById('currentDay');
// eDisplayMoment.append(NowMoment.format('dddd-LL'));
