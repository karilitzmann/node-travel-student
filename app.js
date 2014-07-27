var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	

	console.log("Travel application is running!");

	var myName = "Kari Litzmann";
	app.get("/", function (req, resp) {
		resp.write("<html><body><h1>Welcome to "+myName+"'s first web app!</body></html>");
		resp.end();
	});

})