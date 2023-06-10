function showGreeting() {
   var currentHour = new Date().getHours();
   var greeting = "";
   
   if (currentHour < 12) {
       greeting = "Good morning!";
   } else if (currentHour < 18) {
       greeting = "Good afternoon!";
   } else {
       greeting = "Good evening!";
   }
   
   document.getElementById("greeting").innerHTML = greeting;
}
function changeBackgroundColor() {
   var button = document.getElementById("test");
   button.classList.add("active");
}
