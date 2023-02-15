import React, { useEffect,useState } from 'react';
import Axios from "axios"
import 'antd/dist/reset.css';
import Headers from './components/common/Headers';
import Teachers from './components/common/Teachers';
import Nav from './Nav';
import Teacher from './components/common/Teacher';
import './Admin.css';
import Signup from './components/common/Signup';
import'./Nav.css';
import Home from './components/home/Home';
import Port from './components/common/Port';
import Teacherinfo from './Teacherinfo';
import { Layout, Upload } from 'antd';
import {  Routes,Route} from 'react-router-dom';
import More from './More';
import Item from './Item';
import Videolist from './Videolist';
import Coursesd from './Coursesd';
import Admin from './components/common/Admin';
import MyTeacher from './components/common/Mycourses';
import Dashbordcourse from './components/common/Dashbordcourse';
import Rigster from './components/common/Teacherregister';
import Managestu from './components/common/ManageStudent';
import Newcourse from './components/common/Newcourse';
import Mycourses from './components/common/Mycourses';
import New from './components/common/News';
import Setting from './components/common/Setting';
import { FcSettings } from 'react-icons/fc';
import Sign from './components/common/Signups';
import Uploads from './components/common/Upload';
import Videos from './components/common/Video';
import Pdf from './components/common/Pdf';
import Signin from './components/common/signin';
const App=()=>{


    return (
    
<div>
<Routes>
 

<Route exact  path='/' element={<Headers/>}/>
<Route exact  path='/hhh' element={<Teachers/>}/>


 <Route exact  path='/Mycourse' element={<Mycourses/>}/>
 <Route exact  path='/course' element={<Dashbordcourse/>}/>
 <Route  path='/homes' element={<Rigster/>}/>
 <Route  path='/video' element={<Videos/>}/>
 <Route  path='/pdf' element={<Pdf/>}/>
 <Route  path='/managestu' element={<Managestu/>}/>
 <Route  path='/Newcourse' element={<Newcourse/>}/>
  <Route path='/Book' element={<Teacher/>}/>
  <Route path='/News' element={<New/>}/>
  <Route path='/Books'element={<More/>}/>
 <Route path='/room'  element={<Port />}/>
 <Route path='/room/:roomId' element={<Signup/>}/>
  <Route path='/homes' element={<More/>}/>
  <Route path='/upload' element={<Uploads/>}/>

  <Route path='/setting' element={<Setting/>}/>
  
  
   </Routes>
 
</div>
        
    );
  }

export default App;
