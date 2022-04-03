// jshint esversion: 8
console.log("test module: ");
let i = 1;
/// ----routes
function test(point) {

    // console.log(module);
    console.log(`/ test ${i}`, point, `\n`);
    return i++;

};

function isAnobj(point, value) {

    pass = "pass";
    fail = "fail";

    if (value === undefined) {
        console.log(point, `/ test ${i} `, fail, `\n`);
        return i++;
    } else {
        console.log(point, `/ test ${i}  `, pass, `\n`);
        return i++;
    }
};

function objCheck(value) {
    if (value.length === 0) {
        console.log(`Array-- Contains No Data --- : ${value}`);
        return false;
    } else {
        console.log(`Object Found  --->    : ${value}`);
        return true;
    }
}




function isEmpty(object) {
    for (const property in object) {
        console.log(`found nothing" `);
        return false;
    }
    console.log("Results found:", `/ test ${object} `);
    return true;
}




//console.log(i);

module.exports.test = test;
module.exports.isAnobj = isAnobj;
module.exports.objCheck = objCheck;
module.exports.isEmpty = isEmpty;