// jshint esversion: 6
const mongoose = require('./dataBase');

const userPasword = {
    uname: String,
    psw: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    authorized: Boolean
};


let postbyUser = {
    title: String,
    content: String,
    uname: String,
    date: {
        type: Date,
        default: Date.now
    },
    authorized: Boolean

};

let recipy = {
    item: Number,
    Name: String,
    Quantity: Number,
    Weight: [Number, Number],
    Date: Date
};




module.exports = {
    userPasword: userPasword,
    postbyUser: postbyUser,
    recipy: recipy
};