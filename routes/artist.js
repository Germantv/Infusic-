var artists = require('../artistDB.json');

exports.artistInfo = function(req, res) { 
  	res.json(artists);
}
