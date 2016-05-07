// Your api-routes.js file should include two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


var friendsData = require('../data/friends.js');
var path = require('path');

var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){
		friendsData.push(req.body);



		//loop through the friends data array of objects to get each friends scores
		for(var i = 0; i < friendsData.length-1; i++){
			//friends.score is equal to the friends score of the specific user you are on in the loop
			friends = friendsData[i];
			console.log(friends);

			loc = (friendsData.length-1)
			user = friendsData[loc];
			console.log(user);

			//loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
			for(var j = 0; j < 10; j++){

				console.log(user.scores[j] + "user");
				console.log(friends.scores[j] + "friend");

				absDifference = Math.abs((user.scores[j]) - (friends.scores[j]));
				console.log(absDifference + "difference");

				totalDifference += absDifference;
					console.log(totalDifference + "difference");
			}
			console.log(totalDifference);
			if(totalDifference < 5){
				data = friends[i];

			}
		}

		
	});
}