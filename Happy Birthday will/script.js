// Set the date we're counting down to
var user = prompt("put in a date");
var countDownDate = new Date(user).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time.,
  var now = new Date().getTime();
	
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
	
  // Time calculations for days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));//correct
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));// correct 
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));//correct
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));//correct
  var seconds = Math.floor((distance % (1000 * 60)) / (1000));//correct
	
  // Output the result in an element with id="demo"
  if(years<1){
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  }else{
  document.getElementById("demo").innerHTML = years +"y " +  days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  }
  
}, 1000);