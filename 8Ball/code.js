var Answer = [
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
  
  function output() {
	var Input = document.getElementById("input") //user input
	var Output = document.getElementById('output') //the output of the users input
	var output = Math.floor(Math.random() * Answer.length); //randomly chosses something form the Answers array
	
	// if the user input help it tells them how to use the programe
	if (Input.value == "help") {
		Output.innerText = 'Input something in the input feild and it will output an answer.'
	}

	//tells the program if  a number is used
	else if(Input.value >= 0 || Input.value <= -1){
		Output.innerText = "No numbers are allowed in the text box only words."
	}

	//if the input value has nothing in it it say for them to input somthing in it
	else if (Input.value == "") {
		Output.innerText = "Please input something in the text box."
	}
	//output a answer of the users input
	else {
		Output.innerText = Answer[output]; //output the answer
		Input.value = ""; //clears the user input when they click the 8Ball
	}
  }