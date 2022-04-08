// jshint esversion: 6
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const loggerCheck = require("./log");
const routing = require('./controler/routes');
const medWarefunc = require('./middleware/middleFunc');

app.use(express.static(__dirname + "/public"));
app.use("/", routing);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.set("views", "./view");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("../view/pages/log");
});

app.post("/", (req, res) => {
    loggerCheck.userpsw(req, res);
});

app.post("/post/:content", (req, res) => {
    let data = medWarefunc.postCapture(req, res);
    console.log(data);
});


//// global node varaibles 
app.locals.login = true;
app.locals.user = "Currently Log In";