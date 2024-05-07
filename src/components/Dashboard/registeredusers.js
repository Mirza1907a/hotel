import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Adminregusers()
{
   
    const [uservalue, setuser] = useState([]);
    useEffect(()=>
    {
        axios.get('http://localhost:4000/getuserdata')
        .then(uservalue=>setuser(uservalue.data))
        // console.log(uservalue)
    },[])
    
    
    const deleterecord =  (id) =>
    {
    axios.delete('http://localhost:4000/deluser/'+id).then(res => {console.log(res)
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




  
    
    
      
     


<center>
    <h1 id="head">
        Registered Users/Admin 
    </h1>
    </center>
    <br/>
    <br/>
<div className="container1">
<table className="table table-bordered text-center mt-3">
    <tr>
        <th >First Name</th>
        <th >Last Name</th>
        <th >User Email</th>
        <th >Phone</th>
        <th >Address</th>
        <th >Province</th>
        <th >City</th>
        <th >Zip-code</th>
        <th >User image</th>
        <th >Type</th>
        <th >Action</th>
    </tr>
    {
        uservalue.map((data,index)=>
        
            <tr>

                <td  >{data.fname}</td>
                <td  >{data.lname}</td>
                <td >{data.email}</td>
                <td  >{data.phone}</td>
                <td  >{data.address}</td>
                <td  >{data.province}</td>
                <td  >{data.city}</td>
                <td  >{data.zipcode}</td>
                {/* <td >{data.image}</td> */}
                
                <img  width="30%" height="60px"  src={`images/dbimages/${data.image}`} alt="noimg" />

                <td >{data.type}</td>

            <td>
                <button onClick={()=>deleterecord(data._id)}  className="btn btn-dark mt-3 mb-3">Delete</button>
                <Link to={`/update/${data._id}`} className="btn btn-dark mt-3 mb-3">Update</Link>
            </td>
            </tr>
        
        
        ) 
    }
</table>
</div>
<div/>




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



            </div>
          
       
          
       
        
          






    
    )
}


export default Adminregusers;