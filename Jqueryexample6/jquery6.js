

	function random_color()
          {
             var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
             color = '#'  //this is what we'll return!
             for(var i = 0; i < 6; i++) 
             {
                x = Math.floor((Math.random()*16))
                color += rgb[x]; 
             }
             return color;
     };




  $(document).ready(function(){
     $('#large_box').click(function(){ 

        $(".side_box, .middle_box").css('background-color', random_color());
        $(this).css('background-color', random_color());





 //event.stopProgration will stop any parent element to be triggered if a click in the child element.
 //This is produced becauses clicking a child element will click a container too.
     })
     $('.side_box').click(function(event){
       
        $(this).siblings().css('background-color', random_color());
         event.stopPropagation();

     })
     $('.middle_box').click(function(event){
     	event.stopPropagation();
        $(this).parent().css('background-color', random_color());
        	 
     })
  });



