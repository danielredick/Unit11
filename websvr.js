var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/html'});
   
   response.write('Hello World, my name is Daniel Redick\n');
}).listen(8001);

