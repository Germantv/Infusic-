exports.viewProject = function(req, res) { 
  // controller code goes here 
/*  var name = req.params.name;  */

  res.render('steve', {
    'albums': [
    	{
    		'id': 'steve',
    		'image': 'https://media.pitchfork.com/photos/5929c1edeb335119a49ed62f/1:1/w_320/34ea7d70.jpg',
    		'list': ['01 Looks',
    				'02 Ryd',
    				'03 Dark Red',
    				'04 Thangs',
    				'05 Haterloving',
    				'06 Some'
                    ]

    	}
    ]  
  });
};
