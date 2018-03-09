
/*
 * GET sendRequest page.
 */

exports.viewProject = function(req, res){
  //controller code goes here
  res.render('sendRequest', { 
  	'artistDB': [

	  	{
	    	"artist_name":"Kid Cudi",
	    	"artist_album":"Man on The Moon II",
	    	"artist_age":"26",
	    	"profile_image":"/images/mrRager.jpg",
	    	"id": "artist1"
	    },
		{
			"artist_name":"Kaytranada",
			"artist_album":"99.9%",
			"artist_age":"24",
			"profile_image":"/images/freud.jpeg",
			"id": "artist2"
		},
	    {
	    	"artist_name":"Kanye West",
	    	"artist_album":"The College Dropout",
	    	"artist_age":"66",
	    	"profile_image":"/images/dropoutYe.jpg",
	    	"id": "artist3"
	    },
	    {	
	    	"artist_name":"Travis Scott",
	    	"artist_album":"Days Before Rodeo",
	    	"artist_age":"22",
	    	"profile_image":"/images/b4rodeo.jpg",
	    	"id": "artist4"
	    },
	    {
	    	"artist_name":"Tyler the Creator",
	    	"artist_album":"Flower Boy",
	    	"artist_age":"33",
	    	"profile_image":"/images/flowerBoy.jpeg",
	    	"id": "artist5"
	    },
	    {
	    	"artist_name":"Frank Ocean",
	    	"artist_album":"Channel Orange",
	    	"artist_age":"25",
	    	"profile_image":"/images/orange.jpg",
	    	"id": "artist6"
	    },
	    {
	    	"artist_name":"Rae Sremmurd",
	    	"artist_album":"SremmLife 2",
	    	"artist_age":"26",
	    	"profile_image":"/images/srem.jpg",
	    	"id": "artist7"
	    },
	    {
	    	"artist_name":"Chance The Rapper",
	    	"artist_album":"Acid Rap",
	    	"artist_age":"25",
	    	"profile_image":"/images/acidRap.jpg",
	    	"id": "artist8"
	    },
	    {
	    	"artist_name":"Rae Sremmurd",
	    	"artist_album":"SremmLife",
	    	"artist_age":"39",
	    	"profile_image":"/images/sremm.jpg",
	    	"id": "artist9"
	    },
	    {
	    	"artist_name":"Pink Floyd",
	    	"artist_album":"The Dark Side of The Moon",
	    	"artist_age":"23",
	    	"profile_image":"/images/pinkFloyd.jpeg",
	    	"id": "artist10"
	    },
	    {	
	    	"artist_name":"King Krule",
	    	"artist_album":"The OOZ",
	    	"artist_age":"59",
	    	"profile_image":"/images/ooz.jpg",
	    	"id": "artist11"
	    },
	    {
	    	"artist_name":"Rex Orange County",
	    	"artist_album":"Apricot Princess",
	    	"artist_age":"55",
	    	"profile_image":"/images/rex.png",
	    	"id": "artist12"
	    },
	    {
	    	"artist_name":"Jaden Smith",
	    	"artist_album":"Syre",
	    	"artist_age":"39",
	    	"profile_image":"/images/syre.jpg",
	    	"id": "artist13"
	    },
	    {
	    	"artist_name":"Tyler the Creator",
	    	"artist_album":"Wolf",
	    	"artist_age":"23",
	    	"profile_image":"/images/tyler.jpg",
	    	"id": "artist14"
	    },
	    {
	    	"artist_name":"Kanye West",
	    	"artist_album":"Graduation",
	    	"artist_age":"38",
	    	"profile_image":"/images/YeGrad.jpg",
	    	"id": "artist15"
	    },
	    {
	    	"artist_name":"SchoolBoy Q",
	    	"artist_album":"Oxymoron",
	    	"artist_age":"32",
	    	"profile_image":"/images/oxymoron.jpg",
	    	"id": "artist16"
	    },
	    {	
	    	"artist_name":"Kehlani",
	    	"artist_album":"SweetSexySavage",
	    	"artist_age":"24",
	    	"profile_image":"/images/kehlani.jpg",
	    	"id": "artist17"
	    },
	    {
	    	"artist_name":"Kendrick Lamar",
	    	"artist_album":"good kid, m.A.A.d city",
	    	"artist_age":"25",
	    	"profile_image":"/images/kdot.jpg",
	    	"id": "artist18"
	    },
	    {
	    	"artist_name":"JAY Z",
	    	"artist_album":"The BluePrint",
	    	"artist_age":"59",
	    	"profile_image":"/images/jayZ.jpg",
	    	"id": "artist19"
	    },
	    {
	    	"artist_name":"Daniel Caesar",
	    	"artist_album":"Freudian",
	    	"artist_age":"26",
	    	"profile_image":"/images/freud.jpeg",
	    	"id": "artist20"
	    },
	    {
	    	"artist_name":"Drake",
	    	"artist_album":"More Life",
	    	"artist_age":"33",
	    	"profile_image":"/images/moreLife.jpg",
	    	"id": "artist21"
	    },
	    {	
	    	"artist_name":"Jay Rock",
	    	"artist_album":"90059",
	    	"artist_age":"23",
	    	"profile_image":"/images/jayRock.jpg",
	    	"id": "artist22"
	    },
	    {
	    	"artist_name":"Kendrick Lamar",
	    	"artist_album":"Black Panther",
	    	"artist_age":"25",
	    	"profile_image":"/images/blackPanther.jpg",
	    	"id": "artist23"
	    },
	    {
	    	"artist_name":"JAY Z",
	    	"artist_album":"4:44",
	    	"artist_age":"42",
	    	"profile_image":"/images/444.png",
	    	"id": "artist24"
	    }
  	]
  });
};