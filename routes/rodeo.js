exports.viewProject = function(req, res) { 
  // controller code goes here 
/*  var name = req.params.name;  */

  res.render('rodeo', {
    'albums': [
    	{
    		'id': 'rodeo',
    		'image': 'https://is4-ssl.mzstatic.com/image/thumb/Music2/v4/f2/7a/e6/f27ae67f-f3dc-a4c7-a6df-92e9b8b8587d/886445423822.jpg/1200x630bb.jpg',
    		'list': ['01 Oh My Dis Side',
    				'02 3500',
    				'03 Wasted',
    				'04 90210',
    				'05 Pray 4 Love',
    				'06 Nightcrawler',
                    '07 Antidote',
                    '08 Impossible',
                    '09 Maria Im Drunk',
                    '10 Flying High'
                    ]

    	}
    ]  
  });
};
