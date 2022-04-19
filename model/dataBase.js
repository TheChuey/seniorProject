// jshint esversion: 8
const dBTester = require('../test');
dBTester.test("Database Module -- line 2");
const mongoose = require('mongoose');
const shema = require("./schemaModel");
//mongoose.connect('mongodb+srv://jose:dogcat123!@cluster0.crb9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
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


// https://account.mongodb.com/account/login?signedOut=true
//dogcat123!
//mongodb+srv://jose:<dogcat123!>@cluster0.crb9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//'mongodb://localhost:27017/DBLogin'