//GET route to /survey that displays survey page 
//defaulet | catch-all route that leads to home.html ( homepage )

//Dependencies

const path = require('path')



module.exports = function (app) {
console.log(`nello`)
    //HTML route leading to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //HTML route that leads to survey page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    


};
// var path = require("path");

// module.exports = function (app) {

//     app.get("/survey", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/survey.html"));
//     });

//     app.get('*', function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/home.html"));
//     });
// };