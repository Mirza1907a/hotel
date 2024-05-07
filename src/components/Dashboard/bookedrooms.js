import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";

function RoomBooked()
{

    const [schedule, setshedule] = useState([])
  
   
    useEffect(()=>
    
    {
axios.get('http://localhost:4000/getroombook')
.then(schedule=>setshedule(schedule.data)).catch(err=>console.log(err))
console.log(schedule);
}
,[])

const roomdelete=(id)=>{
    axios.delete('http://localhost:4000/deleteroombook/'+id).then(res=>{console.log(res)
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
      <ul id="navbar" class="navbar-nav ms-auto">
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

   



          
      
       
            <center>
    <h1 id="head">
        Booked Room Details
    </h1>
    </center>
    <br/>
    <br/>
    <div className="container1">
<table class="table table-bordered">
  <thead>
    <tr>

      <th scope="col">Room Name</th>
      <th scope="col">Room Price</th>
      <th scope="col">Room Details</th>
      <th scope="col">Check In Time</th>
      <th scope="col">Check Out Time</th>
      <th scope="col">Check In Date</th>
      <th scope="col">Check Out Date</th>
      <th scope="col">PickUp</th>
      <th scope="col">Other Requiremnets</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  
  {
      schedule.map((data , index)=>
 <tr>

<td>{data.roomname}</td>
<td>{data.roomprice}</td>
<td>{data.roomdetails}</td>
<td>{data.roomcheckintime}</td>
<td>{data.roomcheckouttime}</td>
<td>{data.roomcheckindate}</td>
<td>{data.roomcheckoutdate}</td>
<td>{data.roompickup}</td>
<td>{data.roomotherneed}</td>

<td>

<button onClick={()=>roomdelete(data._id)}  className="btn btn-dark mt-3 mb-3">Delete</button>
</td>

 </tr>
                
  )

}

</table>   
<br/>
<br/> 
<br/>
<br/>

</div>     
            </div>
   
     
        
      
  
    )
}

export default RoomBooked;