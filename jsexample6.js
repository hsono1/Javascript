//Function that print array. If reversed is true, reverse array and print it

var arr = ["James", "Jill", "Jane", "Jack", "Jones"];

function printArray(arr1, reversed)
{
	if(reversed == false)
	{
		for (var i = 0; i < arr1.length; i++) 
		{
			console.log(i + " -> " + arr1[i]);
		}
	}
	else  //reversing array
	{

		for (var i = 0; i < arr1.length/2; i++) 
		{
			var temp = arr1[i];
			arr1[i] = arr1[arr1.length-i-1];
			arr1[arr1.length-i-1] = temp;				
		}
		for (var i = 0; i < arr1.length; i++) 
		{
			console.log(i + " -> " + arr1[i]);
		}

	}
}



printArray(arr,true);



































