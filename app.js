var express = require("express");
var app = express();
var port = 3000;
var path = require("path");


// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
