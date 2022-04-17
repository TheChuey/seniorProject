// jshint esversion: 6
async function makecredential() {
    // user credentials 
    const credential = new Credential({
        uname: 'Jose',
        psw: 'josh',
        tags: ['guess', 'infinite'],
        authorized: true
    });

    // save to database 
    const result = await credential.save();
    console.log("sucess save to db --> ", result);


}

module.exports.makecredential = makecredential;