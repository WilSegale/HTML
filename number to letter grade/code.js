 //main function for the clock.
function clock() {
	//calculate angle
	var d, h, m, s;
	d = new Date();
 
	//display time
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
 
	if (h >= 12) {setText('suffix', 'PM');}
	else {setText('suffix', 'AM');}
 
	if (h != 12) {h %= 12;}
 
	setText('sec', s);
	setText('min', m);
	setText('hr', h);
 
	//call every second
	setTimeout(clock, 1000);
}
 
//sets the time.
function setText(id, val) {
	if (val < 10) {val = '0' + val;}
	document.getElementById(id).innerHTML = val;
}
 
//shows the clock time.
window.onload = clock;

//Covert number grade to letter grade for high school 
 function grades() {
 
	//if the input box doesn't have any value does it does nothing.
	var grade = document.getElementById("inputBox").value;
	if (grade == "") {return true;}
 
	var grades = document.getElementById("answer");
	//if the prompt has any numbers or doesn't have any input it shows an error message.
	var subject = prompt("Put your subject in.").toLocaleUpperCase();
	if (subject >= 0) {
	   alert(`Error I don't understand by what you mean by "${subject}"? Could you please try again?`);
	   return true;
	}
 
	//if the user does not input anything it continuously says 'put your subject in.'
	else if (subject === "") {
		for (subject; subject === "";) {
			subject = prompt("Put your subject in");
		}
	}
	// prompt ends
 
	//number grade to letter grade starts
	document.getElementById("button").style.cursor = "pointer";
	
	//grade letter A+
	if (grade >= 101) {grades.innerText = `You got an A+ in ${subject}. Good job your in a HON's class.`}
 
	//grade letter A
	else if (grade >= 94 || grade == 100) {grades.innerText = `You got an A in ${subject}. Good job keep it up.`}
 
	//grade letter A-
	else if (grade >= 90) {grades.innerText = `You got an A- in ${subject}. Good job keep it up.`;}
 
	//grade letter B+
	else if (grade >= 87) {grades.innerText = `You got an B+ in ${subject}. Try a little harder on the next assignment.`;}
 
	//grade letter B
	else if (grade >= 83) {grades.innerText = `You got an B in ${subject}. Try a little harder on the next assignment.`;}
 
	//grade letter B-
	else if (grade >= 80) {grades.innerText = `You got an B- in ${subject}. Try a little harder on the next assignment.`;}
 
	//grade letter C+
	else if (grade >= 77) {grades.innerText = `You got an C+ in ${subject}. Try a little harder on the next assignment.`;}
 
	//grade letter C
	else if (grade >= 73) {grades.innerText = `You got an C in ${subject}. Try a little harder on the next assignment.`;}
 
	//grade letter C-
	else if (grade >= 70) {grades.innerText = `You got an C- in ${subject}. Try a little harder on the next assignment.`;}
 
	//grade letter D+
	else if (grade >= 67) {grades.innerText = `You got an D+ in ${subject}. You are going to FAIL if you get a lower grade.`;}
 
	//grade letter D
	else if (grade >= 60) {grades.innerText = `You got an D in ${subject}. You are going to FAIL if you get a lower grade.`;}
 
	//grade letter F
	else if (grade <= 59) {grades.innerText = `You got an F in ${subject}. You are going to FAIL this term. So try and get your grades up, and try to stay after if you can.`}
}

//Covert number grade to letter grade for college students
function CollegeGradeConvert(){
	var firstNumber = prompt("Please enter a the top number in your collage grade list");
	var secondNumber = prompt("Please enter a the bottom number in your collage grade list");
	var output = firstNumber/secondNumber
	alert(`Your grade is: ${output}`)
}

//Only numbers not letters in the text box
 document.onkeydown = function (lettersNo) {
	if (lettersNo.ctrlKey && (lettersNo.keyCode == 67 || lettersNo.keyCode == 86 || lettersNo.keyCode == 85 || lettersNo.keyCode == 117)) { //Alt+c, Alt+v will also be disabled sadly.
	   return;
	}
	var code = (lettersNo.which) ? lettersNo.which : lettersNo.keyCode;
	if (code > 31 && (code < 48 || code > 57)) {lettersNo.preventDefault();}
};