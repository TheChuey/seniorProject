// jshint esversion: 6
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routing = require('./controler/routes');



app.use(express.static(__dirname + "/public"));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, () => console.log(`Listening on port ${port}`));


app.set("views", "./view");
app.set("view engine", "ejs");

app.use("/", routing);



app.locals.login = true;
app.locals.user = "Currently Log In";
app.locals.post = "test my post";