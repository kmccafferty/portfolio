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
  
  
  
}); //End document.ready