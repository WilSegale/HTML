try {
    //saves data 
	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function checkCookie() {
		let user = getCookie("username");
		if (user != "") {
			alert(
				"Welcome again " +
				user
				.trim()
				.toLowerCase()
				.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
			);
		} else {
			user = prompt("Please enter your name:", "");
			if (user != "" && user != null) {
				setCookie("username", user, 30);
			}
		}
	}
	window.onload = checkCookie;
	
	//savse data end
	//Covert number grade to letter grade

    // Cancel the default action, if needed
	function keycode(event) {
		var gardes = document.getElementById("answer");

		var x = event.keyCode;
		var seventh = document.getElementById("seventhNum").value;

		if (seventh && x == 13) {
			//if the input box doesn't have any value does it does nothing.

			document.getElementById("body").style.cursor = "progress";
			if (seventh === "") {
				return;
			}

			//if the prompt has any numbers or doesn't have any input it shows an error message.
			var subject = prompt("Put your subject in");
			
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
				document.getElementById("body").style.cursor = "auto";
				document.getElementById("button").style.cursor = "pointer";
				if (seventh >= 101) {
					gardes.innerHTML = "You got an A+ in " + subject + ". Good job your in a HON's class.";
				}

				//grade letter A
				else if (seventh >= 94 || seventh == 100) {
					gardes.innerHTML = "You got an A in " + subject + ". Good job keep it up.";
				}

				//grade letter A-
				else if (seventh >= 90) {
					gardes.innerHTML = "You got an A- in " + subject + ". Good job keep it up.";
				}

				//grade letter B+
				else if (seventh >= 87) {
					gardes.innerHTML = "You got an B+ in " + subject + ". Try a little harder on the next assignment.";
				}

				//grade letter B
				else if (seventh >= 83) {
					gardes.innerHTML = "You got an B in " + subject + ". Try a little harder on the next assignment.";
				}

				//grade letter B-
				else if (seventh >= 80) {
					gardes.innerHTML = "You got an B- in " + subject + ". Try a little harder on the next assignment.";
				}

				//grade letter C+
				else if (seventh >= 77) {
					gardes.innerHTML = "You got an C+ in " + subject + ". Try a little harder on the next assignment.";
				}

				//grade letter C
				else if (seventh >= 73) {
					gardes.innerHTML = "You got an C in " + subject + ". Try a little harder on the next assignment.";
				}

				//grade letter C-
				else if (seventh >= 70) {
					gardes.innerHTML = "You got an C- in " + subject + ". Try a little harder on the next assignment.";
				}

				//grade letter D+
				else if (seventh >= 67) {
					gardes.innerHTML = "You got an D+ in " + subject + ". You are going to FAIL if you get a lower grade.";
				}

				//grade letter D
				else if (seventh >= 60) {
					gardes.innerHTML = "You got an D in " + subject + ". You are going to FAIL if you get a lower grade.";
				}

				//grade letter F
				else if (seventh <= 59) {
					gardes.innerHTML = "You got an F in " + subject + ". You are going to FAIL this term. So try and get your grades up, and try to stay after if you can.";
				}
			}, 3000);
		}
	}


	//Only nummbers not letters in the text box
	document.onkeydown = function (lettersNo) {
		if (lettersNo.ctrlKey && (lettersNo.keyCode == 67 || lettersNo.keyCode == 86 || lettersNo.keyCode == 85 || lettersNo.keyCode == 117)) {
			//Alt+c, Alt+v will alSo be disabled sadly.
			return;
		}
		var code = lettersNo.which ? lettersNo.which : lettersNo.keyCode;
		if (code > 31 && (code < 48 || code > 57)) {
			lettersNo.preventDefault();
		}
    };
} catch (err) {
	alert(err.message+" it's on line "+ err.lineNumber);

}