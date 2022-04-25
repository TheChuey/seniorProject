// jshint esversion: 8

function objCheck(value) {
  if (Object.keys(value).length === 0 && value.constructor === Object) {
    console.log(`Object Contains Data     test: ${true}`);
    return true;
  } else {
    console.log(`Empty Object test : ${false}`);
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

function userPassword(userInput, dbr) {
  console.log(
    "user and password function :",
    `
      database uname-->${dbr.uname}, 
      user input ---> ${userInput.uname}, 
      psw input ----> ${userInput.psw}, 
      database psw --->${dbr.psw}
      `
  );
  if (dbr.uname === userInput.uname && userInput.psw === dbr.psw) {
    return true;
  } else {
    return false;
  }
}
let i = 0;

module.exports.userPassword = userPassword;
module.exports.objCheck = objCheck;
module.exports.userPassword = userPassword;
module.exports.checValue = checValue;
