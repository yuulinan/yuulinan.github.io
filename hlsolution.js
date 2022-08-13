// prompt for max number
let valid_input = false;
let maxNumber, input;

while(!valid_input) {
    input = window.prompt("What should the maximum number be?");
    maxNumber = Number(input);

    if(maxNumber != NaN && maxNumber > 0) {
        valid_input = true;
    }
}
let num = Math.floor(Math.random() * maxNumber) + 1;




console.log(num);

let guesses = [];

let count = guesses.length

// creating a function to check array for guesses
function guessed(number) {
    if(guesses.indexOf(number) === -1) return false; 
    return true;
}



function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    // validating and tracking the guesses
    if(isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }
    else if (guess < 1 || guess > maxNumber) {
        message.innerHTML = "That number is not in range, try again";
    }
    // error message for duplicate guesses
    else if (guessed(guess)){
        message.innerHTML = "That number has already been guessed!";
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        guesses.push(guess);
        count += 1;
    }
    // validating and tracking the guesses 
    else if (guess < num) {
        message.innerHTML = "No, try a higher number."; 
        guesses.push(guess);
        count += 1;
    }
    else {
        guesses.push(guess);
        message.innerHTML = "You got it!\n";
        count += 1;
        message.innerHTML += "It  took  you\n"  +  guesses.length  +  "\ntries  and  your  guesses  were\n"  +  guesses.join (", \n ");
    }
}

