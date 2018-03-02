exports.viewProject = function(req, res) { 
  // controller code goes here 
/*  var name = req.params.name;  */

  res.render('currents', {
    'albums': [
    	{
            'album': 'Currents',
            'artist': 'Tame Impala',
    		'id': 'currents',
    		'image': 'https://images-na.ssl-images-amazon.com/images/I/A1LVEJikmZL._SL1500_.jpg',
    		'list': ['01 Let It Happen',
    				'02 Nangs',
    				'03 The Moment',
    				'04 Yes Im Changing',
    				'05 Eventually',
    				'06 Gossip',
                    '07 The Less I Know the Better',
                    '08 Past Life',
                    '09 Disciples'
                    ]

    	}
    ]  
  });
};
