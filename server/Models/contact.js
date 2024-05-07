const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name :String,
    email : String,
    subject :String,
    message :String
   
})

const contactdata =  mongoose.model("mycontactusinfo",contactSchema)

module.exports =contactdata




