// jshint esversion: 8

async function dbFind(search) {
    const userModel = require('./schemaModel');
    const dataTest = require('../controler/test');
    // returns using uname from database
    // this object has to be developed for different searches
    // 
    const name = await userModel.find({
        uname: search.uname
    });
    dataTest.test(`searching: ${search.uname}`);
    // console.log("value", Array.isArray(name));
    // console.log("value", typeof (name));
    let results = dataTest.objCheck(name);
    if (results) {
        return name;
    } else {
        return false;
    }


} // end of function

module.exports.dbFind = dbFind;