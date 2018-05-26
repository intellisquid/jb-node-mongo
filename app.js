var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(req, res) {
res.sendFile("/index.html", {"root": __dirname});
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
