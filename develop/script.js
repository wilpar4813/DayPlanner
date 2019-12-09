
//displays in format Wednesday, December 4th, 2019
$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('LL'));
    console.log(moment().format('dddd') + ", " + moment().format('LL'));
});

$(".saveBtn9").on("click", function () {
    console.log("user clicked to save 9am appointment");
    var appointmentTimeSlot = document.getElementById('textareaNine');
    var appointmentDetails = document.getElementById('textareaNine').value;
    //bookAppointment(appointmentTimeSlot, appointmentDetails);
    //console.log(nineAppointment);
});
/*
//This function takes the new appointment and adds to schedule array.
function bookAppointment(Time, Details) {

    const newAppointment = {     // an appointment object
        time: Time,        // Time of appointment
        title: Details  // Details from appointmenmt text area
    }
    // console log new aapointment object
    console.log(newAppointment);

    // Create array to store high scores
    const scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    console.log(scheduleArray);

    //add new appointment to Schedule Array
    scheduleArray.push(newAppointment);
    console.log(ScheduleArray);

    //Update local storage with revised highScoresArray
    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));
    console.log(scheduleArray);
}






function writeToSchedule(Time, Details) {

    // Use .map to sort out time and details from the Schedule Array
    scheduleArray.map(newAppointment => {
        if (newAppointment.Details != 0) {
            console.log("The new appointment is at " + appointment.Details);
            $(Time).append('<p>' + newAppointment.Details'</p>');
        }
    });
}


*/




var time = moment();
var format = 'hh:mma';
var resetTime = moment('12:00am', format);
var nineBeginningTime = moment('9:00am', format);
var nineEndTime = moment('10:00am', format);
var tenBeginningTime = moment('10:00am', format);
var tenEndTime = moment('11:00am', format);
var elevenBeginningTime = moment('11:00am', format);
var elevenEndTime = moment('11:59am', format);
var twelveBeginningTime = moment('12:00pm', format);
var twelveEndTime = moment('12:59pm', format);
var oneBeginningTime = moment('1:00pm', format);
var oneEndTime = moment('1:59pm', format);
var twoBeginningTime = moment('2:00pm', format);
var twoEndTime = moment('2:59pm', format);
var threeBeginningTime = moment('3:00pm', format);
var threeEndTime = moment('3:59pm', format);
var fourBeginningTime = moment('4:00pm', format);
var fourEndTime = moment('4:59pm', format);
var fiveBeginningTime = moment('5:00pm', format);
var fiveEndTime = moment('5:59pm', format);

//checkTime();
//This function controls changing the colors of the rows as each hour passes.
setInterval(function () {
    checkTime();
}, 1000);

