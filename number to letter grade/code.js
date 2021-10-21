///say the IP for a crent amount of time.
var getIPAddress = function () {
	d
	$.getJSON("https://jsonip.com/", function (data) {
		var elem = document.getElementById('IP');
		elem.parentNode.removeChild(elem);
		document.getElementById("ip").innerHTML += "Your IP address is: " + data.ip;
	});
	// brake;
	var timeleft = 30;
	var downloadTimer = setInterval(function () {
		document.getElementById("countdown").style.background = "white";
		document.getElementById("ip").style.background = "white";
		if (timeleft < 0) {
			clearInterval(downloadTimer);
			$('#ip').fadeOut("slow");
			$('#countdown').fadeOut("slow");
		} else {
			document.getElementById("countdown").innerHTML = "You will not be able to see your IP address in " + timeleft + "S";
		}
		timeleft -= 1;
	}, 1000);
};

//clears the console and shows the password to goto the soucrecode

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

	//A message comes up at 11
	if (h == 11) {
		setText("message", "Go have lunch and you will be ok");
	}

	//A message comes up at 12
	if (h == 12) {
		setText('message', "Will school will be over in 2 hours");
	}

	//A message comes up at 2
	if (h == 2) {
		setText('message', "Will school is over are you happy");
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

//Covert number grade to letter grade.
function grades() {
	var name = window.prompt("Put your name in, if you want.");
	var subject = window.prompt("Please put your subject in.");
	var part1 = "Sorry letters and special characters are not allowed";
	var grade = "A+";
	var grade1 = "A";
	var grade2 = "A-";
	var grade3 = "B+";
	var grade4 = "B";
	var grade5 = "B-";
	var grade6 = "C+";
	var grade7 = "C";
	var grade8 = "C-";
	var grade9 = "D+";
	var grade10 = "D";
	var grade11 = "F";
	var special_character = "A";
	var num0 = name + " You Got an " + grade + " in " + subject + ". Good job keep it up.";
	var num1 = name + " You Got an " + grade1 + " in " + subject + ". Good job keep it up.";
	var num2 = name + " You Got an " + grade2 + " in " + subject + ". Good job keep it up.";
	var num3 = name + " You Got an " + grade3 + " in " + subject + ". Try a little harder on the next assignment.";
	var num4 = name + " You Got an " + grade4 + " in " + subject + ". Try a little harder on the next assignment.";
	var num5 = name + " You Got an " + grade5 + " in " + subject + ". Try a little harder on the next assignment.";
	var num6 = name + " You Got an " + grade6 + " in " + subject + ". Try a little harder on the next assignment.";
	var num7 = name + " You Got an " + grade7 + " in " + subject + ". Try a little harder on the next assignment.";
	var num8 = name + " You Got an " + grade8 + " in " + subject + ". Try a little harder on the next assignment.";
	var num9 = name + " You Got an " + grade9 + " in " + subject + ". You are going to FAIL if you get a lower grade.";
	var num10 = name + " You Got an " + grade10 + " in " + subject + ".You are going to FAIL if you get a lower grade.";
	var num11 = name + " You Got an " + grade11 + " in " + subject + ". You are going to FAIL this term. So try and get your grades up, and try to stay after if you can.";

	var seventh = document.getElementById("seventhNums").value;
	//the prgress
	document.getElementById("box").style.background = "white";
	document.getElementById("body").style.cursor = 'progress';
	document.getElementById("seventhNum").style.cursor = 'progress';
	document.getElementById("answer").innerHTML = "Please wait...";
	document.getElementById("box").style.background = "tan";
	var g = 0;
	setTimeout(function () {
		//have the computer write the users output

		// var error = document.getElementById("answer").innerHTML="Sorry letters and special characters are not allowed";
		if (subject === "") {
			window.location.reload(true);
			document.getElementById("box").style.background = "tan";
		}

		//if the user puts in a letter or special character
		//have the cursor wait for serten time
		if (seventh.indexOf(special_character)) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = part1;
		}

		//if the user put in a value below 0
		if (seventh < 0) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
		}

		// if the user doesn't put in any value
		else if (seventh === "" || seventh.includes(" ")) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = part1;
		}

		// grade letter A+
		else if (seventh >= 101) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num0;
		}

		//grade letter A
		else if (seventh >= 94 || seventh == 100) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num1;
		}
		//grade letter A-
		else if (seventh >= 90) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num2;
		}

		//grade letter B+
		else if (seventh >= 87) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num3;
		}

		//grade letter B
		else if (seventh >= 83) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num4;
		}

		//grade letter B-
		else if (seventh >= 80) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num5;
		}

		//grade letter C+
		else if (seventh >= 77) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num6;
		}

		//grade letter C
		else if (seventh >= 73) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num7;
		}

		//grade letter C-
		else if (seventh >= 70) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num8;
		}

		//grade letter D+
		else if (seventh >= 67) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num9;
		}

		//grade letter D
		else if (seventh >= 60) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num10;
		}

		//grade letter F
		else if (seventh <= 59) {
			document.getElementById("box").style.background = "white";
			document.getElementById("seventhNum").style.cursor = 'auto';
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = num11;
		}
	}, 3000);
}

