const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
     name :String,
     email: String,
     number: String,
     address:String,
     stafftype :String,
     staffprofile :String
})

const staffdata =  mongoose.model("staffs",StaffSchema)

module.exports =staffdata




