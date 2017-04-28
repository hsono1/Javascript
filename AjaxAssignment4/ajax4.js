$(document).ready( function(){



	$('img').click( function(){

		var imgId = $(this).attr('id');
		$.get( "http://www.anapioficeandfire.com/api/houses/" + imgId ,  function(res){


				var nameRow = "<p>Name: " + res.name + "</p>";
				var wordRow = "<p>Words: " + res.words + "</p>";
				var titles = "";
				for( var idx = 0; idx < res.titles.length; idx++)
				{
					titles += res.titles[idx] + ", ";
				}
				var titlesRow = "<p>Titles: " + titles + "</p>";

				$('.details').html( nameRow + wordRow + titlesRow );
				

		} , 'json');




	});


});