//numbergrade 1 to 5.
function grade() {
	var name = window.prompt("Put your name in, if you want.");
	var subject = window.prompt("Please put your subject in.");
	var gradeA = "A";
	var gradeB = "B";
	var gradeC = "C";
	var gradeD = "D";
	var gradeF = "F";
	var special_character = "A";

	//the prgress
	document.getElementById("box").style.background = "tan";
	document.getElementById("number").style.cursor = 'progress';
	document.getElementById("body").style.cursor = 'progress';
	document.getElementById("answer").innerHTML = "please wait...";
	var grades = document.getElementById("numbers").value;
	setTimeout(function () {

		//if the subject dosent have any input it reload the page
		if (subject === "") {
			window.location.reload(true);
			document.getElementById("box").style.background = "tan";
		}

		//if the user put in a value of 0 or lower
		if (grades <= 0) {
			document.getElementById("box").style.background = "white";
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = "Sorry you can only do up to 1 and 5 ";
		}

		//if the user put in a value of 1
		else if (grades == 1) {
			document.getElementById("box").style.background = "white";
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + gradeA + " in " + subject + ". Good job keep it up.";
		}

		//if the user put in a value of 2
		else if (grades == 2) {
			document.getElementById("box").style.background = "white";
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + gradeB + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//if the user put in a value of 3
		else if (grades == 3) {
			document.getElementById("box").style.background = "white";
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + gradeC + " in " + subject + ". Try a little harder on the next assignment.";
		}

		//if the user put in a value of 4
		else if (grades == 4) {
			document.getElementById("box").style.background = "white";
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + gradeD + " in " + subject + ". You are going to FAIL if you get a lower grade.";
		}

		//if the user put in a value of 5
		else if (grades == 5) {
			document.getElementById("box").style.background = "white";
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + gradeF + " in " + subject + ". You are going to FAIL this term. So try and get your grades up, and try to stay after if you can.";
		}

		//if the user put in a value of 6 or higer
		else if (grades >= 6) {
			document.getElementById("box").style.background = "white";
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = "Sorry you can only do up to 1 and 5";
		}
	}, 3000);
}

//lertter grade buttons going from A+ to F.
function letters() {
	document.getElementById("box").style.background = "white";
	var name = window.prompt("Put your name in, if you want.");
	var subject = window.prompt("Please put your subject in...");
	document.getElementById("box").style.background = "tan";
	document.getElementById("number").style.cursor = 'progress';
	document.getElementById("body").style.cursor = 'progress';
	document.getElementById("answer").innerHTML = "please wait...";
	setTimeout(function () {

		//the output box
		if (subject === "") {
			window.location.reload(true);
			document.getElementById("box").style.background = "tan";
		}

		// the code for the A+ button
		else if (document.getElementById("A+").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got " + " over 100% " + " in " + subject + ". Good job keep it up.";
		}

		// the code for the A button
		else if (document.getElementById("A").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 95% to a 100%" + " in " + subject + ". Good job keep it up.";
		}

		// the code for the A- button
		else if (document.getElementById("A-").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 90%" + " in " + subject + ". Good job keep it up.";
		}

		// the code for the B+ button
		else if (document.getElementById("B+").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 87%" + "in " + subject + ". Try a little harder on the next assignment.";
		}

		// the code for the B button
		else if (document.getElementById("B").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 83%" + "in " + subject + ". Try a little harder on the next assignment.";
		}

		// the code for the B- button
		else if (document.getElementById("B-").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 80%" + " in " + subject + ". Try a little harder on the next assignment.";
		}

		// the code for the C+ button
		else if (document.getElementById("C+").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 77%" + " in " + subject + ". Try a little harder on the next assignment.";
		}

		// the code for the C button
		else if (document.getElementById("C").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 73%" + " in " + subject + ". Try a little harder on the next assignment.";
			//document.getElementById("answer").innerHTML = name + " You Got an " + " 73%" + " in " + prompt("Please put your subject in.") + " Try a little harder on the next assignment.";
		}

		// the code for the C- button
		else if (document.getElementById("C-").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 70% " + " in " + subject + ". Try a little harder on the next assignment.";
		}

		// the code for the D+ button
		else if (document.getElementById("D+").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 67%" + " in " + subject + ". You are going to FAIL if you get a lower grade.";
		}

		// the code for the D button
		else if (document.getElementById("D").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an " + " 60%" + " in " + subject + ". You are going to FAIL if you get a lower grade.";
		}

		// the code for the F button
		else if (document.getElementById("F").checked) {
			document.getElementById("body").style.cursor = 'auto';
			document.getElementById("number").style.cursor = 'auto';
			document.getElementById("answer").innerHTML = name + " You Got an 59% or lower " + " in " + subject + ". You are going to FAIL this term. so try and get your grades up, and try to stay after if you can.";
		}
	}, 3000);
}