'use strict';

// Call this function when the page loads (the "ready" event)
  $(document).ready(function(){

    $.getJSON("/artists", function(data) {
      console.log(data); // this will show the info it in firebug console

      $('#txt-search').keyup(function(){

          var searchField = $(this).val();
    			if(searchField === '')  {
    				$('#filter-records').html('');
    				return;
    			}
    			
          var regex = new RegExp(searchField, "i");
          var output = '<div class="row">';
          var count = 1;
    			$.each(data, function(key, val){
    				
    				if ((val.artist_album.search(regex) != -1) || (val.artist_name.search(regex) != -1)) {
    				  output += '<div class="col-xs-6 well"> <button onclick="myFunction()">';
    				  output += '<div class="col-xs-6"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.artist_name +'" /></div>';
    				  output += '<div class="col-xs-7">';
    				  output += '<h6>' + val.artist_name + '</h6>';
    				  output += '<p>' + val.artist_album + '</p>'
    				  output += '</button></div>';
    				  output += '</div>';

    				  if(count%2 == 0){
    					output += '</div><div class="row">'
    				  }
    				  count++;
    				}
    			});

    			output += '</div>';
    			$('#filter-records').html(output);
      });
    });
  });