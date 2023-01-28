 // Set the date you're counting down to
 var countDownDate = new Date("oct 2, 2023").getTime();

 // Update the count down every 1 second
 var x = setInterval(function() {
 
   // Get today's date and time
   var now = new Date().getTime();
 
   // Find the distance between now and the count down date
   var distance = countDownDate - now;
 
   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
   // Display the result in the element with id="timer"
   document.getElementById("days").innerHTML = days + "d ";
   document.getElementById("hours").innerHTML = hours + "h ";
   document.getElementById("minutes").innerHTML = minutes + "m ";
   document.getElementById("seconds").innerHTML = seconds + "s ";
 
   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("timer").innerHTML = "EXPIRED";
   }
 }, 1000);
 