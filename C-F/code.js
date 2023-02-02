function convertTemperature() {
    var celsius = document.getElementById("celsiusInput").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("output").innerHTML = celsius + "°C = " + fahrenheit + "°F";
}