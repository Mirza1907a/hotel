import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';


function Register()

{
   const [fname,setfname] = useState('')
   const [lname,setlname] = useState('')
   const [email,setemail] = useState('')
   const [phone,setphone] = useState('')
   const [address,setaddress] = useState('')
   const [province,setprovince] = useState('')
   const [city,setcity] = useState('')
   const [zipcode,setpostalzipcode] = useState('')
   const [pass,setpass] = useState('')
   const [image,setimage] = useState('')


   const navigate =  useNavigate();
 
   
  

   const register = async () =>
   {
   const formData = new FormData();
   formData.append("image",image);
formData.append("fname",fname);
formData.append("lname",lname);
formData.append("phone",phone);
formData.append("address",address);
formData.append("province",province);
formData.append("city",city);
formData.append("zipcode",zipcode);
formData.append("email",email);
formData.append("pass",pass);
if(fname === "")
{
    Swal.fire({
       
        text: "First Name  is Required*",
        icon: "error"
      });
}
else if(lname === "")
{
    Swal.fire({
       
        text: "Last Name is Required*",
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
else if(phone === "")
{
    Swal.fire({
       
        text: "Phone is Required*",
        icon: "error"
      });
}
else if(address === "")
{
    Swal.fire({
       
        text: "Address  is Required*",
        icon: "error"
      });
}
else if(province === "")
{
    Swal.fire({
       
        text: "Province  is Required*",
        icon: "error"
      });
}
else if(city === "")
{
    Swal.fire({
       
        text: "City is Required*",
        icon: "error"
      });
}
else if(zipcode === "")
{
    Swal.fire({
       
        text: "Zip Code is Required*",
        icon: "error"
      });
}


else if(pass === "")
{
    Swal.fire({
       
        text: "Password Field is Required*",
        icon: "error"
      });
}
else if(image === "")
{
    Swal.fire({
       
        text: "Image Field is Required*",
        icon: "error"
      });
}

else{
   await axios.post('http://localhost:4000/signup', formData, {
   headers: { "Content-Type": "multipart/form-data" },
},

setTimeout(()=>
{
     navigate('/login');  
}, 2000),
toast('Acc Created Successfully!!', {
   position: "top-right",
   autoClose: 1500,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   
   })


) 




 
 }
   }







 
    return(
        <div>
          <ToastContainer/>
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
                              <Link to="\"><img src="./template/images/logo.png" alt="#" /></Link>
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


<br/>
<br/><br/>
      <div className="container">
      <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Register Yourself</h2>
                  </div>
               </div>
            </div>
            </div>
      <div class="contact" >
         <div class="container">
            <div class="row" id='register'>
               <div class="col-md-6">
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="form-control  mt-3" autoComplete="off" placeholder="First-Name" onChange={(e)=>setfname(e.target.value)} type="type" /> 
                        </div>
                        <div class="col-md-12 ">
                           <input class="form-control  mt-3" autoComplete="off" placeholder="Last-Name" onChange={(e)=>setlname(e.target.value)} type="type" /> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" placeholder="Email" onChange={(e)=>setemail(e.target.value)} type="email" /> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" placeholder="Phone Number" onChange={(e)=>setphone(e.target.value)} type="number" /> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" placeholder="Current Address" onChange={(e)=>setaddress(e.target.value)} type="text" /> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" placeholder="Province" onChange={(e)=>setprovince(e.target.value)} type="text" /> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" placeholder="City" onChange={(e)=>setcity(e.target.value)} type="text" /> 
                        </div>
                      
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" placeholder="Postal/Zip-Code" onChange={(e)=>setpostalzipcode(e.target.value)} type="number"/> 
                        </div>
                        <div class="col-md-12 ">
                           <input class="form-control mt-3" autoComplete="off" placeholder="Password" onChange={(e)=>setpass(e.target.value)}  type="password" /> 
                        </div>
                        <div class="col-md-12">
                           <input class="form-control mt-3" autoComplete="off" type="file" onChange={(e)=>setimage(e.target.files[0])} /> 
                        </div>
                        </div>
                        <div class="col-md-12">
                           <button onClick={register} class="btn btn-dark mt-5">Submit</button>
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


export default Register;

