var http = require('http');
var server = http.createServer(function(req, res){
	res.statusCode = 200;
	res.end('test');
});

var hostname = '127.0.0.1';
var port = '1587';

server.listen(port, hostname, function(){
	console.log('Server running ${hostname}:${port}');
});