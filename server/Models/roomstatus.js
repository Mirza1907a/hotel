const mongoose = require('mongoose');

const myuserSchema = mongoose.Schema({
    room_number :String,
})

const signupdata =  mongoose.model("myroomnumber",myuserSchema)

module.exports =signupdata