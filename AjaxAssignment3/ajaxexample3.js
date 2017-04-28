$(document).ready(function(){


	$('button').click( function(){
		
		
		
		$.get(  "http://api.openweathermap.org/data/2.5/weather?q=" + $('.city').val() + "&APPID=f8d73908a82f6f4435a00133272cf3e6", function(res){



			var tempF = res.main.temp * 9 / 5 - 459.67;
			var meterToMiles = res.wind.speed * 0.000621371;
			var stringToDisplay =  '<h1>'+ $('.city').val() + '</h1>'; 
			stringToDisplay += '<h3>'+ res.weather[0].main + '</h3>' ;
			stringToDisplay += '<h3>Temperature: '+ Math.floor(tempF) +  '</h3>';
			stringToDisplay += '<h3>Pressure: ' + res.main.pressure  + ' hPa</h3>';
			


			$('.display').html(stringToDisplay);




		}, 'json');

	});









});