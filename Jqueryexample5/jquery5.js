function addRow()
{

	$('.table1').children().last().after("<tr><td>" + $('#fName').val() +  "</td><td>" +  $('#lName').val()    +  "</td><td>" + 
											$('#eAddress').val()   +  "</td><td>" +  $('#cNumber').val()    +  "</td></tr>");

};


function formValidation()
{


	if($('#fName').val() == "First Name" || $('#lName').val() == "Last Name" 
		|| $('#eAddress').val() == "Email Address" || $('#cNumber').val() == "Phone #")
	{
		return false;
	}

	return true;

};


$(document).ready( function(){




	$('.form1 input[type="button"]').click( function(){

		if(!formValidation())
		{
			alert("Change the values");
		}
		else
		{
			addRow();	
		}

	});



















});