// jshint esversion: 6
const test = require("../test");

function postCapture(req, res) {
    // Data 
    const content = req.body; //object {title: string, content: string p element}
    console.clear();
    test.test("post capture input");
    test.objCheck(content);
    test.TypeCheck(content);




    //output to data
    return content; // object returned content
}


module.exports.postCapture = postCapture;