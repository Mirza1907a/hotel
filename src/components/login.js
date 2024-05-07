import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Login()

{


   const [loginemail,setloginemail] = useState('')

   const [loginpass,setloginpass] = useState('')

   const navigate = useNavigate();
   const login = () =>
   {
     

      if(loginemail === "")
{
    Swal.fire({
       
        text: "Email Field is Required*",
        icon: "error"
      });
}
else if(loginpass === "")
{
    Swal.fire({
       
        text: "Password Field is Required*",
        icon: "error"
      });
}

else
{
   axios.post('http://localhost:4000/login',{loginemail,loginpass}).then(
      result => {console.log(result)
      
      
      if(result.data ==='userdata')
      {
          navigate('/user');
      }
      else if(result.data === 'admindata')
      {
          navigate('/addroom');
      }
      else if(result.data === 'password incorrect')
      {
         Swal.fire({
       
            text: "Either Email Or Password Is incorrect!",
            icon: "error"
          });
      }
      
      }
  
        )   
}

   }
    return(
        <div>
              {/* <!-- header --> */}
      <header>
         {/* <!-- header inner --> */}
         <div class="header">
            <div class="container">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <Link to="\"><img src="template/images/logo.png" alt="#" /></Link>
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
      {/* <!-- end header inner --> */}
      {/* <!-- end header --> */}


<div className="container mt-5">
<div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Login Now</h2>
                  </div>
               </div>
            </div>
</div>



      
      <div class="contact">
         <div class="container">
            <div class="row" id='register'>
               <div class="col-md-6">
                  
                     <div class="row" >
                        <div class="col-md-12 ">
                           <input class="form-control" autoComplete="off" placeholder="Email" onChange={(e)=>setloginemail(e.target.value)} value={loginemail} type="email" name="Name"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" placeholder="Password" type="password" onChange={(e)=>setloginpass(e.target.value)} value={loginpass}  name="Email"/> 
                        </div>
                        <div class="col-md-12">
                           <button onClick={login} class="btn btn-dark mt-3">Submit</button>
                        </div>
                     </div>
                 
               </div>
            </div>
         </div>
      </div>



    
















         {/* <!--  footer --> */}
         <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class=" col-md-4">
                     <h3>Contact US</h3>
                     <ul class="conta">
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                        <li><i class="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                        <li> <i class="fa fa-envelope" aria-hidden="true"></i><Link to="#"> demo@gmail.com</Link></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                     <h3>Menu Link</h3>
                     <ul class="link_menu">
                        <li class="active"><Link to="#">Home</Link></li>
                        <li><Link to="about.html"> about</Link></li>
                        <li><Link to="room.html">Our Room</Link></li>
                        <li><Link to="gallery.html">Gallery</Link></li>
                        <li><Link to="blog.html">Blog</Link></li>
                        <li><Link to="contact.html">Contact Us</Link></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                     <h3>News letter</h3>
                     <form class="bottom_form">
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button class="sub_btn">subscribe</button>
                     </form>
                     <ul class="social_icon">
                        <li><Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
            </div>
      </footer>
      {/* <!-- end footer --> */}
        </div>
    )
}


export default Login;

