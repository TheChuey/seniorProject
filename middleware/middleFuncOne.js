// jshint esversion: 6
const data = [];

function postCapture(req, res) {
    // Data Input
    const content = req.body;
    console.log("test incoming post data params-----", content);
    let url = req.url;
    console.log("test incoming url", url);
    console.log("tpye object", typeof content);
    console.log("data type is an array", Array.isArray(content));
    //data.push(req.body);

<<<<<<< Updated upstream:middleware/middleFunc.js
    // Data process

    ////-- responce //////////////////////////////////////////////////////
    console.log("responce to endpoint request", content);
    //let data = content;
    res.render("../view/pages/postView", {
        data: content.content
    });

    // Data output

    console.log("data array is -->", data);

    return data;
=======
    //output to data
    return content; // object returned content
>>>>>>> Stashed changes:middleware/middleFuncOne.js
}


module.exports.postCapture = postCapture;
console.log("end of middle func");