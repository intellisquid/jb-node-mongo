//Credit to these tutorials:
//https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/
//https://scotch.io/tutorials/use-expressjs-to-deliver-html-files
//
//From first: A promise is what is returned when the save to the database completes.
//This save will either finish successfully or it will fail. A promise provides
//two methods that will handle both of these scenarios.


var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path = require("path");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/module4-week1");

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});
var User = mongoose.model("User", nameSchema);


// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
