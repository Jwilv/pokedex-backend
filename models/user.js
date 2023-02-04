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

UserSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model('User',UserSchema);