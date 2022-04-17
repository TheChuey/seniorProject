// jshint esversion: 8
const mongoose = require('../dataBase');


const PostX = mongoose.posts; //// remmeber your reciving a promise 

async function del(search, res) {

    const look = {};
    look.title = search;

    // console.log("parameter for del function: ===>", search);

    const searchResults = await PostX.find(look);
    console.log("----------- array lengh:", searchResults.length, "title contents", search);

    const delTitle = {};
    delTitle.title = search;

    await PostX.deleteOne(delTitle)
        .then(results => console.log("deleted sucessfully", results))
        .catch(err => console.error(err));

    res.end();
    // if (searchResults.length == 0) {
    //     return console.log("empty");
    // } else {
    //     return false;
    // }


} // end of function

module.exports.del = del;