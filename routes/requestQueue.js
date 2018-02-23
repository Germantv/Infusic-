
/*
 * GET requestQueue page.
 */

exports.viewProject = function(req, res){
  //controller code goes here
  res.render("requestQueue", {
  	"songNames": [
  		{
  			"song": "One Dance (feat. Wizkid & Kyla)",
  			"artist": "Drake",
  			"id": "song1"
  		},
  		{
  			"song": "Antidote",
  			"artist": "Travi$ Scott",
  			"id": "song2"
  		},
  		{
  			"song": "Get Lucky (feat. Pharrell Williams)",
  			"artist": "Daft Punk",
  			"id": "song3"
  		},
  		{
  			"song": "Hard in da Paint (prod. by Lex Luger)",
  			"artist": "Waka Flocka Flame",
  			"id": "song4",
  		},
  		{
  			"song": "Danny Glover",
  			"artist": "Young Thug",
  			"id": "song5"
  		},
  		{
  			"song": "Feeling Myself (feat. Beyonce)",
  			"artist": "Nicki Minaj",
  			"id": "song6"
  		},
  		{
  			"song": "Stay Fly",
  			"artist": "Three 6 Mafia",
  			"id": "song7"
  		},
  		{
  			"song": "Chamber of Reflection",
  			"artist": "Mac DeMarco",
  			"id": "song8"
  		},
  		{
  			"song": "My Love (feat. T.I. & Timbaland)",
  			"artist": "Justin Timberlake",
  			"id": "song9"
  		},
  		{
  			"song": "CHERRY BOMB",
  			"artist": "Tyler, the Creator",
  			"id": "song10"
  		},
  		{
  			"song": "Guillotine",
  			"artist": "Death Grips",
  			"id": "song11"
  		},
  		{
  			"song": "Int'l Players Anthem (I Choose You) [feat. Outkast]",
  			"artist": "UGK",
  			"id": "song12"
  		},
  		{
  			"song": "What's Up",
  			"artist": "Post Malone",
  			"id": "song13"
  		},
  		{
  			"song": "Sober",
  			"artist": "Childish Gambino",
  			"id": "song14"
  		},
  		{
  			"song": "Kyoto",
  			"artist": "Yung Lean",
  			"id": "song15"
  		},
  		{
  			"song": "Walk in the Park",
  			"artist": "Beach House",
  			"id": "song16"
  		},
  		{
  			"song": "Tbh",
  			"artist": "PARTYNEXTDOOR",
  			"id": "song17"
  		},
  	]
  });
};

/*  var getSong = document.getElementById(song);
  var getArtist = document.getElementById(artist);

  getSong.style.display = "none";
  getArtist.style.display = "none";
}

/*function startQueue() {
	setTimeout(function() {
		for each (res.songNames.song in res.songNames) {
			console.log(res.songNames[x].song);

		}
	}, 3000);
}*/