const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    roomname : String,
    roomprice : String,
    roomdetails : String,
    roomcheckintime : String,
    roomcheckouttime : String,
    roomcheckindate : String,
    roomcheckoutdate :String,
    roompickup : String,
    roomotherneed : String,

   
})

const contactdata =  mongoose.model("mybookedroom",contactSchema)

module.exports =contactdata




