const dBTester = require('../controler/test');
dBTester.test("Database Module -- line 2");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DBLogin')
    .then(() => dBTester.test("Connect db..."))
    .catch(err => dBTester.test('Could not connect to MongoDB..', err));


module.exports = mongoose;



// async function makecredential() {
//     // user credentials 
//     const credential = new Credential({
//         uname: 'Jose',
//         psw: 'josh',
//         tags: ['guess', 'infinite'],
//         authorized: true
//     });

//     // save to database 
//     const result = await credential.save();
//     console.log("sucess save to db --> ", result);


// }

///////////////makecredential();