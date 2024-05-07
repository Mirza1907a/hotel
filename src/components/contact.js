import React, { useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link } from 'react-router-dom';

function Contact()
{
   const [name,setname]= useState('')
   const [email,setemail] = useState('')

   const [subject,setsubjecct] = useState('')

   const [message,setmessage] = useState('')

   const contactrecord =()=>{
      if(name === "")
      {
         Swal.fire({
       
            text: "Name Field is Required*",
            icon: "error"
          });
      }
      else if(email === "")
      {
         Swal.fire({
       
            text: "Email Field is Required*",
            icon: "error"
          });

      }
else if(subject  === "")
{

   Swal.fire({
       
      text: "Phone Field is Required*",
      icon: "error"
    });

      }
      else if(message === "")
      {
         Swal.fire({
       
            text: "Message Field is Required*",
            icon: "error"
          });
      }
      else 
      {
         axios.post('http://localhost:4000/contactinsert',{name,email,subject,message})
         window.location.reload();
         Swal.fire({
       
            text: "Your Response have been Submitted Successfully!!",
            icon: "success"
          });

      }

   }

  
    return (
        <div>
            <ToastContainer/>
    
   
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
    
     <div class="back_re">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                      <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
      <div class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="form-control" autoComplete="false" placeholder="Name" onChange={(e)=>setname(e.target.value)}
                            type="text" name="Name"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="false" onChange={(e)=>setemail(e.target.value)}
                            placeholder="Email" type="email" name="Email"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="false" onChange={(e)=>setsubjecct(e.target.value)}
                            placeholder="Phone Number" type="number"  
                            name="Phone Number"/>                          
                        </div>
                        <div class="col-md-12">
                           <textarea class="form-control mt-3" autoComplete="false" placeholder="Message"  onChange={(e)=>setmessage(e.target.value)}
                            >Message</textarea>
                        </div>
                        <div class="col-md-12">
                           <button onClick={contactrecord} class="btn btn-danger mt-3">Send</button>
                        </div>
                     </div>
              
               </div>
               <div class="col-md-6">
                  <div class="map_main">
                     <div class="map-responsive">
                        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="100%" height="400" frameborder="0"
                         allowfullscreen=""></iframe>
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
         </div>
      </footer>
    
            </div>
    )
}

export default Contact;