// We declare the units outside of the function so that when the function starts (as the start button is tied to this function) it doesn't reset the units back to zero.

var milliseconds = 0, seconds = 0, minutes = 0, hours = 0, t;

function stopWatch(element) {
	
		var hrs, mins, secs, msecs;
		var start, stop, clear

		hrs = element.querySelector(".clock_hours");
		mins = element.querySelector(".clock_minutes");
		secs = element.querySelector(".clock_seconds");  
		msecs = element.querySelector(".clock_milliseconds");
	
	
		/* Declaring the buttons and tying them to the html elements*/
		start = element.querySelector(".start");
		stop = element.querySelector(".stop");
	    clear = element.querySelector(".clear");

		/* Declaring time units and zeroing them */
		var milliseconds = 0, seconds = 0, minutes = 0, hours = 0, t;

		/* This is not visible just code, it gets added to the html later*/
		function add() {
			milliseconds++;
			/* The actual clock */
			if (milliseconds >= 100) {
				milliseconds = 0;
				seconds++;
				if (seconds >= 60) {
					seconds = 0;
					minutes++;
					if (minutes >= 60) {
						minutes = 0;
						hours++;
					}
				}
			}

			/* Hours */
			if (hours == null) {
					hrs.textContent = "00";
				} else {
					if (hours > 9) {
						hrs.textContent = hours; 
					} else {
						hrs.textContent = "0" + hours;
					}
				}

				/* Minutes */
			if (minutes == null) {
					mins.textContent = "00";
				} else {
					if (minutes > 9) {
						mins.textContent = minutes; 
					} else {
						mins.textContent = "0" + minutes;
					}
				}

				/* Seconds */
			if (seconds == null) {
					secs.textContent = "00";
				} else {
					if (seconds > 9) {
						secs.textContent = seconds; 
					} else {
						secs.textContent = "0" + seconds;
					}
				}

					/* Milliseconds */
			if (milliseconds == null) {
					msecs.textContent = "00";
				} else {
					if (milliseconds > 9) {
						msecs.textContent = milliseconds;
					} else { 
						msecs.textContent = "0" + milliseconds;
					}
				}

		/* timer runs for 1 second at a time, but calling the timer function at the end of the add function means it repeats itself */
			timer();
		}
		
		// Actually runs the add function (above bit just declares it)
		add();

		/* Timer controls how fast the clock counts 1000ms = 1s, the parameters for this mean start the 'add' function for 1000ms */
		function timer() {
			t = setTimeout(add, 10);
		}
	
		start.onclick = add;
	
		/* Stop button */
  		stop.onclick = function() { clearTimeout(t); }
		
		/* Clear button */
	  	clear.onclick = function() {
			hrs.textContentL = "00"; mins.textContent = "00"; secs.textContent = "00"; msecs.textContent = "00";
			clearTimeout(t);
			milliseconds = 0; seconds = 0; minutes = 0; hours = 0; 
	  	}	
}