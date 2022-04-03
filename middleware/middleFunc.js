// jshint esversion: 6




function checValue(value) {
    console.log("check value");
    if (value) {
        console.log("user name matches");
        return true;


    } else {
        console.log("false");
        return false;


    }
}


module.exports.checValue = checValue;

console.log("end of middle func");