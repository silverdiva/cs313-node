////const express = require('express');
//const path = require('path');
//const PORT = process.env.PORT || 5000

//express()
  //.use(express.static(path.join(__dirname, 'public')))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  //.listen(PORT, () => console.log(`Listening on ${ PORT }`));



var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	console.log("Received a request for /");
	res.render("home");
});

app.get("/pages", function(req, res) {
	// Controller
	console.log("Received a request for the home page");
		res.render("pages");
});

app.get("/math", function(req, res) {
	// Controller
	console.log("Received a request for the math page");
		res.render("math");
});


app.listen(5000, function() {
	console.log("The server is up and listening on port 5000");
});


function subtract(num1, num2)
{}

function divide(num1, num2)
{}

function multiply(num1, num2)
{}

function add(num1, num2)
{}