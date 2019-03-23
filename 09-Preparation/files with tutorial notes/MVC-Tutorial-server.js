var express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
	console.log("Recieved a request for /");
	
	res.write("This is the root");
	res.end();
});


//Controller Layer/Code: 	
	//*** "Handles requests from the User via the request 'req' object i.e. via a form submissions or similar in the View Layer" ***//
	//the controller gets required info such as query parameters 
	//manipulates that information, then sends it to the Model Layer
	//and then sends it to the View layer to be rendered to the user graphically (i.e. renderHomePage(name))

app.get("/home", function (req, res) {
	console.log("Recieved a request for the home page");
	var name = getCurrentLoggedInUserAccount();
		//this var is replaced by logic created by login and session
		//var name = "Kimberly";
	
	renderHomePage(name);
});


app.listen(5000, function () {
	console.log("The server is up and listening on port 5000");
});



//view-related functions and code are below
//this includes hmtl
function renderHomePage(name) {
	res.write("<html><head><title>Home</title></head>");
	res.write("<body>")
	res.write("<h1>This is the home page</h1>");
	res.write("<h2>Welcome " + name + "</h2>");
	res.write("</body></html>");
	res.end();
	
}

//Model Layer/Code:
	//***"Any of the data and the associated rules around using/accessing data." ***//
	//such as Update, Insert, Retrieve
	//the Model Layer does not deal with or care about what is submitted in a View Layer form
	//the Model Layers "handles the business action(s) that need to occur, and/or to interact with the database
	//changes in the model layers do not necessarily affect code in the Controller and View layers


//model-related functions and code are below
function getCurrentLoggedInUserAccount() {
	//access to the db
	//confirm they have proper credentials
	return "Kimberly";
}
