var http = require('http');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var handleError = (err, res) => {
  res.writeHead(404);
  res.end();
}

var server = http.createServer(function(req, res) {
  var fileName = req.url.length > 1 ? req.url.substring(1) : 'index.html';
  fs.readFile(
    path.resolve(__dirname, 'app', fileName),
    function(err, content) {
      if(err) {
        handleError(err, res);
      } else {
        res.end(content);
      }
    }
  );
})

server.listen(3001);
console.log('Server listening at port 3001');
