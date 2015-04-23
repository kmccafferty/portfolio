window.onload = function(){ 
  
///////////////////////////////////////////
// SUBMITTING A POST //////////////////////
///////////////////////////////////////////

var myData = new Firebase('https://mccaffertyblog.firebaseio.com/posts');
  
function submittal(evt) {

  var title = $("#post_title").val();
  var content = $("#post_body").val();
  var date = $('#post_date').val();
  
  myData.push({title: title, date: date, content: content});
  evt.preventDefault();
  $("#post_title").val("");
  $("#post_body").val("");
  $('#post_date').val("");
} //end submittal event

$('#post_button').click(submittal);


myData.on("value", function(snapshot){
 snapshot.forEach(function(data){
    var innerhtml = '<div class="blogpost">';
    var content = data.val().content;
    var title = data.val().title;
    var date = data.val().date;
    innerhtml += '<h1>' + title + '</h1>';
    innerhtml += '<span class="date">' + date + '</span>';
    innerhtml += '<p>' + content + '</p></div>';
     $('#blog').prepend(innerhtml);
  }); //end for loop
}); 
  


////////////////////////////////////////////  
/// LOGIN //////////////////////////////////
////////////////////////////////////////////

var url = new Firebase('https://mccaffertyblog.firebaseio.com');

$('#login_button').click(function(){
  var email = $('#user_email').val();
  var password = $('#user_password').val();
  url.authWithPassword({
    email    : email,
    password : password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      $('#login_wrapper').addClass("admin");
      $('#post_wrapper').addClass("admin");
    }
  });
}); // end click 


  
} //end window.onload

