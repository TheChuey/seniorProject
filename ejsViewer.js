// jshint esversion: 6
const express = require("express");
const app = express();
const ejs = require("ejs");
console.log(ejs);
app.use(express.static(__dirname + "/public"));

// port listening on 3000
app.listen(port, () => console.log(`Listening on port ${port}`));


// var templateString = null;
const fs = require('fs');
const home = fs.readFileSync('./view/pages/home.ejs', 'utf-8');
const post = fs.readFileSync('./view/pages/post.ejs', 'utf-8');
const postview = fs.readFileSync('./view/pages/postView.ejs', 'utf-8');
const exit = fs.readFileSync('./view/pages/exit.ejs', 'utf-8');
const form = fs.readFileSync('./view/pages/form.ejs', 'utf-8');

const pages = [home, post, postView, exit, form];

console.log(home);
app.get("/home", (req, res) => {
    res.send(ejs.render(pages.home));
});