const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    roomname :String,
    roomprice :String,
    roomdetails : String,
    roomstatus : String,
    roomfile :String,

   
})

const roomdata =  mongoose.model("rooms",roomSchema)

module.exports =roomdata




