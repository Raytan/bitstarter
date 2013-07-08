var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var inputfile = "index.html";
  var buffer = new Buffer (fs.readFileSync(inputfile), "utf-8");
  var str = buffer.toString();

  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
