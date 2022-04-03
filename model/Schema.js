// jshint esversion: 6

let shematicOne = {
    uname: String,
    psw: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    authorized: Boolean
};
module.exports.shematicOne = shematicOne;

let schemaTwo = {
    title: String,
    directions: [String],
    ingredients: [String]
};

let shemaTree = {
    item: Number,
    Name: String,
    Quantity: Number,
    Weight: [Number, Number],
    Date: Date
};
module.exports.inventory = shemaTree;





//console.log("credentials Schema pass tp model:", credentialSchema);
//module.exports = Credential;