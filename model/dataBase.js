// jshint esversion: 8
const dBTester = require('../test');
dBTester.test("Database Module -- line 2");
const mongoose = require('mongoose');
const shema = require("./schemaModel");
mongoose.connect('mongodb://localhost:27017/DBLogin')
    .then(() => dBTester.test("Connect db..."))
    .catch(err => dBTester.test('Could not connect to MongoDB..', err));

const posts = mongoose.model('posts', shema.postbyUser);
const credentials = mongoose.model('credentials', shema.userPasword);
const receipes = mongoose.model('receipes', shema.recipy);


module.exports = {
    posts: posts,
    credentials: credentials,
    receipes: receipes
};



// async function dbFind() {


//     // returns using uname from database
//     // this object has to be developed for different searches
//     // 
//     const x = await posts.find({});
//     return x;

// } // end of function

// let x = dbFind();
// x.then(function (doc) {
//     console.log(doc);
//     // use doc
// });