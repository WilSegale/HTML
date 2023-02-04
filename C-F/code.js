function convertTemperature() {
    var celsius = document.getElementById("celsiusInput").value;
    var fahrenheit = (celsius * 9/5) + 32;
    var OUTPUT = document.getElementById("output")
    
    if (celsius == ""){
        OUTPUT.innerHTML = "Please enter a temperature";
    }
    
    else{
        OUTPUT.innerHTML = celsius + "°C = " + fahrenheit + "°F";
    }
    
}