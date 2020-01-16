var http = require('http');
var server = http.createServer(function(request, response) { 
	response.statusCode = 200; 
	response.setHeader('Content-Type', 'text/plain'); 
	response.end('Welcome to the Kings Cross Station Platform'); });
	server.listen(3000, function() { console.log('Server running on port 3000');
});
server.listen(31337, function() { 
	console.log('Server running on port 31337');
});
