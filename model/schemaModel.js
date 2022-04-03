const mongoose = require('./dataBase');
const user = require('./Schema');

const Credential = mongoose.model('Credential', user.shematicOne);

module.exports = Credential;