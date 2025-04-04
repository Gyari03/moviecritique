const {mongoose} = require('../config/db');
const Schema = mongoose.Schema;
//const bcrypt = require("bcryptjs"); Jelszó hashelésére

//Explicit kell létrehoznom, mert ha index-et használok apparently nem engedi, hogy userSchema = mongoose.model('User', {...});-zek.
const userSchema = new Schema({
    Email: {
        type: String,
        required: true,
        index:{unique: true}
    },
    Username:{
        type: String,
        required: true,
        index:{unique:true}
    },
    Password:{
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;