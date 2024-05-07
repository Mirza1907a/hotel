import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './components';
import Contact from './components/contact';
import About from './components/about';
import Room from './components/room';
import Blog from './components/blog';
import Gallery from './components/gallery';
import Addroom from './components/Dashboard/addroom';
import Roomdetails from './components/Dashboard/roomdetails';
import ContactDetailsView from './components/Dashboard/contactdetails';
import Staff from './components/Dashboard/staff';
import OurStaff from './components/staff';
import Register from './components/register';
import Login from './components/login';
import RoomStatus from './components/Dashboard/roomstatus';
import Adminregusers from './components/Dashboard/registeredusers';
import Staffshow from './components/Dashboard/staffshow';
import BookRoom from './components/bookroom';
import RoomBooked from './components/Dashboard/bookedrooms';

function App() {
  return (
    <div className="App">
     <Routes>
      {/* TEMPLATE ROUTES */}
      <Route path='/' element={<Index/>}/>
      <Route path='/index' element={<Index/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/room' element={<Room/>}/>
      <Route path='/roomupdate/:id' element={<BookRoom/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/gallery' element={<Gallery/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/ourstaff' element={<OurStaff/>}/>
      {/* TEMPLATE ROUTES */}


{/* ADMIN-DASHBOARD LINKS */}
      <Route path='/addroom' element={<Addroom/>}/>
       <Route path='/roomstatus' element={<RoomStatus/>}/>
       <Route path='/roomdetails' element={<Roomdetails/>}/>
       <Route path='/contactdata' element={<ContactDetailsView/>}/>
       <Route path='/adminregusers' element={<Adminregusers/>}/>
       <Route path='/staff' element={<Staff/>}/>
       <Route path='/staffshow' element={<Staffshow/>}/>
       <Route path='/roombooked' element={<RoomBooked/>}/>

{/* ADMIN-DASHBOARD LINKS  */}


     </Routes>
    </div>
  );
}

export default App;
