//for loop
/*

This part adds up each daily reward for all days.
var totalReward = 0;
var dailyReward = 0;

for( var i = 1 ; i <=30; i++)
{
	
	//for loop to get the daily reward
	//for loop to get power of 2
	for( var j = 1, result = 1; j <= i-1; j++)
	{
		result *= 2;

	}
	dailyReward = result;
	totalReward += dailyReward;
}

console.log("The total reward after 30 days is: " + totalReward*0.01);

*/
var days=30;
var dailyReward = 1;
for( var i = 1 ; i <=days - 1; i++)
{
	dailyReward *= 2;

}
console.log(dailyReward/100);

