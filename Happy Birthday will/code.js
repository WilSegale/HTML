// Update the count down every 1 second
var x = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();
  	var d = new Date();
  	var n = d.getFullYear();
	// Set the date we're counting down to
	var countDownDate = new Date("10/02/"+n).getTime();
	var todaysDate = new Date().getTime();
	var distance = countDownDate - todaysDate+1;


	// Time calculations for days, hours, minutes and seconds
	var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
	var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365))/(1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	// Output the result in an element with id="demo"
	if(years === 0){
	  	document.getElementById("countDown").innerHTML =  days + "d - " + 
														  hours + "h - " +  
														  minutes + "m - "  + 
														  seconds + "s";
	}

	else if(days === 0){
		document.getElementById("countDown").innerHTML =  hours + "h - " +  
														  minutes + "m - "  + 
														  seconds + "s";
	}

	 else if(hours === 0){
		document.getElementById("countDown").innerHTML =  minutes + "m - "  + 
														  seconds + "s";
	}
	else if(minutes === 0){
		document.getElementById("countDown").innerHTML =  seconds + "s";
	}

	else{document.getElementById("countDown").innerHTML = years + "y - " +
														  days + "d - " +
														  hours + "h - " + 
														  minutes + "m - " +
														  seconds + "s";}

	// If the count down is over, write some text 
	if (distance <= 0){
		document.getElementById("countDown").innerHTML="Happy Birth Day Will";
	}
  
},1000);

document.onkeydown = function (e){
	if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) { //Alt+c, Alt+v will also be disabled sadly.
	
	    var code = (e.which) ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
		    e.preventDefault();
	    }
	}
};

function disableClick(){
	document.onclick = function (event) {
		if (event.button == 2) {
			return false;
		}
	};
}

