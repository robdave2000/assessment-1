const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool.");

reader.question("Please type in the password you would like to test.", function(input){
	let password = input;
	
	if (password.length >= 10)
    {
        console.log("Congradulations your password was " + password.length + " characters long. That meets the required length of 10");
    }
    else if (password.length < 10)
    {
        console.log("Unfortunatly your password was " + password.length + " characters long. That does not meet the required length of 10");
    }
    else
    {
        console.log("ERROR");
    }
	// This line closes the connection to the command line interface.
	reader.close()

});