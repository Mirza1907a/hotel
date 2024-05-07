const mongoose = require('mongoose');

const myuserSchema = mongoose.Schema({
    fname :String,
    lname :String,
    email : String,
    phone : String,
    address : String,
    province : String,
    city : String,
    zipcode : String,
    pass:String,
    image : String,
    type: {
        default : "users",
        type : String,
    }
})

const signupdata =  mongoose.model("myusers",myuserSchema)

module.exports =signupdata




