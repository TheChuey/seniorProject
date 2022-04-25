// jshint esversion: 6
const express = require("express");

<<<<<<< Updated upstream
let router = express.Router();
=======
const medWarefunc = require("../middleware/middleFuncOne");
>>>>>>> Stashed changes

router
    .route("/")
    .get((req, res) => {
        res.render("../view/pages/log");
    });

router
    .route("/post")
    .get((req, res) => {
        res.render("../view/pages/post");
    });

router
    .route("/home")
    .get((req, res) => {
        res.render("../view/pages/home");
    });

router
    .route("/menu")
    .get((req, res) => {
        res.render("../view/pages/menu");
    });

router
    .route("/exit")
    .get((req, res) => {
        res.send("thank you for visitng");
    });

router
    .route("/receipy")
    .get((req, res) => {
        res.render("../view/pages/receipy");
    });

//// room formor routes

module.exports = router;