//function that resembles a slot machine with 1 in 100 chance to win


function slotMachine(quarters)
{
	var numberToWin=47;
	console.log("You have " + quarters + " quarters");
	while( quarters > 0)
	{
		
		var randomNumber = Math.floor((Math.random()*100)+1);  //random number between 1 and 100
		console.log("Number to win is " + numberToWin);
		console.log("Random number obtained is " + randomNumber);
		if(numberToWin == randomNumber)
		{
			var randomReward = Math.floor((Math.random()*51)+50); //random number between 50 to 100
			console.log("You won " + randomReward + " quarters");
			quarters = quarters + randomReward;
			console.log("Your current balance is " + quarters + " quarters");
		}
		else
		{
			quarters--;
			console.log("You have now " + quarters + " quarters");
		}

	}

}




slotMachine(10);

























