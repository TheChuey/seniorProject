// jshint esversion: 6
const express = require("express");

const medWarefunc = require('../middleware/middleFunc');

const test = require("../test");
const router = express.Router();

const data = {};

router
    .route("/")
    .get((req, res) => {
        res.render("../view/pages/log");
    });

router
    .route("/")
    .post((req, res) => {
        res.render("../view/index");
    });
///////////////////////////////////////////////////

router
    .route("/post")
    .get((req, res) => {
        res.render("../view/post.ejs");
    });

router
    .route("/postView")
    .get((req, res) => {
        res.render("./view/postView");
    });

///////////////////////////////////////////////////
router
    .route("/home")
    .get((req, res) => {
        res.render("../view/pages/home");
    });

///////////////////////////////////////////////////

router
    .route("/post/:content/:title")
    .post((req, res) => {
        data.post = medWarefunc.postCapture(req, res);

        require("../model/CRUD/search")
            .returnAllPost()
            .then((results) => {
                console.log("incoming data from post/:content ---> ", data.post);
                let title = data.post.title;
                let content = data.post.content;
                res.render("../view/postView", {
                    results: results,
                    content: content,
                    title: title
                });
            }).catch(Error);
    });


// router
//     .route("/viewAllpost")
//     .get((req, res) => {

//     });



///////////////////////////////////////////////////
router
    .route("/save")
    .post((req, res) => {
        const a = req.body;
        console.log("save body:", a);
        require("../model/CRUD/save").save(data.post, res);
        //res.end()
    });


router
    .route("/delete")
    .post((req, res) => {

        const content = req.body.content;
        console.log("delte contents:", content);
        require("../model/CRUD/delete").del(content, res);



    });

//// room formor routes

module.exports = router;