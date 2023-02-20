import React, { useEffect,useState } from 'react';
import Axios from "axios"
import 'antd/dist/reset.css';

import Teachers from './components/common/Teachers';

import Teacher from './components/common/Teacher';
import './Admin.css';
import Signup from './components/common/Signup';
import'./Nav.css';
import Home from './components/home/Home';


import { Layout, Upload } from 'antd';
import {  Routes,Route} from 'react-router-dom';
import More from './More';


import Coursesd from './Coursesd';

import MyTeacher from './components/common/Mycourses';
import Dashbordcourse from './components/common/Dashbordcourse';



import Mycourses from './components/common/Mycourses';


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
 

<Route exact  path='/' element={<Signin/>}/>
<Route exact  path='/dashboard' element={<Teachers/>}/>


 <Route exact  path='/Mycourse' element={<Mycourses/>}/>
 <Route exact  path='/course' element={<Dashbordcourse/>}/>

 <Route  path='/video' element={<Videos/>}/>

 <Route  path='/pdf' element={<Pdf/>}/>
 

  <Route path='/Book' element={<Teacher/>}/>
 

 <Route path='/room/:roomId' element={<Signup/>}/>
  <Route path='/homes' element={<More/>}/>
  <Route path='/upload' element={<Uploads/>}/>


  
  
   </Routes>
 
</div>
        
    );
  }

export default App;
