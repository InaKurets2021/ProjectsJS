let minutes = 25;
let seconds = "00";
let click = new Audio("bell-sound.mp3");


function template() {
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}


function start() {

	minutes = 00;
	seconds = 09;

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	let minutes_interval = setInterval(minutesTimer, 60000);
	let seconds_interval = setInterval(secondsTimer, 1000);

	function minutesTimer() {
		minutes = minutes - 1;
		document.getElementById("minutes").innerHTML = minutes;
	}
	function secondsTimer() {
		seconds = seconds - 1;
		document.getElementById("seconds").innerHTML = seconds;

		if (seconds <= 0) {
			if (minutes <= 0) {
				clearInterval(minutes_interval);
				clearInterval(seconds_interval);
				click.play();


			}
			seconds = 60;
		}
	}
}

function stop() {
	click.play();

	minutes = "00";
	seconds = "00";

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

}

function short() {


	minutes = "05";
	seconds = 59;

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	let minutes_interval = setInterval(minutesTimer, 60000);
	let seconds_interval = setInterval(secondsTimer, 1000);

	function minutesTimer() {
		minutes = minutes - 1;
		document.getElementById("minutes").innerHTML = minutes;
	}
	function secondsTimer() {
		seconds = seconds - 1;
		document.getElementById("seconds").innerHTML = seconds;

		if (seconds <= 0) {
			if (minutes <= 0) {
				clearInterval(minutes_interval);
				clearInterval(seconds_interval);
				click.play();
			}
			seconds = 60;
		}
	}
}

function long() {


	minutes = 15;
	seconds = 59;

	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	let minutes_interval = setInterval(minutesTimer, 60000);
	let seconds_interval = setInterval(secondsTimer, 1000);

	function minutesTimer() {
		minutes = minutes - 1;
		document.getElementById("minutes").innerHTML = minutes;
	}
	function secondsTimer() {
		seconds = seconds - 1;
		document.getElementById("seconds").innerHTML = seconds;

		if (seconds <= 0) {
			if (minutes <= 0) {
				clearInterval(minutes_interval);
				clearInterval(seconds_interval);
				click.play();
			}
			seconds = 60;
		}
	}
}
