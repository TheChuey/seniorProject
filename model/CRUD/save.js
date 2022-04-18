// jshint esversion: 8
const mongoose = require('../dataBase');
const PostX = mongoose.posts; // remmeber your reciving a promise 

async function save(value, res) {
    // value is 
    console.log("values being saved to db---->", value.title, value.content);
    const postOne = new PostX({
        title: value.title,
        content: value.content
    });
    console.log("check...", value);
    // save to database 

    await postOne
        .save()
        .then((result) => console.log('sucess save to db -->', result));
    //res.responce("Sucess fully Saved to data face.");

}


module.exports.save = save;