// // Dependencies
// // =============================================================
// const express = require("express"),
//     app = express();
// const bodyParser = require("body-parser");
// const path = require("path");

// // Sets up the Express App
// // =============================================================

// const PORT = process.env || 3000;


// // Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // ================================================================================
// // ROUTER
// // The below points our server to a series of "route" files.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// // ================================================================================

// // require("./routing/apiRoutes")(app);
// require("./routes/htmlRoutes.js")(app);

// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./app/routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

// var http = require("http");
// var fs = require("fs");

// // Set our port to 8080
// var PORT = 8080;

// // Create our server
// var server = http.createServer(handleRequest);

// // Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {

//   // Here we use the fs package to read our index.html file
//   fs.readFile(__dirname + "/public/index.html", function(err, data) {

//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

// // Starts our server
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });
