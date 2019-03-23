var express = require("express");

var app = express();

app.use(express.static("public"));

//set the 'views' directory names 'viewsTemplates' for the code to look for 'ejs' files 
//view-engine defined as 'ejs' for rendering web pages
app.set("views", "viewsTemplates");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	console.log("Recieved a request for /");
	
	res.write("This is the root");
	res.end();
});


//CONTROLLER Code goes below:

app.get("/home", function (req, res) {
	console.log("Recieved a request for the home page");
	var name = getCurrentLoggedInUserAccount();
		//this var is replaced by logic created by login and session
		//var name = "Kimberly";
	
	//before ejs view-engine"
		//renderHomePage(name); no longer needed as view engine = ejs has been defined
		//renderHomePage(name);
	
	//after ejs view-engine:
	//this is the proper way to code this now that we have defined the view engine = ejs
	//whenever 'home.ejs' is requested, the code looks for the ejs view-engine to render it
	//the ".ejs" is inferrred here and not necessary as part of the file name of "home"
	res.render("home");
	
});


app.listen(5000, function () {
	console.log("The server is up and listening on port 5000");
});



//VIEW Code goes below"


//before ejs view-engine:
//now that we are using res.render and the ejs view-engine, this code is obsolete
//function renderHomePage(name) {
	//res.write("<html><head><title>Home</title></head>");
	//res.write("<body>")
	//res.write("<h1>This is the home page</h1>");
	//res.write("<h2>Welcome " + name + "</h2>");
	//res.write("</body></html>");
	//res.end();
//}

//MODEL Code goes below:

function getCurrentLoggedInUserAccount() {
	//access to the db
	//confirm they have proper credentials
	return "Kimberly";
}
