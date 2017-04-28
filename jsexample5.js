//Function that takes a start point, end point, and skip amount, to print all numbers in the range.

function printRange(start,end,range)
{
	if(range==undefined)
	{
		for(start;start<end;start+=1)
		{
		console.log(start);
		}
	}
	if(range==undefined && end==undefined)
	{
		for(var i = 0;i< start;i+=1)
		{
			console.log(i);
		}
	}
	
	for(start;start<end;start+=range)
	{
		console.log(start);
	}

}


printRange(5,20,2);
console.log();
printRange(5,20);
console.log();
printRange(5);


