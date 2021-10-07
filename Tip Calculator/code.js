//Calculate Tip
function calculateTip() {
  var select = document.getElementById("serviceQual").value;
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;

	//validate input
	if (billAmt === "" || serviceQual === 0) {
		alert("Please enter values");
		return;
	}

	//if the user dosent Choose an option.
	if(select === false){
	  alert("you need to Choose an option");
	  return;
	}
	
	var user = prompt("Put your name in if you want to.");
  if(user === null) {
    for( var i=0; i<user; i++ ){
      alert(user);
    }
    return;
  }


	//Check to see if this input is empty or less than or equal to 1
	if (numOfPeople === "" || numOfPeople <= 1) {
		document.getElementById("each").style.display = "none";
		document.getElementById("input").innerHTML = user + " You would need to tip that person " + " " ;

	} else {
		document.getElementById("input").innerHTML = user + " You would each need to tip that person " + " " ;
		document.getElementById("each").style.display = "block";
	}

	//Calculate tip
	var total = (billAmt * serviceQual) / numOfPeople;
	//round to two decimal places
	total = Math.round(total * 100) / 100;
	//next line allows us to always have two digits after decimal point
	total = total.toFixed(2);
	//Display the tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
function calculate() {
	calculateTip();
}
