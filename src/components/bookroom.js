import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

function BookRoom()

{

   
    const [roomname, setroomname] = useState('');
    const [roomprice, setroomprice] = useState('');
    const [roomdetails, setroomdetails] = useState('');
    const [roomcheckintime, setcheckintime] = useState('');
    const [roomcheckouttime, setcheckouttime] = useState('');
    const [roomcheckindate, setcheckindate] = useState('');
    const [roomcheckoutdate, setcheckoutdate] = useState('');
    const [roompickup, setpickup] = useState('');
    const [roomotherneed, setmessage] = useState('');

    const [schedule, setshedule] = useState([])


    useEffect(()=>
    
    {
    axios.get('http://localhost:4000/getroombook')
    .then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))
    
    console.log(schedule);
    }
    
    ,[])
    
   
    const booknow = () =>
    {

      if(roomcheckintime === "")
      {
         Swal.fire({
       
            text: "Roomcheckintime Field is Required*",
            icon: "error"
          });
      }   
      else if(roomcheckouttime === "")
      {
         Swal.fire({
       
            text: "Roomcheckouttime Field is Required*",
            icon: "error"
          });
      }
      else if(roomcheckindate === "")
      {
         Swal.fire({
       
            text: "Roomcheckindate Field is Required*",
            icon: "error"
          });
      }
      else if(roomcheckoutdate === "")
      {
         Swal.fire({
       
            text: "Roomcheckoutdate Field is Required*",
            icon: "error"
          });
      }
      else if(roompickup === "")
      {
         Swal.fire({
       
            text: "Roompickup Field is Required*",
            icon: "error"
          });
      }
      else if(roomotherneed === "")
      {
         Swal.fire({
       
            text: "Roomotherneed Field is Required*",
            icon: "error"
          });
      }
      else
      {
         axios.post('http://localhost:4000/roombooked',{roomname,roomprice,roomdetails,roomcheckintime,roomcheckouttime,roomcheckindate,roomcheckoutdate,roompickup,roomotherneed})
         Swal.fire({
       
            text: "Your Room Has been Booked Visit Counter For Payments when Reach \n Hoping To See you Soon!!",
            icon: "success"
          },
         
          setTimeout(()=>
          {
               navigate('/room');  
          }, 2000),
         
         );

      }

   

    }






    const {id} = useParams();

    useEffect(()=>
    {
        axios.get('http://localhost:4000/roomupdate/'+id)
        .then(uservalue =>{console.log(uservalue)
    
         setroomname(uservalue.data.roomname)
         setroomprice(uservalue.data.roomprice)
         setroomdetails(uservalue.data.roomdetails)
    
    })
    },[])
    
  
const navigate = useNavigate();




    return(
        <div>
            
       
            <header>
       
       <div class="header">
          <div class="container">
             <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                   <div class="full">
                      <div class="center-desk">
                         <div class="logo">
                            <a href="/"><img src="../template/images/logo.png" alt="#" /></a>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                   <nav class="navigation navbar navbar-expand-md navbar-dark ">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarsExample04">
                         <ul class="navbar-nav mr-auto">
                         <li class="nav-item active">
                               <Link class="nav-link" to="/index">Home</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="/room">Room</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="/register">Register</Link>
                            </li>
                            <li class="nav-item">
                               <Link class="nav-link" to="/login">Login</Link>
                            </li>
                         </ul>
                      </div>
                   </nav>
                </div>
             </div>
          </div>
       </div>
    </header>

  
   
  


    <div class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Booking Now</h2>
                  </div>
               </div>
            </div>
            <div class="row" id='register'>
               <div class="col-md-6">
                  
                     <div class="row" >
                        <div class="col-md-12 ">
                        <input type="text" disabled  placeholder="Room Name" value={roomname} onChange={(e)=>setroomname(e.target.value)} className="form-control mt-3"/>
                        </div>
                        <div class="col-md-12 ">
                        <input type="text" disabled  placeholder="Room Price" value={roomprice} onChange={(e)=>setroomprice(e.target.value)} className="form-control mt-3"/>
                        </div>
                        <div class="col-md-12 ">
                        <textarea disabled  placeholder="Room Details" value={roomdetails} onChange={(e)=>setroomdetails(e.target.value)} className="form-control  mt-3" rows="4"></textarea> 
                         </div>
                        <div class="col-md-12 ">
                        <input type="time" min="9:00" max="18:00"  required placeholder="Check In Time"  onChange={(e)=>setcheckindate(e.target.value)} className="form-control mt-3"/>
                        </div>
                        <div class="col-md-12 ">
                        <input type="time" min="9:00" max="18:00" required  placeholder="Check Out Time"  onChange={(e)=>setcheckoutdate(e.target.value)} className="form-control mt-3"/>
                        </div>
                        <div class="col-md-12 ">
                        <input type="date" required  placeholder="Check In Date"  onChange={(e)=>setcheckintime(e.target.value)} className="form-control mt-3"/>
                        </div>
                        <div class="col-md-12 ">
                        <input type="date" required  placeholder="Check Out Date"  onChange={(e)=>setcheckouttime(e.target.value)} className="form-control mt-3"/>
                        
                        </div>
                        <select onChange={(e)=>setpickup(e.target.value)} className="form-control mt-3 ">
                         <option disabled selected>Do You Need A PickuP From Your Location?</option>
                           <option value="Yes">Yes Please!-Pick Me on Arrival!!</option>
                           <option value="No">No Thanks!-I'll make my own way there</option>
                        </select>
                        <div class="col-md-12 ">
                        <textarea class="form-control mt-3" autoComplete="false" placeholder="Any Other Requirements/Needs Let Us Know!!"  onChange={(e)=>setmessage(e.target.value)} ></textarea>                    
                        </div>
                        <div class="col-md-12">
                           <button onClick={booknow} class="btn btn-dark mt-3">Submit</button>
                        </div>
                     </div>
                 
               </div>
            </div>
         </div>
      </div>






      <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class=" col-md-4">
                     <h3>Contact US</h3>
                     <ul class="conta">
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                        <li><i class="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                        <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                     <h3>Menu Link</h3>
                     <ul class="link_menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="about.html"> about</a></li>
                        <li><a href="room.html">Our Room</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li class="active"><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                     <h3>News letter</h3>
                     <form class="bottom_form">
                        <input class="enter" placeholder="Enter your email" 
                        type="text" name="Enter your email"/>
                        <button class="sub_btn">subscribe</button>
                     </form>
                     <ul class="social_icon">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                    
                  </div>
               </div>
            </div>
         </div>
      </footer>






 
     
        </div>
    )
}

export default BookRoom;