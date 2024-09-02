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

// Ensure the DOM is loaded before accessing elements
document.addEventListener("DOMContentLoaded", function() {
    var Input = document.getElementById("input"); // User input
    var Output = document.getElementById('output'); // Output element

    function info() {
        // Onload it says how to work the program
        Output.innerText = "Click the magic 8Ball to see the result.";
    }

    function output() {
        var outputIndex = Math.floor(Math.random() * Answer.length); // Randomly choose something from the Answers array

        // If the user inputs "help"
        if (Input.value.trim().toLowerCase() === "help") {
            Output.innerText = 'Input something in the input field and it will output an answer.';
        }
        // Check if the input is a number
        else if (!isNaN(Input.value) && Input.value.trim() !== "") {
            Output.innerText = "Click the magic 8Ball to see the result.";
        }
        // Output an answer to the user's input
        else {
            Output.innerText = Answer[outputIndex]; // Output the answer
        }
        Input.value = ""; // Clear the user input
    }

    // You might want to set this function to run when the page loads
    info();
    
    // Add an event listener if you want to trigger output on Enter key press
    Input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            output();
        }
    });
});