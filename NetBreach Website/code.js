var GitLink = [
    '<a href="https://github.com/WilSegale/NetBreach">NetBreach</a>'
]

document.getElementById("link").innerHTML = GitLink;
var year = document.getElementById("COPYRIGHT");

//GET THE CURRENT YEAR FOR THE COPY RIGHT
var currentYear = new Date().getFullYear();

//if year not current year then show new year and old year
if (currentYear != 2024) {
    year.innerHTML = `NetBreach © 2024 ${currentYear}`
}
//if year is current year then show current year
else{
    year.innerHTML = `NetBreach © ${currentYear}`
}