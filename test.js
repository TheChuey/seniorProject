// jshint esversion: 6
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const ejs = require("ejs");
console.log(ejs);
app.use(express.static(__dirname + "/public"));

// port listening on 3000
app.listen(port, () => console.log(`Listening on port ${port}`));


var templateString = null;
var fs = require('fs');
var templateString = fs.readFileSync('./view/pages/home.ejs', 'utf-8');

console.log(templateString);
app.get("/", (req, res) => {
    res.send(ejs.render(templateString));
});