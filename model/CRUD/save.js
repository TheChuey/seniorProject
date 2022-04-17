// jshint esversion: 8
const mongoose = require('../dataBase');
const PostX = mongoose.posts; // remmeber your reciving a promise 

async function save(value, res) {
    // value is 
    console.log(value.title, value.content);
    const postOne = new PostX({
        title: value.title,
        content: value.content
    });
    console.log("check...", postOne.title, postOne.content);
    // save to database 

    await postOne
        .save()
        .then((result) => console.log('sucess save to db -->', result));
    //res.responce("Sucess fully Saved to data face.");
    res.end();
}


module.exports.save = save;