// jshint esversion: 8
const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();

const fetch = require("node-fetch");

async function sendApiRequest(search) {
    const APP_ID = "20f21e2d";
    const API_Key = "287810c65674d1fb9479a8ebddb51e74";
    const lookingfor = search;
    // console.log("search:", search);

    const response = await fetch(
        ` https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_Key}&q=${lookingfor}`);
    // console.log("response to question-->", response);
    const data = await response.json();
    //console.log("data hamburger recipes from api:", data);

    return data;
}

// class SendRequest extends EventEmitter {} 
// const api = new SendRequest();
// api.on('start', () => {
//     console.log('started');
//     sendApiRequest();

// });


module.exports.sendApiRequest = sendApiRequest;