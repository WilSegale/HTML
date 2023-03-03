/*Drop down function for the menue*/
function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }
/*<![CDATA[*/
function initializeGoogleTranslateElement() {
	new google.translate.TranslateElement({
		startpageLanguage: "en",
		layout: google.translate.TranslateElement.InlineLayout.SIMPLE
	}, "google_translate_element");
}


document.onkeydown = function (e) {
	if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) { //Alt+c, Alt+v will also be disabled sadly.
	}
	return false;
};

function calculate_age(dob) {
	var diff_ms = Date.now() - dob.getTime();
	var age_dt = new Date(diff_ms);

	return Math.abs(age_dt.getUTCFullYear() - 2019);
}

(calculate_age(new Date(2019, 11, 4)));

(calculate_age(new Date(2019, 1, 1)));
