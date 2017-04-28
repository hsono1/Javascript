//Js program that countdowns the days left of a birthday.


	var daysUntilMyBirthday = 7;

	while(daysUntilMyBirthday>0)
	{
		if( daysUntilMyBirthday > 30)
		{
			console.log(daysUntilMyBirthday + " days until my birthday. Such a long time.");
		}
		else if(daysUntilMyBirthday <= 30 && daysUntilMyBirthday >= 5)
		{
			console.log(daysUntilMyBirthday + " days until my birthday. So exciting.");
		}	
		else
		{
			console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!");
		}
		daysUntilMyBirthday--;
	}

	console.log("HAPPY BIRTHDAY!!!");


