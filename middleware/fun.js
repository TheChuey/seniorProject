// jshint esversion: 8

function objCheck(value) {
    if (Object.keys(value).length === 0 && value.constructor === Object) {
        console.log(`Object Contains Data     test: ${true}`);
        return true;
    } else {
        console.log(`Empty Object      test: ${false}`);
        return false;
    }
}

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


function userPassword(userInput, dbr) {
    console.log(
        "user and password function :",
        `
      database uname-->${dbr[0].uname}, 
      user input ---> ${userInput.uname}, 
      psw input ----> ${userInput.psw}, 
      database psw --->${dbr[0].psw}
      `
    );

    if (dbr[0].uname === userInput.uname) {
        console.log(`user name match   test: ${true}`);
    } else {
        console.log(`psw/user          test: ${false}`);
        return false;
    }

    if (userInput.psw === dbr[0].psw) {
        console.log(`pasword match     test: ${true}`);
        return true;
    } else {
        console.log(`psw/user          test: ${false}`);
        return false;
    }



    console.log("------------------------------", i++);
}
let i = 0;

module.exports.userPassword = userPassword;