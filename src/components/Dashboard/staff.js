
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
function Staff()
{


    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[number,setnumber] = useState('')
    const[address,setaddress] = useState('')
    const[stafftype,setstafftype] = useState('');
    const [staffprofile,setstaffprofile] = useState('');


const addstaff = () =>{
    const formdata = new FormData;
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("number",number)
    formdata.append("address",address)
    formdata.append("stafftype",stafftype)
    formdata.append("staffprofile",staffprofile);

 
        if(name === "")
        {
          Swal.fire({
       
            text: "Name Field Is Required!",
            icon: "error"
          });
        }

        else if(email === "")
        {
          Swal.fire({
       
            text: "Email Field Is Required!",
            icon: "error"
          });
              
            }

            else if(number === "")
            {
              Swal.fire({
       
                text: "Number Field Is Required!",
                icon: "error"
              });
  
            }
            else if(address === "")
            {
              Swal.fire({
       
                text: "Address Field Is Required!",
                icon: "error"
              });
  
            }


            else if(stafftype === "")
            {
              Swal.fire({
       
                text: "Type Field Is Required!",
                icon: "error"
              });
  
            }
            else if(staffprofile === "")

            {
              Swal.fire({
       
                text: "Staff Profile Field Is Required!",
                icon: "error"
              });
            }

            else {

              axios.post('http://localhost:4000/addstaff', formdata, {
                headers: { "Content-Type": "multipart/form-data" },
               
              }, window.location.reload()); 
              Swal.fire({
       
                text: "Staff Added Successfully!!",
                icon: "success"
              });
             
            }
        

    
}


    return(
        <div>

            <ToastContainer/>
      
   

            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" to="/">Hotel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul  id="navbar"class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/addroom">Add Room</Link>
        </li>       
         <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/roomdetails">Room Details</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/roomstatus"> Room Status</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/staff">Add Staff</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/staffshow"> Staff Details</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/adminregusers"> User Data</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/contactdata"> Conact Data</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to="/roombooked">Booked Rooms</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

       
     
        
       
       
       

      
   
        <div className='container'>
        <center>
      
    <h1 id="head">
      Add Staff With Details
    </h1>
    </center>
    <br/>
    <br/>
    <center>
    <input type="text" placeholder='Name' onChange={(e)=>setname(e.target.value)} class="form-control w-50 mt-3"/>

    <input type="email" placeholder='Email' class="form-control w-50 mt-3"onChange={(e)=>setemail(e.target.value)} />
    <input type="number" placeholder='Number' onChange={(e)=>setnumber(e.target.value)} class="form-control w-50 mt-3"/>
    <input type="text" placeholder='Address' onChange={(e)=>setaddress(e.target.value)}class="form-control w-50 mt-3"/>
<select onChange={(e)=>setstafftype(e.target.value)} class="form-control w-50 mt-3">
    <option disabled selected>Select Role</option>
<option value="manager">Manager</option>
<option value="receptionist">Receptionist</option>

<option value="housekeeping">Housekeeping</option>

</select>

<input type='file' onChange={(e)=>setstaffprofile(e.target.files[0])} className='form-control w-50 mt-3'/>




<button onClick={addstaff} className='btn btn-danger mt-3'>Add Staff</button>
</center>
</div>
      
     
        
      
    </div>


    
    )
}

export default Staff;