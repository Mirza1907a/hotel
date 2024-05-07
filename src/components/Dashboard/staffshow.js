
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Staffshow()
{



  

const [schedule, setshedule] = useState([])
const {id} = useParams;

useEffect(()=>

{
axios.get('http://localhost:4000/staffshow/')
.then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))

console.log(schedule);
}

,[])

const staffdelete = (id) =>
{
  axios.delete('http://localhost:4000/staffdelete/'+id).then(res=>{console.log(res)
  window.location.reload()
});
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
       Staff Details Manager/Receptionist/Housekeeping
    </h1>
    </center>
    <br/>
    <br/>



<table class="table table-bordered mt-3">
  <thead>
    <tr>

      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">Address</th>
      <th scope="col">Type</th>
      <th scope="col">Profile</th>

      <th scope="col">Action</th>

    </tr>
  </thead>
  
  {
                schedule.map((data , index)=>
 <tr>

<td>{data.name}</td><td>{data.email}</td>
<td>{data.number}</td>
<td>{data.address}</td>
<td>{data.stafftype}</td>
<td>
 <img src={`images/${data.staffprofile}`} width="80%"  height="50px"/>
 


  </td>



<td>

<button onClick={()=>staffdelete(data._id)}  className="btn btn-dark mt-3 mb-3">Delete</button>
</td>

 </tr>
                
  )

}
<hr/>
</table>
</div>
        </div>
     
        
      



      
    )
}

export default Staffshow;