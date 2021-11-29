//main function for the clock.
function clock() {
	//calculate angle
	var d, h, m, s;
	d = new Date();

	//display time
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	if (h >= 12) {
		setText('suffix', 'PM');
	} else {
		setText('suffix', 'AM');
	}

	if (h != 12) {
		h %= 12;
	}

	setText('sec', s);
	setText('min', m);
	setText('hr', h);

	//call every second
	setTimeout(clock, 1000);
}

//sets the time.
function setText(id, val) {
	if (val < 10) {
		val = '0' + val;
	}
	document.getElementById(id).innerHTML = val;
}

//showes the clock time.
window.onload = clock;



/**/
//Covert number grade to letter grade

// Cancel the default action, if needed

function keycode(event) {

	var gardes = document.getElementById("answer");

	var x = event.keyCode;
	var seventh = document.getElementById("seventhNum").value;

	if (seventh && x == 13) {
		//if the input box doesn't have any value does it does nothing.

		document.getElementById("body").style.cursor = 'progress';
		if (seventh === "") {
			return;
		}

		//if the prompt has any numbers or doesn't have any input it shows an error message.
		var subject = prompt("put your subject in");
		if (subject > 0) {
			alert("Error I don't understand by what you mean by " + subject + "? Could you please try again?");
			return;
		}

		//if the user does not input anything it continuously says 'put your subject in.'
		else if (subject === "") {
			for (subject; subject === "";) {
				subject = prompt("put your subject in");
			}
		}

		// prompt ends

		//number grade to letter grade starts

		//grade letter A+
		setTimeout(function () {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("button").style.cursor = "pointer";
			if (seventh >= 101) {
				gardes.innerHTML = "You got an " + " A+ " + " in " + subject + ". Good job your in a HON's class.";
			}

			//grade letter A
			else if (seventh >= 94 || seventh == 100) {
				gardes.innerHTML = "You got an " + " A " + " in " + subject + ". Good job keep it up.";
			}

			//grade letter A-
			else if (seventh >= 90) {
				gardes.innerHTML = "You got an " + " A- " + " in " + subject + ". Good job keep it up.";
			}

			//grade letter B+
			else if (seventh >= 87) {
				gardes.innerHTML = "You got an " + " B+ " + " in " + subject + ". Try a little harder on the next assignment.";
			}

			//grade letter B
			else if (seventh >= 83) {
				gardes.innerHTML = "You got an " + " B " + " in " + subject + ". Try a little harder on the next assignment.";
			}

			//grade letter B-
			else if (seventh >= 80) {
				gardes.innerHTML = "You got an " + " B- " + " in " + subject + ". Try a little harder on the next assignment.";
			}

			//grade letter C+
			else if (seventh >= 77) {
				gardes.innerHTML = "You got an " + " C+ " + " in " + subject + ". Try a little harder on the next assignment.";
			}

			//grade letter C
			else if (seventh >= 73) {
				gardes.innerHTML = "You got an " + " C " + " in " + subject + ". Try a little harder on the next assignment.";
			}

			//grade letter C-
			else if (seventh >= 70) {
				gardes.innerHTML = "You got an " + " C- " + " in " + subject + ". Try a little harder on the next assignment.";
			}

			//grade letter D+
			else if (seventh >= 67) {
				gardes.innerHTML = "You got an " + " D+ " + " in " + subject + ". You are going to FAIL if you get a lower grade.";
			}

			//grade letter D
			else if (seventh >= 60) {
				gardes.innerHTML = "You got an " + " D " + " in " + subject + ". You are going to FAIL if you get a lower grade.";
			}

			//grade letter F
			else if (seventh <= 59) {
				gardes.innerHTML = "You got an " + " F " + " in " + subject + ". You are going to FAIL this term. So try and get your grades up, and try to stay after if you can.";
			}

		}, 3000);
	}

}

function grades() {

	//if the input box doesn't have any value does it does nothing.
	document.getElementById("body").style.cursor = 'progress';

	var seventh = document.getElementById("seventhNum").value;
	if (seventh === "") {
		return;
	}
	var gardes = document.getElementById("answer");
	//if the prompt has any numbers or doesn't have any input it shows an error message.
	var subject = prompt("put your subject in");
	if (subject > 0) {
		alert("Error I don't understand by what you mean by " + subject + "? Could you please try again?");
		return;
	}

	//if the user does not input anything it continuously says 'put your subject in.'
	else if (subject === "") {
		for (subject; subject === "";) {
			subject = prompt("put your subject in");
		}
	}
	// prompt ends

	//number grade to letter grade starts
	setTimeout(function () {
		document.getElementById("body").style.cursor = 'auto';
		document.getElementById("button").style.cursor = "pointer";
		//grade letter A+
		if (seventh >= 101) {
			gardes.innerHTML = "You got an " + " A+ " + " in " + subject + ". Good job your in a HON's class.";
		}

		//grade letter A
		else if (seventh >= 94 || seventh == 100) {
			gardes.innerHTML = "You got an " + " A " + " in " + subject + ". Good job keep it up.";
		}

		//grade letter A-
		else if (seventh >= 90) {
			gardes.innerHTML = "You got an " + " A- " + " in " + subject + ". Good job keep it up.";
		}

		//grade letter B+
		else if (seventh >= 87) {
			gardes.innerHTML = "You got an " + " B+ " + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//grade letter B
		else if (seventh >= 83) {
			gardes.innerHTML = "You got an " + " B " + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//grade letter B-
		else if (seventh >= 80) {
			gardes.innerHTML = "You got an " + " B- " + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//grade letter C+
		else if (seventh >= 77) {
			gardes.innerHTML = "You got an " + " C+ " + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//grade letter C
		else if (seventh >= 73) {
			gardes.innerHTML = "You got an " + " C " + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//grade letter C-
		else if (seventh >= 70) {
			gardes.innerHTML = "You got an " + " C- " + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//grade letter D+
		else if (seventh >= 67) {
			gardes.innerHTML = "You got an " + " D+ " + " in " + subject + ". You are going to FAIL if you get a lower grade.";
		}

		//grade letter D
		else if (seventh >= 60) {
			gardes.innerHTML = "You got an " + " D " + " in " + subject + ". You are going to FAIL if you get a lower grade.";
		}

		//grade letter F
		else{
			gardes.innerHTML = "You got an " + " F " + " in " + subject + ". You are going to FAIL this term. So try and get your grades up, and try to stay after if you can.";
		}
	}, 3000);
}

//Only nummbers not letters in the text box
document.onkeydown = function (lettersNo) {
	if (lettersNo.ctrlKey && (lettersNo.keyCode == 67 || lettersNo.keyCode == 86 || lettersNo.keyCode == 85 || lettersNo.keyCode == 117)) { //Alt+c, Alt+v will alSo be disabled sadly.
	  return;
	}
	var code = (lettersNo.which) ? lettersNo.which : lettersNo.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {
		lettersNo.preventDefault();
	}
};
