var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('HI THIS IS CHAITANYA SHARMA Appinventiv 1234'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 80 , mention your port specific

