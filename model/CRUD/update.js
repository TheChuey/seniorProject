// jshint esversion: 8
const mongoose = require('../dataBase');
const shema = require("../schemaModel");

//Each model has its own update method for modifying documents in the database without returning them to your application. See the API docs for more detail.

Tank.updateOne({
    size: 'large'
}, {
    name: 'T-90'
}, function (err, res) {
    // Updated at most one doc, `res.nModified` contains the number
    // of docs that MongoDB updated
});