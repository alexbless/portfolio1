var secretNumber = 69
	console.log(secretNumber)

var userNumber = prompt('Guess a number between 1 and 100')
	console.log(userNumber)

while ( secretNumber != userNumber ) {
	console.log("while loop is still running")
	if ( secretNumber == userNumber) {
		console.log('you win')
		} else if(secretNumber < userNumber) {
			userNumber = prompt("guess a lower number")
		}	else {
			userNumber = prompt("guess a higher number")
		}
	}
		
