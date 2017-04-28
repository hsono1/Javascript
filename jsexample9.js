//function that copies an array only accepting numbers

function numbersOnly(arr)
{
	var array1 = [];
	for( var i= 0; i<arr.length;i++)
	{
		if( typeof arr[i] == "number")
		{
			array1.push(arr[i]);
		}


	}

	return array1;



}


var array2 = ["Hans", 3, -5, 7, "Yomy", "Carla", Infinity];
var array3 = numbersOnly(array2);
console.log(array3);
