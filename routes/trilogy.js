exports.viewProject = function(req, res) { 
  // controller code goes here 
/*  var name = req.params.name;  */

  res.render('trilogy', {
    'albums': [
    {
            'id': 'trilogy',
            'image': 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6979/6979156_sa.jpg',
            'list': ['01 High For This',
                    '02 What You Need',
                    '03 House of Balloons',
                    '04 The Morning',
                    '05 Wicked Games',
                    '06 The PArty & Afterparty',
                    '07 Coming Down',
                    '08 Loft Music',
                    '09 The Knowing',
                    '10 Twenty Eight',
                    '11 Lonely Star',
                    '12 Life of the Party',
                    '13 Thursday',
                    '14 The Zone',
                    '15 The Birds, Pt. 1',
                    '16 The Birds, Pt. 2']
    }
    ]  
  });
};