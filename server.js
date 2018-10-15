// Dependencies
// =============================================================
var express = require("express"),
    app = express();
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================

var PORT = process.env || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
