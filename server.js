// jshint esversion: 6

const express = require("express");
const app = express();

const login = require("./controler/routes"); // change to middel ware
// remember to seperate the middle ware and routes !!!!! 



// redirect folder too dirname folder ->public
// /public is the folder where the loaded html pages CSS, IMG, JS files are located
app.use(express.static(__dirname + "/public"));

// port listening on 3000
app.listen(3000);


// set variables for templeting engine conversion to HTML
// view engine is the 
app.set("view engine", "ejs");


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({
    extended: true
}));


// testRoute("index.js");
app.use("/", login); // module name = login pull in by require function 

app.get("/home", (req, res) => {
    res.render("pages/home");
});

app.get("/Exit", (req, res) => {
    res.render("pages/exit");
});