let Answer = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy, try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don’t count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
];

function output(){
	var Input = document.getElementById("input")//user input
	var Output = document.getElementById('output')//the output of the users input
	var output = Math.floor(Math.random() * Answer.length);//randomly chosses something form the Answers array
	Output.innerText = Answer[output];//output the answer
	Input.value="";//clears the user input when they click the 8Ball

}