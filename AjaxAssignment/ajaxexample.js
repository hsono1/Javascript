$(document).ready(function(){

	
	for( var idx = 1; idx <= 151; idx++){
		$('body').append("<img class='imgcss' src='http://pokeapi.co/media/img/" + idx + ".png'>");
	}


	$('img').click(function(){


			var index = $(this).index() + 1;
			$.get(  "http://pokeapi.co/api/v2/pokemon/" + index + "/" ,  function(res){         

					alert(res.abilities[0].ability.name);
					


				} , "json"



			);



	})


});