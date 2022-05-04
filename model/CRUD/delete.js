// jshint esversion: 8
const mongoose = require('../dataBase');


const PostX = mongoose.posts; //// remmeber your reciving a promise 

async function del(search, res) {
    // the look object takes in one search parameter 
    const look = {};
    look.title = search;

    // console.log("parameter for del function: ===>", search);

    const searchResults = await PostX.find(look);
    console.log(`find returns Array of Lenght --->:" \n`, searchResults.length, "\n",
        `parameter of delete function contents ---> `, search);

    const delTitle = {};
    delTitle.title = search;

    const delete1 = await PostX.deleteOne(delTitle);
    return delete1;

} // end of function

module.exports.del = del;