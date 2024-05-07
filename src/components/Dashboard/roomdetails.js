import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Roomdetails()
{

    const [schedule, setshedule] = useState([])
    const {id} = useParams();
   
    useEffect(()=>
    
    {
axios.get('http://localhost:4000/roomdetails')
.then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))
    
console.log(schedule);
}

,[])

const deleterecord=(id)=>{
  axios.delete('http://localhost:4000/roomrecod/'+id).then(res=>{console.log(res)
  window.location.reload()
});
}

    return(
        <div>

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" to="/">Hotel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul  id="navbar" class="navbar-nav ms-auto">
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




      

   
        <div className="container">
   
        <center>
         
    <h1 id="head">
        Registered Room Details
    </h1>
    </center>
    <br/>
    <br/>
   <div class="row mt-3">
                  {
                  schedule.map((data , index)=>
                 
                    <div className="col-lg-6 col-md-12 col-sm-12">
  
  <div className="card">
   <img src={`images/${data.roomfile}`} width="100%" height="300px"/>
   <div className="container">
    <h3 class="pt-3">{data.roomname}</h3>
    <p>
      {data.roomdetails}
    </p>
  
    <button onClick={()=>deleterecord(data._id)}  className="btn btn-dark mt-3 mb-3">Delete</button>
    </div>
                      </div>
  
                      </div>
  
                    )
              }
                  </div>

                  <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
  
  </div>
        </div>
     
        
      
  



   
    )
}

export default Roomdetails;