import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function Room()

{
   const [schedule, setshedule] = useState([])

   useEffect(()=>
    
   {
axios.get('http://localhost:4000/roomdetails')
.then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))
   
console.log(schedule);
}

,[])

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
                            <a href="/"><img src="template/images/logo.png" alt="#" /></a>
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
   
  
     
      <div  class="our_room">
         <div class="container">
        
            <div class="row">

            {
                schedule.map((data , index)=>
               <div class="col-md-6  col-sm-12">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure>
                        <img src={`images/${data.roomfile}`} width="50%" height="250px"/>
                           </figure>
                     </div>
                     <div class="bed_room">
                        <h3><>Room Name : </>{data.roomname}</h3>
                        <h4><>Room Details : </>{data.roomdetails} </h4>
                        <h4><>Room Price : </>{data.roomprice} </h4>
                        <h4><>Room Status : </>{data.roomstatus} </h4>
                     </div>
                  </div>

                  <Link to={`/roomupdate/${data._id}`}>

                  <button  class="btn btn-dark mt-3">Book Now</button>

                  </Link>
               </div>
        
     
             
         )
      }
         
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
                        <li class="active"><a href="room.html">Our Room</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                     <h3>News letter</h3>
                     <form class="bottom_form">
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
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

export default Room;