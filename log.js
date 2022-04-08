// jshint esversion: 6


function userpsw(req, res) {
    const crudOp = require("./model/dbCrud");
    const routeModuel = require("./controler/test");
    const validate = require("./middleware/fun");


    // const username = req.body.uname;
    // const psw = req.body.psw;

    crudOp.dbFind(req.body) // database will return false or Oject
        .then((value) => {
            // look for incoming value
            // return a false for empty object due to nothing found

            const result = validate.checValue(value);
            // test for false value
            console.log("Boolean test: ", result);
            // false nothing retrun from mongo database
            if (result == false) {
                // display error 
                res.send(
                    `
                    <h1>Go back</h1>
                    <h2>Warning</h2>
                    <p>Click the button to alert the hostname of the current URL.</p>
                    <script>
                        
                        window.onload = function(){ 
                            confirm(" In correct User Name");
                            history.back();
                        }                       
                    </script>
                    `
                );

            } else {
                let SecondResult = validate.userPassword(req.body, value);
                console.log("Boolean test: ", SecondResult);

                if (SecondResult == true) {
                    console.log("access granted");

                    res.render("../view/Head_Footer_JS/header");

                } else {
                    res.send(
                        `
                        <h1>Go back</h1>
                        <h2>Warning</h2>
                        <p>Click the button to alert the hostname of the current URL.</p>
                        <script>
                            
                            window.onload = function(){ 
                                confirm(" Password Error");
                                history.back();
                            }                       
                        </script>
                        `
                    );
                }
            }

        })
        .catch((error) => routeModuel.test(`error`));



}

module.exports.userpsw = userpsw;