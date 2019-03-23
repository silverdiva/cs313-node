require('dotenv').config();

/*
const connectionString = process.env.DATABASE_URL || "postgres://kjsbvguboglxgs:6a3066bdf05cdb486f319d6772b489b2f0994938e76b0ff5f6297a96ba96865f@ec2-50-19-109-120.compute-1.amazonaws.com:5432/dfshisk0pfq53qssl=true";
*/

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});

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



app.listen(5000, function() {
	console.log("The server is up and listening on port 5000");
});



const { Client } = require('pg');
const client = new Client();

await client.connect();

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end();


const { Client } = require('pg');
const client = new Client()
;
client.connect();

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
});