var accessToken = 'd14057649c304e0891fa6d897eb95a97';

$.ajax({
    url: 'https://api.instagram.com/v1/users/6740542/media/recent/?client_id=d14057649c304e0891fa6d897eb95a97&count=10',
    dataType: 'jsonp',
    type: 'GET',
    success: function(response){
        console.log(response);
			
        for(x in response.data){
			var innerHTML= '<div class="slides"><img src="'+response.data[x].images.low_resolution.url+'">';
             var date = new Date(parseInt(response.data[x].created_time) * 1000);
            if (response.data[x].caption === null) {
                        innerHTML += '<p class="dtext">' + date + '</p></div>';
                        console.log('if was called');
                    } else {
                        innerHTML += '<p class="dtext">' + date + '</p><p class="ptext">'+response.data[x].caption.text+'</p></div>';
                        console.log('else was called');
                    } //ifelse statement
            $('.carousel').append(innerHTML);

		} //forloop ends



        $('.carousel').slick({
            arrows:true,
            dots:true,
            infinite:true,
            slidesToShow:3,
            slidesToScroll:3,
            centerMode: true,
            variableWidth:true
        });


    }, //success function ends

    error: function(response){
        console.log(response);
    },
});



// +response.data[x].caption.text+
