exports.viewProject = function(req, res) { 
  // controller code goes here 
/*  var name = req.params.name;  */

  res.render('saturation', {
    'albums': [
    	{
            'album': 'Saturation III',
            'artist': 'BROCKHAMPTON',
    		'id': 'saturation',
    		'image': 'http://images.pigeonsandplanes.com/images/c_limit,f_auto,fl_lossy,q_auto,w_1030/xbexk1mqjahpn3hd4ihz/brockhampton-saturation-',
    		'list': ['01 BOOGIE',
    				'02 ZIPPER'	,
    				'03 JOHNNY',
    				'04 LIQUID',
    				'05 CINEMA 1',
    				'06 BLEACH',
    				'07 STUPID',
    				'08 BLEACH',
    				'09 ALASKA',
    				'10 HOTTIE',
    				'11 CINEMA 2',
    				'12 SISTER/NATION',
    				'13 RENTAL',
    				'14 STAINS',
    				'15 TEAM',]
    }


  
    ]  
  });
};