$(document).ready(function(){
  
///////////////////////////////////////////////////
// Navigation Menu Toggle /////////////////////////  
///////////////////////////////////////////////////
  
var isOpen = false;
$('.menu_button').click(function(){
  if(isOpen){
      $('#navigation_list').fadeOut(750);
      isOpen = false;
  } else {
      $('#navigation_list').fadeIn(1000);
      isOpen = true;
    } //End if-else statement
}); //End Nav Menu Toggle
  

//Lightbox /////////////////////////////////////////

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');


$overlay.append($image);
$overlay.append($caption);
$('body').append($overlay);

$('.image_div a').click(function(event){
	event.preventDefault();
	var imageLocation=$(this).attr('href');
	$overlay.show();
	var captionText =$(this).children('img').attr('alt');
	$caption.text(captionText);

	var imageSource = $(this).children('img').attr('src');
	$image.attr('src', imageSource)

	var $abc = $(this).offset();
	$overlay.css({top: $abc.top});

});

$overlay.click(function(){
	$(this).hide();
});
  
  
}); //End document.ready