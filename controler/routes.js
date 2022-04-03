// jshint esversion: 6
const routeModuel = require("./test");
const validatePassword = require("../middleware/fun");
const mid = require("../middleware/middleFunc");
const express = require("express");

const crudOp = require("../model/dbCrud");

// routes
let router = express.Router();
router
    .route("/")
    .get((req, res) => {
        // res.send("hello");
        res.render("../view/pages/log");
    })
    .post((req, res) => {

        const username = req.body.uname;
        const psw = req.body.psw;

        crudOp.dbFind(req.body) // database will return false or Oject
            .then((value) => {
                // look for incoming value
                // return a false for empty object due to nothing found

                const result = mid.checValue(value);
                // test for false value
                console.log("Boolean test: ", result);
                // false nothing retrun from mongo database
                if (result == false) {
                    // display error 
                    res.send(
                        `<h1>ERROR ---> nothing retrun from mongo database </h1> 
                        <a href='http://localhost:3000/'>link text</a> 
                        `
                    );

                } else {
                    let SecondResult = validatePassword.userPassword(req.body, value);
                    console.log("Boolean test: ", SecondResult);
                    if (SecondResult == true) {
                        console.log("access granted");
                        res.render("../view/pages/home");
                    } else {
                        res.send(
                            `<h1>password error </h1> 
                            <a href='http://localhost:3000/'>link text</a> 
                            `
                        );
                    }
                }

            })
            .catch((error) => routeModuel.test(`error`));



        // console.log(psw, username);

    });

router
    .route("/menu")
    .get((req, res) => {
        res.render("../view/pages/menu");
    });


router
    .route("/form")
    .get((req, res) => {
        res.render("../view/pages/form");
    });


router
    .route("/inventory")
    .get((req, res) => {
        res.render("../view/pages/inventory");
    });


router
    .route("/blog")
    .get((req, res) => {
        res.render("../view/pages/blog");
    });

router
    .route("/exit")
    .get((req, res) => {
        res.render("../view/pages/exit");
    });

router
    .route("/home")
    .get((req, res) => {
        res.render("../view/pages/home");
    });

module.exports = router;