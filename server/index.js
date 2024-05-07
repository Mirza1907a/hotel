const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const multer = require('multer');
const roomdata = require('./Models/addroom.js')
const contactdata = require('./Models/contact.js')
const staffdata = require('./Models/staff.js')
const signupdata = require('./Models/signup.js')
const addroom = require('./Models/roomstatus.js')
const roombook = require('./Models/bookroom.js')


mongoose.connect('mongodb://localhost:27017');
const app = express();
app.use(express.json());
app.use(cors())

// room booking//
//insert
app.post('/roombooked',(req,res)=>
{
 roombook.create(req.body).then(mydatauser =>res.json(mydatauser))
}
)

//fetch
app.get('/getroombook',(req,res)=>
{
    roombook.find().then(roomdata =>res.json(roomdata))
})

//delete
app.delete('/deleteroombook/:id',(req,res)=>
{
    const id = req.params.id;
    roombook.findByIdAndDelete({_id : id}).then(roomdata =>res.json(roomdata));

})
// room booking//





//room start
//room insert
app.post('/roomstatus',(req,res)=>
{
addroom.create(req.body).then(mydatauser =>res.json(mydatauser))
}
)

//room Fetch


app.get('/getroomdata',(req,res)=>
{
    addroom.find().then(roomdata =>res.json(roomdata))
})


// room delete


app.delete('/deleteroom/:id',(req,res)=>
{
    const id = req.params.id;
    addroom.findByIdAndDelete({_id : id}).then(roomdata =>res.json(roomdata));

})
//room end




















//Insert Room
const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , '../public/images');
    },
    filename : function(req , file , cb){
        const uniquesuffix = Date.now();
        cb(null , uniquesuffix + file.originalname )
    }
})
const upload = multer({storage : storage});
app.post('/addroom', upload.single('roomfile') , async(req,res)=>{
    const {roomname,roomdetails,roomprice,roomstatus} = req.body;
    const imageName = req.file.filename;
     const roomrecord = new roomdata({
        roomfile : imageName,
        roomname,roomdetails,roomprice,roomstatus
     })
   console.log(roomrecord);
     roomrecord.save();
 })
 app.get('/roomdetails',(req,res)=>
 {
     roomdata.find().then(roomdata =>res.json(roomdata)).
     catch(err=>res.json(err));
 })
 app.get('/roomdetailsuser',(req,res)=>
 {
     roomdata.find().then(roomdata =>res.json(roomdata)).
     catch(err=>res.json(err));
 })
 app.delete('/roomrecod/:id',(req,res)=>{
    const id= req.params.id;
    roomdata.findByIdAndDelete({_id: id}).then(userdata=>res.json(userdata));
})
app.get('/roomupdate/:id',(req, res)=>
{
   const id = req.params.id
   roomdata.findById({_id : id}).then(roomdata =>res.json(roomdata));
})
//room//

//contact 
app.post('/contactinsert',(req,res)=>
{
    const {name,email,subject,message} = req.body;
    const contatcrecord = new contactdata({
        name,email,subject,message
    })

    contatcrecord.save();
})

app.get('/contactdetails',(req,res)=>
{
    contactdata.find().then(contactdata =>res.json(contactdata)).
    catch(err=>res.json(err));
})
app.delete('/deletecontact/:id',(req,res)=>{
    const id= req.params.id;
    contactdata.findByIdAndDelete({_id: id}).then(userdata=>res.json(userdata));
})
//contact


//staff
app.post('/addstaff', upload.single('staffprofile') , async(req,res)=>{
    const {name,email,number,address,stafftype} = req.body;
    const imageName = req.file.filename;
     const staffrecord = new staffdata({
        staffprofile : imageName,
        name,email,number,address,stafftype
     })
   console.log(staffrecord);
   staffrecord.save();
 })

 app.get('/staffshow',(req,res)=>
{
    staffdata.find().then(staffdata_ =>res.json(staffdata_))
})
 app.delete('/staffdelete/:id',(req,res)=>{
    const id= req.params.id;
    staffdata.findByIdAndDelete({_id: id}).then(staffdel=>res.json(staffdel));
})
//staff//



//Signup
app.post('/signup', upload.single('image') , async(req,res)=>{
    const {fname,lname,phone,address,province,city,zipcode,email,pass} = req.body;
    const imageName = req.file.filename;
     const signuprecord = new signupdata({
        image : imageName,
        fname,lname,phone,address,province,city,zipcode,email,pass
     })
   console.log(signuprecord);
   signuprecord.save();
 })
 //signup Fetch


app.get('/getuserdata',(req,res)=>
{
    signupdata.find().then(signupdata_ =>res.json(signupdata_))
})


// signup delete


app.delete('/deluser/:id',(req,res)=>
{
    const id = req.params.id;
    signupdata.findByIdAndDelete({_id : id}).then(signupdata_ =>res.json(signupdata_));

})


//signup end
//signup//






 //LOGIN
app.post('/login',async(req,res)=>
{
    const {loginemail ,loginpass} = req.body;
    signupdata.findOne({
        email : loginemail
    }).then(user =>
        {
           
            if(user)
            {
                
                if(user.pass === loginpass && user.type == "users")
                {
                   
                    res.json('userdata')
                }
                else if(user.pass === loginpass && user.type == "admin")
                {
             
                    res.json('admindata')
                }
                else{
                    res.json('password incorrect')
                }
            }
            else
            {
                res.json('No Record');
            }


        })
})
//login//

app.listen(4000,()=>
{
    console.log("Server chal rha hei!!");
})
