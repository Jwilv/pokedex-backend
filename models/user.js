const { Schema, model } = require("mongoose");


const UserSchema = Schema({
    name:{
        required:true,
        type:String,
    },
    email:{
        reuired:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    }
})

module.exports = model('User',UserSchema);