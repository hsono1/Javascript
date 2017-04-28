//Program that tells the time with preset instructions. 

var HOUR = 6;
var MINUTE = 45;
var PERIOD = "PM";
var OUTPUT= "";

OUTPUT += "It's ";

if( MINUTE < 30)
{
	OUTPUT += "just after ";
}
else
{
	OUTPUT += "almost ";
	HOUR++;
}

OUTPUT += HOUR + " ";

if(PERIOD == "AM")
{
	OUTPUT += "in the morning ";
}
else
{
	OUTPUT += "in the evening  ";
}

console.log(OUTPUT);