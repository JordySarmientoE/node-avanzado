const mongoose = require("mongoose");

async function connection(){
    await mongoose.connect("mongodb://mongo/myDB");
    console.log("Conección establecida...")
}

module.exports = connection;