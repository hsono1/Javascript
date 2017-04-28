$(document).ready( function(){


	$('img').hover(

		function(){

			var temp = $(this).attr("src");
			$(this).attr("src",  $(this).attr("pic2"));
			console.log($(this).attr("pic2"));  
			$(this).attr("pic2",  temp);

		},


		function(){ 

		
			var temp = $(this).attr("src");
			$(this).attr("src",  $(this).attr("pic2"));
			$(this).attr("pic2",  temp);


		}

	);








});