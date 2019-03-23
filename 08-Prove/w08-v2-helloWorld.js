 var http = require('http');
 var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "application/json"});
 	response.writeHead(404, {"Content-Type": "text/html"});
	 
 	response.writeHead("<h1>Hello, Kimberly! This is your Week 8 Prove Page.</h1>");
	 
 	response.end();
 });

 server.listen(8080);
 console.log("Server running on port 8080");