function checkTime() {
    if (time.isBefore(nineBeginningTime)) {
        //console.log('Tis before 1pm hour');
        $('#userInput9 ').css('background', ' #77dd77');
    }

    if (time.isBetween(nineBeginningTime, nineEndTime)) {
        //console.log('Tis is the 9am hour');
        $('#userInpu t9').css('background', '#ff6961');
    }
    if (time.isAfter(nineEndTime)) {
        //console.log('Tis after the 9am hour');
        $('#userInput9').css('background', ' #d3d3d3');
    }
    if (time.isBefore(tenBeginningTime)) {
        //console.log('Tis before 10am hour');
        $('#userInput10').css('background', ' #77dd77');
    }
    if (time.isBetween(tenBeginningTime, tenEndTime)) {
        //console.log('Tis is the 10am hour');
        $('#userInput10').css('background', '#ff6961');
    }
    if (time.isAfter(tenEndTime)) {
        //console.log('Tis after the 10am hour');
        $('#userInput10').css('background', ' #d3d3d3');
    }
    if (time.isBefore(elevenBeginningTime)) {
        //console.log('Tis before the 11am hour');
        $('#userInput11').css('background', ' #77dd77');
    }
    if (time.isBetween(elevenBeginningTime, elevenEndTime)) {
        // console.log('Tis is the 11am hour');
        $('#userInput11').css('background', '#ff6961');
    }
    if (time.isAfter(elevenEndTime)) {
        //console.log('Tis before the 11am hour');
        $('#userInput11').css('background', ' #d3d3d3');
    }
    if (time.isBefore(twelveBeginningTime)) {
        //console.log('Tis before 12pm hour');
        $('#userInput12').css('background', ' #77dd77');
    }
    if (time.isBetween(twelveBeginningTime, twelveEndTime)) {
        //console.log('Tis is the 12pm hour');
        $('#userInput12').css('background', '#ff6961');
    }
    if (time.isAfter(twelveEndTime)) {
        //console.log('Tis after the 12pm hour');
        $('#userInput12').css('background', ' #d3d3d3');
    }
    if (time.isBefore(oneBeginningTime)) {
        //console.log('Tis before 1pm hour');
        $('#userInput1').css('background', ' #77dd77');
    }
    if (time.isBetween(oneBeginningTime, oneEndTime)) {
        //console.log('Tis is the 1pm hour');
        $('#userInput1').css('background', '#ff6961');
    }
    if (time.isAfter(oneEndTime)) {
        //console.log('Tis after the 1pm hour');
        $('#userInput1').css('background', ' #d3d3d3');
    }
    if (time.isBefore(twoBeginningTime)) {
        //console.log('Tis before 2pm hour');
        $('#userInput2').css('background', ' #77dd77');
    }
    if (time.isBetween(twoBeginningTime, twoEndTime)) {
        //console.log('Tis is the 2pm hour');
        $('#userInput2').css('background', '#ff6961');
    }
    if (time.isAfter(twoEndTime)) {
        //console.log('Tis after the 2pm hour');
        $('#userInput2').css('background', ' #d3d3d3');
    }
    if (time.isBefore(threeBeginningTime)) {
        //console.log('Tis before 3pm hour');
        $('#userInput3').css('background', ' #77dd77');
    }
    if (time.isBetween(threeBeginningTime, threeEndTime)) {
        //console.log('Tis is the 3pm hour');
        $('#userInput3').css('background', '#ff6961');
    }
    if (time.isAfter(threeEndTime)) {
        //console.log('Tis after the 3pm hour');
        $('#userInput3').css('background', ' #d3d3d3');
    }
    if (time.isBefore(fourBeginningTime)) {
        //console.log('Tis before 4pm hour');
        $('#userInput4').css('background', ' #77dd77');
    }
    if (time.isBetween(fourBeginningTime, fourEndTime)) {
        // console.log('Tis is the 4pm hour');
        $('#userInput4').css('background', '#ff6961');
    }
    if (time.isAfter(fourEndTime)) {
        //console.log('Tis after the 4pm hour');
        $('#userInput4').css('background', ' #d3d3d3');
    }
    if (time.isBefore(fiveBeginningTime)) {
        //console.log('Tis before 5pm hour');
        $('#userInput5').css('background', ' #77dd77');
    }
    if (time.isBetween(fiveBeginningTime, fiveEndTime)) {
        //console.log('Tis is the 5pm hour');
        $('#userInput5').css('background', '#ff6961');
    }
    if (time.isAfter(fiveEndTime)) {
        //console.log('Tis after the 5pm hour');
        $('#userInput5').css('background', ' #d3d3d3');
    }
    if (time.isBetween(resetTime, nineBeginningTime)) {
        //console.log('The time is before work hours');
        $('#userInput9').css('background', ' #77dd77');
        $('#userInput10').css('background', ' #77dd77');
        $('#userInput11').css('background', ' #77dd77');
        $('#userInput12').css('background', ' #77dd77');
        $('#userInput1').css('background', ' #77dd77');
        $('#userInput2').css('background', ' #77dd77');
        $('#userInput3').css('background', ' #77dd77');
        $('#userInput4').css('background', ' #77dd77');
        $('#userInput5').css('background', ' #77dd77');
    }
};














