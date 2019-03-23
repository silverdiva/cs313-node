var express = require("express");

var app = express();

//option 1: use an undefined 'anonymous callback' function that uses console.log(xxx) OR define it like below 
//app.get("/", function() {
//console.log("Recieved a request for /");
//});

//option 2b call the function explicitly
//app.get("/", handleRootRequest);

//option 2a: you can define the fuction and use console.log(xxx) as like above, then call the function [option 2b]
//function handleRootRequest() {
//console.log("Recieved a request for /");
//}

//option 3b call the function anonymously, but include 'req' and 'res' which is request & response
app.get("/", function (req, res) {
	console.log("Recieved a request for /");
});

//option 3a: defined function using console.log(xxx) as like above, which is called in 3b, but ALSO includes 'req' & 'res'
function handleRootRequest(req, res) {
	console.log("Recieved a request for /");
}


app.get("/home", function () {
	console.log("Recieved a request for the home page");
});

app.listen(5000, function () {
	console.log("The server is up and listening on port 5000");
});
