import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Addroom()
{
    const [roomname, setroomname] = useState('');
    const [roomdetails, setroomdetails] = useState('');
    const [roomprice, setroomprice] = useState('');
    const [roomstatus, setroomstatus] = useState('');
    const[roomfile,setroomfile]  = useState('')
const navigate = useNavigate();


    const addroom = () =>
    {
      const formData = new FormData;
      formData.append('roomname',roomname)
      formData.append('roomprice',roomprice)
      formData.append('roomdetails',roomdetails)
      formData.append('roomstatus',roomstatus)
      formData.append('roomfile',roomfile)
       axios.post('http://localhost:4000/addroom', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      },
      navigate('/roomdetails')
    
    
    
    );    }


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


   


            <div class="container-fluid mt-3">
            <center>
    <h1 id="head">
        Add Rooms with Details
    </h1>
    </center>
    <br/>
    <br/>
<center id="move">
                <div class="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">


                <input type="text"  placeholder="Room Name" onChange={(e)=>setroomname(e.target.value)} className="form-control mt-3"/>
    <input type="text" placeholder="Room Price" onChange={(e)=>setroomprice(e.target.value)} className="form-control mt-3"/>

    <textarea placeholder="Room Details" onChange={(e)=>setroomdetails(e.target.value)} className="form-control  mt-3"
     rows="4"></textarea>

<select onChange={(e)=>setroomstatus(e.target.value)} className="form-control mt-3 ">
  <option disabled selected>Select Status</option>
  <option value="available">Available</option>
  <option value="booked">Booked</option>

</select>
     <input type="file" onChange={(e)=>setroomfile(e.target.files[0])} className="form-control mt-3"/>

     <button onClick={addroom} className="btn btn-dark mt-3">Add Room</button>
</div>
                </div> 
                </center>

            </div>
        </div>
     
        
      
    
    )
}


export default Addroom;