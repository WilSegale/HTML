// this is the key code for the enter button
let enter = 13;

//this is the ending wait for the wait command
let seconds = "0000"

// this is the array for the person who has problems that need fixing
var problems = [
	"Hard times will make you grow.",
	"Don't let your past determine your future.",
	"You're allowed to scream, You're allowed to cry, but not to give up.",
	"You will outlast your problems.",
	"Accept yourself, love yourself, and keep moving forward." + " " +
	"If you want to fly, you have to give up what weighs you down. -Roy T. Bennett",
	"Be patient and tough; someday this pain will be useful to you. -Ovid",
	"Every day is a second chance.",
	"You may have to fight a battle more than once to win it. -Margaret Thatcher",
	"You think you deserve the pain that you have but you don't." + "" +
	"What you deserve is love and someone to care for you",
	"To heal a wound you must stop scratching it. -Paulo Coelho",
	"Things sometimes get worse before they get better.",
	"These times are hard but they will pass.",
	"Not all storms come to disrupt your life. Some come to clear your path.",
	"No darkness lasts forever. And even there, there are stars. -Ursula K. LeGuin",
	"Never be ashamed of a scar. It simply means you were stronger than whatever tried to hurt you.",
	"Make peace with your past so it won't destroy your present. -Paulo Coelho",
	"Love your future more than your past. -Joe Dispenza",
	"You might have bad days but those bad days will make you stronger.",
	"You will face many defeats in your life, but never let yourself be defeated. -Maya Angelou",
	"Sometimes painful endings bring the best new beginnings. -Shae Ross",
	"Just because of one bad chapter it doesn't mean it's the end of the book.",
	"If you feel like all hope is lost you still have yourself.",
	"Sometimes you have to give up on people, not because you don't care but because they don't"
];

//This will give the users a link to click if they want to get help
var HelpLinks = [
	'<a href="https://afsp.org/find-support/resources/" target="_blank" >American Foundation for Suicide Prevention (AFSP)</a>',
	'<a href="https://www.nimh.nih.gov/health/topics/suicide-prevention/index.shtml" target="_blank" >National Institute of Mental Health (NIMH)</a>',
	'<a href="https://www.sptsusa.org/" target="_blank" >Society for the Prevention of Teen Suicide (SPTS)</a>',
	'<a href="https://befrienders.org" target="_blank" >befrienders</a>',
	'<a href="https://www.nami.org/Home" target="_blank" >Nami</a>',
	'<a href="https://www.sprc.org/" target="_blank" >Suicide Prevention Resource Center (SPRC)</a>',
	'<a href="https://www.crisistextline.org/" target="_blank" >Crisis Text Line</a>',
	'<a href="https://www.bethe1to.com/" target="_blank" >Bethe1to</a>',
	'<a href="https://save.org/" target="_blank" >Suicide Awareness Voices of Education (SAVE)</a>',
	'<a href="https://thetrevorproject.org/" target="_blank" >The Trevor Project</a>'
];

//tell the users how to program works
function info() {
	var info = document.getElementById("info");
	info.innerHTML = "Hello, my name is Chatty The ChatBot." +
		" I'm here to help you with your problems." +
		" What are you struggling with?";
}

//if the enter key is pressed it makes the site work
function Enter(event) {
	var EnterKey = event.keyCode;
	var input = document.getElementById("input").value;
	var userInput = document.getElementById("input");
	var output = document.getElementById("output");
	var outputProblems = Math.floor((Math.random() * problems.length));
	
	if (input.includes("hurt someone") && EnterKey == enter ||
	    input.includes("cutting") && EnterKey == enter ||
	    input.includes("die") && EnterKey == enter ||
	    input.includes("dont want to be alive") && EnterKey == enter){
			NeedHelp(); //this function will send the user to a different function that will say "I am not trained in this but let me find you someone who is please hold"
	} 

	else if(input.includes("help") && EnterKey == enter){
		output.innerHTML = "Input how you are feeling and I will help you the best I can."
	}

	else {
		for (var i = 0; i < problems.length; i++) {
			if (input && EnterKey == 13) {
				userInput.value = "";
				output.innerHTML = problems[outputProblems];
				return false
			}
		}
	}
}

//randomly outputs motivation quotes
function NeedHelp() {
	var input = document.getElementById("input").value;
	var userInput = document.getElementById("input");
	var output = document.getElementById("output");
	var outputProblems = Math.floor((Math.random() * problems.length));
	
	if (input.includes("hurt someone") ||
		input.includes("cutting") ||
		input.includes("die") ||
		input.includes("dont want to be alive")) {
		NeedHelp(); //this function will send the user to a different function that will say "I am not trained in this but let me find you someone who is please hold"
	} 
	else if(input == "help"){
		output.innerHTML = "Input how you are feeling and I will help you the best I can."
	}
	
	else {
		for ( i = 0; i < problems.length; i++) {
			if (input) {
				userInput.value = "";
				output.innerHTML = problems[outputProblems];
			}
		}
	}
}

// this output the best answer if they want to kill themself
function output() {
	var output = document.getElementById("output");
	var links = Math.floor((Math.random() * HelpLinks.length));
	output.innerHTML = 'Please wait im trying to find a site that will best help you.';
	output.style.cursor = "progress";

	setTimeout(function () {
		output.style.cursor = "auto";
		output.innerHTML = `I am sorry to hear that you are feeling this way. This program will help fix that. This website might help you. ${HelpLinks[links]} `

	}, 3 + seconds);
}

//outputs the name of the program that will help the user
//tell the users that they will find a program that might help you with your thoughts
function NeedHelp() {
	var output = document.getElementById("output");
	var links = Math.floor((Math.random() * HelpLinks.length));

	output.innerHTML = 'Please wait im trying to find a site that will best help you.';
	output.style.cursor = "progress";

	setTimeout(function () {
		output.style.cursor = "auto";
		output.innerHTML = `I am sorry to hear that you are feeling this way. This program will help fix that. This website might help you. ${HelpLinks[links]} `
		
	}, 3 + seconds);
}

//tell the users that nothing is shared and nothing is saved on the site
function Privacy() {
	var output = document.getElementById("Privacy");
	output.innerHTML = 
		'This website will save nothing that you say and your info will be deleted immediately when you close the site. </br>' +
		'Everything that you say is confidential and will not be shared with the developer. This is a place for you to feel safe and talk about your feelings. </br>' +
		'The only time that this site will tell someone about how you are feeling is if you are thinking about harming yourself or someone else, </br>' +
		'it will send you to someone who is trained to deal with what you are feeling.'
	
	//hides the privacy output
	if (output.style.display == "block") {
		output.style.display = "none";
	}
	
	//shows the privacy output
	else {
		output.style.display = "block";
	}
}