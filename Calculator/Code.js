//output the users input
function dis(val) {
    document.getElementById("result").value += val;
}

function keycode(event, val) {
    var Key = event.keyCode;
    var input = document.getElementById("result").value;
    var user = document.getElementById("result");
    var answer = eval(input);

    var C = 99;
    var c = 67;
    var Enter = 13;
    if (input && Key == Enter) {
        document.getElementById("output").innerHTML += "</br>" + input + " = " + answer + " ";
        user.value = answer;
    } else if ((input && Key == C) || Key == c || (user && Key == C) || key == c) {
        //if the user presses the C key it will clear the input feild
        user.style.color = "whilte";
        setTimeout(function () {
            user.style.color = "black";
            user.value = "";
        }, null);
    }
}

//solves the equation
function solve(val) {
    var input = document.getElementById("result").value;
    var answer = eval(input);

    if (eval.length >= 3) {
        document.getElementById("result").value = "," + answer;
    }

    document.getElementById("scans").innerHTML = "";

    if (input) {
        document.getElementById("result").value = answer; //outputs the answer
        document.getElementById("output").innerHTML += "</br>" + input + " = " + answer + "  ";
    } else if (input !== null) {
        console.clear();
        document.getElementById("scan").disabled = false;
    }
}

//clears the input box
function clr() {
    document.getElementById("result").value = "";
}

//removes one number in the users inputbox
function removeTextTag() {
    var string = document.getElementById("result").value;
    document.getElementById("result").value = string.substring(0, string.length - 1);
}