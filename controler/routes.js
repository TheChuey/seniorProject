// jshint esversion: 6
const express = require("express");

const medWarefunc = require("../middleware/middleFunc");

const test = require("../test");
const router = express.Router();

const data = {};

router.route("/").get((req, res) => {
    res.render("../view/pages/log");
});

router.route("/").post((req, res) => {
    res.render("../view/index");
});
///////////////////////////////////////////////////

router.route("/post").get((req, res) => {
    res.render("../view/post.ejs");
});

router.route("/postView").get((req, res) => {
    res.render("./view/postView");
});

///////////////////////////////////////////////////
router.route("/home").get((req, res) => {
    res.render("../view/pages/home");
});

///////////////////////////////////////////////////

router.route("/post/:content/:title").post((req, res) => {
    data.post = medWarefunc.postCapture(req, res);

    require("../model/CRUD/search")
        .returnAllPost()
        .then(results => {
            console.log(
                "results from database all records that inlcude title ---> ",
                results
            );
            let title = data.post.title;
            let content = data.post.content;
            res.render("../view/postView", {
                results: results,
                content: content,
                title: title
            });
        })
        .catch(Error);
});


///////////////////////--Save --////////////////////////////
router.route("/save").post((req, res) => {
    const content = req.body.content;
    const title = req.body.title;
    console.log("title of Post saved to database ==> ", req.body.title);
    console.log(
        "contents of the income request to be saved Object:",
        content,
        title
    );
    require("../model/CRUD/save").save(req.body);
    res.end();
});

//////////////////////--Delete --////////////////////////
router.route("/delete").post((req, res) => {
    const content = req.body.content;

    delteOne = require("../model/CRUD/delete").del(content, res);

    delteOne
        .then(results => {
            console.log(
                "promise results from deleteOne mongoose method ===>",
                results.deletedCount
            );
            res.json({
                status: "sucess",
                answear: true
            });
        })
        .catch(err => console.error(err));

});

//// room formor routes

module.exports = router;