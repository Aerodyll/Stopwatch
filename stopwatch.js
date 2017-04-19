/* Declaring the html objects that will contain the time*/
var clock_hours = document.getElementById("clock_hours");
var clock_minutes = document.getElementById("clock_minutes");
var clock_seconds = document.getElementById("clock_seconds");

/* Declaring the html buttons*/
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');

/* Declaring the html buttons */
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;


/* How the clock counts up, seconds++ adds 1, if seconds go above 60 then reset seconds to 0 and add 1 to minutes and so on with hours */
function add() {
    seconds++;
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
			if (minutes >= 60) {
				minutes = 0;
				hours++;
			}
		}
    
	/* Hours */
	if (hours == null) {
			clock_hours.innerHTML = "00";
		} else {
			if (hours > 9) {
				clock_hours.innerHTML = hours; 
			} else {
				clock_hours.innerHTML = "0" + hours;
			}
		}
	
		/* Minutes */
	if (minutes == null) {
			clock_minutes.innerHTML = "00";
		} else {
			if (minutes > 9) {
				clock_minutes.innerHTML = minutes; 
			} else {
				clock_minutes.innerHTML = "0" + minutes;
			}
		}
	
		/* Seconds */
	if (seconds == null) {
			clock_seconds.innerHTML = "00";
		} else {
			if (seconds > 9) {
				clock_seconds.innerHTML = seconds; 
			} else {
				clock_seconds.innerHTML = "0" + seconds;
			}
		}
	
/* timer runs for 1 second at a time, but calling the timer function at the end of the add function means it repeats itself */
    timer();
}


/* Timer controls how fast the clock counts 1000ms = 1s, the parameters for this mean start the 'add' function for 1000ms */
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    
	clock_hours.innerHTML = "00";
	clock_minutes.innerHTML = "00";
	clock_seconds.innerHTML = "00";	
	
	clearTimeout(t);
	
    seconds = 0; minutes = 0; hours = 0;
}