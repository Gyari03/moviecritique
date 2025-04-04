const mongoose = require("mongoose");
require('dotenv').config({path:'example.env'});

function connectDB(){
    const connection = mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_URI}`)
    connection.then(() =>{
        console.log(`Mongodb connected at ${process.env.MONGO_URI}`)
    }).catch((error)=>{
        console.error("Connection failed:",error);
    });
}

module.exports = {connectDB,mongoose};