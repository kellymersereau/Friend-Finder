// Your html-routes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

var path = require('path');

module.exports = function(app){
	//directs user to survey route
	app.get('/survey', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//if no matching route, default to home
	app.use(function(req,res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});


}