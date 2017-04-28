$(document).ready( function(){

		
	//adding class .red when button clicked
	$('.button1').click( function(){

		$('.redClass').addClass('red');
	

	});


	$('.button2').click( function(){

		$('img').slideToggle('slow', function(){});

	});



	$('.button3').click( function(){


		$('p').last().append(". New paragraph appended");


	});






});