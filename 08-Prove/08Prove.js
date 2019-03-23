var http = require('http');
var url  = require('url');
var fs   = require('fs');

var neededstats = [];

http.createServer(function(req, res) {
    if (req.url == '/index.html' || req.url == '/') {
        fs.readFile('./index.html', function(err, data) {
            res.end(data);
        });
    } else {
        var p = __dirname + '/' + req.params.filepath;
        fs.stat(p, function(err, stats) {
            if (err) {
                throw err;
            }
            neededstats.push(stats.mtime);
            neededstats.push(stats.size);
            res.send(neededstats);
        });
    }
}).listen(8080, '0.0.0.0');
console.log('LocalHost Server is running on Port 8080.');
