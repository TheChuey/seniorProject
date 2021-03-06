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
    console.log(check);
    const userPsw = dbfind.dbfineUserName();
    userPsw.then(results => {
        console.log(data.credentials, results, results[0]);
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
    res.render("../view/PostView", {
        title: data.post.title,
        content: data.post.content,

    });
    // require("../model/CRUD/search")
    //     .returnAllPost()
    //     .then(results => {
    //         console.log(
    //             "results from database all records that inlcude title ---> ",
    //             results
    //         );
    //         let title = data.post.title;
    //         let content = data.post.content;
    //         res.render("../view/postView", {
    //             results: results,
    //             content: content,
    //             title: title
    //         });
    //     })
    //     .catch(Error);
});
///////////////// API Form  /////////////////////////////////

router.route("/api").get((req, res) => {
    res.render("../view/api", {
        name: "API",
        load: false // sent to fron end web page api.ejs
    });
});

const api = require("../middleware/API");

router.route("/api/response").post((req, res) => {
    console.log("state of data", data.foodSearch);
    api.sendApiRequest(data.foodSearch).then(results => {
        const contentsOfRecipeSearch = [];
        const label = [];
        const ingredients = [];
        const image = [];

        data.label = label;
        data.ingredients = ingredients;
        data.image = image;

        for (let i = 0; i < results.hits.length; i++) {
            contentsOfRecipeSearch.push(results.hits[i]); // hits contains all returned recipes
        }

        contentsOfRecipeSearch.forEach(recipe => {
            for (let key in recipe) {
                label.push(recipe[key].label);
                ingredients.push(recipe[key].ingredientLines);
                image.push(recipe[key].image);
            }
        });

        //// sent to Client via JSON ---
        res.json({
            status: "sucess",
            data: "test",
            load: true,
            label: label,
            ingredients: ingredients,
            image: image
        });
    });
});

router.route("/api/:Hamburger/:Pizza/:HotDogs").post((req, res) => {
    const content = req.body;
    const state = true;
    let temp = Object.keys(content);
    data.foodSearch = 0;
    data.foodSearch = temp;
    console.log(content);
    res.render("../view/api", {
        name: "API",
        load: true
    });
});

router.route("/menu/:item").post((req, res) => {
    console.log("menu function");
    const content1 = req.body;
    console.log("menu fetch:", data.label);
    if (data.label === undefined) {
        data.label = 0;
    }
    let indexNumber = data.label.indexOf(content1.item);
    console.log(indexNumber, "recepe -->", data.ingredients[indexNumber]);


    res.render("../view/apiResult", {
        name: "recepe results",
        recipe: data.ingredients[indexNumber],
        image: data.image[indexNumber]
    });
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
    require("../model/CRUD/save")
        .save(req.body);
    res.end();
});

router.route("/data").get((req, res) => {
    console.log("endpoint data");
    require("../model/CRUD/search")
        .returnAllPost()
        .then(results => {
            console.log(
                "results from database all records that inlcude title ---> ",
                results
            );
            let title = data.post.title;
            let content = data.post.content;
            res.render("../view/PostData", {
                results: results,
                content: content,
                title: title
            });
        })
        .catch(Error);


});


//////////////////////--Delete --////////////////////////
router.route("/delete").post((req, res) => {
    const delContent = req.body.content;

    delteOne = require("../model/CRUD/delete").del(delContent, res);

    delteOne
        .then(results => {
            console.log(
                "delteOne function return promise, contents are: ===>",
                results.deletedCount,
                "title",
                delContent
            );
            res.json({
                status: "sucess",
                delName: delContent,
                delCount: results.deletedCount,
                answear: true
            });
        })
        .catch(err => console.error(err));
});

//// room formor routes

module.exports = router;