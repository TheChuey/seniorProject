// jshint esversion: 8

async function returnAllPost() {
    //const test = require("../test.js");
    const mongoose = require('../dataBase');
    const userModel = mongoose.posts;
    const allPost = await userModel.find({}); // search all reutrn back 
    return allPost;
} // end of function

function search(res) {
    // deFind returns all objects for posts 
    returnAllPost().then(function (results) {
        console.log("------- return from database:", results);
        return results;
    });
}

module.exports.search = search;
module.exports.returnAllPost = returnAllPost;