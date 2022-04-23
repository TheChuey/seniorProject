// jshint esversion: 6
const express = require("express");

const medWarefunc = require("../middleware/middleFunc");

const test = require("../test");
const router = express.Router();

const data = {};

router.route("/").get((req, res) => {
    res.render("../view/pages/log"); //../view/pages/log
});

//////////////////Login Form Data.credentials /////////////////////////////////
router.route("/log/:uname/:psw").post((req, res) => {
    data.credentials = req.body;
    const dbfind = require("../model/CRUD/search");
    const check = require("../middleware/fun");
    const userPsw = dbfind.dbfineUserName();
    userPsw.then(results => {
        let condition = check.userPassword(data.credentials, results[0]);
        if (condition) {
            res.render("../view/pages/home", {
                citename: "Home"
            });
        } else {
            res.render("../view/pages/mesage");
        }
    });

});

router.route("/").post((req, res) => {
    res.render("../view/pages/home");

});

///////////////////post in navbar router////////////////////////////////
router.route("/post").get((req, res) => {
    res.render("../view/post.ejs", {
        citename: "Post"
    });
});


/////////////////// home in navbar router////////////////////////////////
router.route("/home").get((req, res) => {
    console.log("home cite");
    res.render("../view/pages/home", {
        citename: "Home"
    });
});

router.route("/exit").get((req, res) => {
    console.log("exit");
    res.render("../view/pages/exit", {
        citename: "exit"
    });
});

//////////////////Post Form Data.post /////////////////////////////////
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
                title: title,
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
    const delContent = req.body.content;

    delteOne = require("../model/CRUD/delete").del(delContent, res);

    delteOne
        .then(results => {
            console.log(
                "delteOne function return promise, contents are: ===>",
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