$(document).ready(function(){

	
	for( var idx = 1; idx <= 151; idx++){
		$('.pokeImgContainer').append("<img class='imgcss' src='http://pokeapi.co/media/img/" + idx + ".png'>");
	}


	$('img').click(function(){


			var index = $(this).index() + 1;
			$.get(  "http://pokeapi.co/api/v2/pokemon/" + index + "/" ,  function(res){         


					var display = "";


					var pokeName = res.name;
					var nameCaps = "" + pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

					display += "<h1>" + nameCaps + "</h1>";
					display += "<img class='imgcss' src='http://pokeapi.co/media/img/" + index + ".png'>";
					

					display += "<h3>Types: </h3>";



					var listForm = "<ul>";
					

					for( var idx = 0; idx < res.types.length; idx++)
					{
						listForm += "<li>" +  res.types[idx].type.name    + "</li>";
					}

					listForm += "</ul>";

					display += listForm;
					

					display += "<h3>Height: </h3>";
					display += res.height;

					
					display += "<h3>Weight: </h3>";
					display += res.weight;


					$(".pokedex").html(display);
					


				} , "json"



			);



	})


});