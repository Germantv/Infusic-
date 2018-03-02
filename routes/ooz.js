exports.viewProject = function(req, res) { 
  // controller code goes here 
/*  var name = req.params.name;  */

  res.render('ooz', {
    'albums': [
    	{
            'album': 'The OOZ',
            'artist': 'King Krule',
    		'id': 'ooz',
    		'image': 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/f7/e0/24/f7e024fd-25df-eb5d-2308-3be91aaab3c3/cover.jpg/600x600bf.jpg',
    		'list': ['01 Biscuit Town',
    				'02 The Locomotive',
    				'03 Dum Surfer',
    				'04 Slush Puppy',
    				'05 Bermondsey Bosom (Left)',
    				'06 Logos',
    				'07 Sublunary',
    				'08 Lonely Blue',
    				'09 Cadet Limbo',
    				'10 Emergency Blimp',
    				'11 Czech One',
    				'12 A Slide In',
    				'13 Vidual',
    				'14 Bermondsey Bosom (Right)']

    	}
    ]  
  });
};
