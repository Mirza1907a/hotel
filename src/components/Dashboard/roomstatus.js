import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function RoomStatus()
{
    const [room_number,setroomnumber] = useState('');


  const navigate = new useNavigate();

  
 

  const roomstatus = ()=>
  {


if(room_number === "")
 {
     Swal.fire({
        
         text: "Enter Room For User !",
         icon: "error"
       });
 }
 else
 {
  axios.post('http://localhost:4000/roomstatus',{room_number})
  window.location.reload()
 }

  }




  const [uservalue, setuser] = useState([]);
  useEffect(()=>
  {
      axios.get('http://localhost:4000/getroomdata')
      .then(uservalue=>setuser(uservalue.data))
      // console.log(uservalue)
  },[])
  
  
  const deleterecord =  (id) =>
  {
  axios.delete('http://localhost:4000/deleteroom/'+id).then(res => {console.log(res)
  window.location.reload()});
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

  
        <div className="container">
{/* add room  */}
<div id="move" class="container-fluid">
        <div class="container-fluid">
          <div class="">
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                <center id=""> 
                <br/>
          <br/>
          <br/>
          <br/>            
    <h1 >
      Add Room Which is Available

    </h1>
  
  
               <input type="number" placeholder="Room Number" onChange={(e)=>setroomnumber(e.target.value)} className="form-control mt-3"/>
             
               <button onClick={roomstatus} className="btn btn-dark mt-3">Submit</button>
               </center>
                </div>
           
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
<br/>
<br/>
<br/>
<center id="margin1">
<hr/>


{/* add room  */}

    <h1 >
        Rooms Available

    </h1>

    <br/>
    <br/>

<table className="table table-bordered text-center mt-3">
    <tr>
        <th >Room Number</th>
        <th >Action</th>
    </tr>
    {
        uservalue.map((data,index)=>
        
            <tr>

                <td >{data.room_number}</td>
            <td>
                <button  onClick={()=>deleterecord(data._id)}  className="btn btn-dark mt-3 mb-3" >Delete </button> &nbsp;&nbsp;
                <Link to={`/update/${data._id}`} className="btn btn-dark mt-3 mb-3">Update</Link>
            </td>
            </tr>
        
        
        ) 
    }
</table>
</center>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
<br/>
<br/>
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


export default RoomStatus;