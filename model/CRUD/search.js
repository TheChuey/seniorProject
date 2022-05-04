// jshint esversion: 8


async function returnAllPost() {
    //const test = require("../test.js");
    const mongoose = require('../dataBase');
    const userModel = mongoose.posts;
    const allPost = await userModel.find({}); // search all reutrn back 
    console.log("return from database:", allPost);
    return allPost;
} // end of function

function search(res) {
    // deFind returns all objects for posts 
    returnAllPost().then(function (results) {
        console.log("------- return from database:", results);
        return results;
    });
}


async function dbfineUserName() {
    const mongoose = require('../dataBase');
    const user = mongoose.credentials;
    const userPsw = await user.find({
        uname: "Jose",
        psw: "josh"
    }); // search all reutrn back 
    console.log("return from database:", userPsw);
    return userPsw;
}

function scan() {
    dbfineUserName()
        .then(response => {
            console.log(response.uname, "obj--===========>", response);
            return response;
        });
}


module.exports = {
    search: search,
    returnAllPost: returnAllPost,
    dbfineUserName: dbfineUserName,
    scan: scan
};