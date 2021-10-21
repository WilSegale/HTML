//say the IP for a crent amount of time.
var getIPAddress = function () {
	$.getJSON("https://jsonip.com/", function (data) {
		var elem = document.getElementById('IP');
		elem.parentNode.removeChild(elem);
		document.getElementById("ip").innerHTML += "Your IP address is: " + data.ip;
	});
	// brake;
	var timeleft = 30;
	var downloadTimer = setInterval(function () {
		
		if (timeleft < 0) {
			clearInterval(downloadTimer);
			$('#ip').fadeOut("slow");
			$('#countdown').fadeOut("slow");
		} 
		
		else {
			document.getElementById("countdown").innerHTML = "You will not be able to see your IP address in " + timeleft + "S";
		}
		
		timeleft -= 1;
	}, 1000);
};

//scans the devices for certen things
function scan() {
	var scan = document.getElementById("scans").innerHTML += "javaEnabled is " +
                                                              navigator.javaEnabled() + "<br>" + "<br>" + " The language is " 
                                                              + navigator.language + "<br>" + "<br>" + 
                                                              document.getElementById("scans").innerHTML 
                                                              + "navigator.platform is " + navigator.platform + "<br>" + "<br>" + 
                                                              document.getElementById("scans").innerHTML + navigator.userAgent 
                                                              + "<br>" + "<br>" + document.getElementById("scans").innerHTML + 
                                                              navigator.appVersion + "<br>" + "<br>" + 
                                                              ocument.getElementById("scans").innerHTML + "navigator.appCodeName is " + 
                                                              navigator.appCodeName + "<br>" + "<br>" + 
                                                              document.getElementById("scans").innerHTML + "navigator.cookieEnabled is " + 
                                                              navigator.cookieEnabled + "<br>" + "<br>" + 
                                                              document.getElementById("scans").innerHTML + navigator.appVersion;
	document.getElementById("scan").style.display = "none";
	document.getElementById("stopScan").style.display = "block";
	console.log(scan);
}

//stops the scan from happening
function stopScan() {
	document.getElementById("scans").innerHTML = "";
	document.getElementById("stopScan").style.display = "none";
	document.getElementById("scan").style.display = "block";
}

//output the users input
function dis(val) {
	document.getElementById("result").value += val;
}

function keycode(event, val) {
	var Key = event.keyCode;
	var input = document.getElementById("result").value;
	var user = document.getElementById("result");
	var answer = eval(input);
	
	var C = 99;
    var c = 67;
	var Enter = 13;
	if (input && Key == Enter) {
	  document.getElementById("output").innerHTML += "</br>" + input + " = " + answer + " ";
		user.value = answer;
	}
	
	else if (input && Key == C || Key == c || 
        user && Key == C  || key == c) { //if the user presses the C key it will clear the input feild
		user.style.color = 'white';
		setTimeout(function () {
			user.style.color = 'black';
			user.value = "";
		},null);
	}
}

//solves the equation
function solve(val) {

	var input = document.getElementById("result").value;
	var answer = eval(input);

	if (eval.length >= 3) {
		document.getElementById("result").value = "," + answer;
	}

	document.getElementById("scans").innerHTML = "";
	
	if (input) {
		document.getElementById("result").value = answer;//outputs the answer
		document.getElementById("output").innerHTML += "</br>" + input + " = " + answer + "  ";
		console.log("The answer is " + "(" + answer + ")");
		document.getElementById("scan").disabled = false;
	} 
	
	else if (input !== null) {
	  console.clear();
		document.getElementById("scan").disabled = false;
	}
}

//clears the input box
function clr() {
	document.getElementById("result").value = "";
}

//says what today is
function Whats_today() {
	var today = new Date();
	var weekday = new Array(7);
	weekday[0] = "Today is Sunday.";
	weekday[1] = "Today is Monday.";
	weekday[2] = "Today is Tuesday.";
	weekday[3] = "Today is Wednesday. The week is almost over. Are you happy?";
	weekday[4] = "Today is Thursday.";
	weekday[5] = "Today is Friday.";
	weekday[6] = "Today is Saturday.";
	today = weekday[today.getDay()];
	alert(today);
}

//removes one number in the users inputbox
function removeTextTag() {
	var string = document.getElementById("result").value;
	document.getElementById("result").value = string.substring(0, string.length - 1);
}

//copys the users input
function copy() {
	var number = 0;
	var copyText = document.getElementById("result");

	copyText.select();
	
	if (number) {
		copyText.setSelectionRange();
		copyText.select();
	}
	
	document.execCommand("copy");
}