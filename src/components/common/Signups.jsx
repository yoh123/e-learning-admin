
import { useParams } from 'react-router-dom';

import { Layout } from 'antd';
import React,{useCallback,useState} from 'react';


import { Card } from 'antd';
import { Avatar, List } from 'antd';
import { Button } from 'antd';

import Logo from './logo2.png';

import { IoIosNotificationsOutline} from "react-icons/io";
import { Link,Route,Routes } from 'react-router-dom';
import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv
 } from "react-icons/md";
 import { IoChatbubblesSharp,IoSettingsSharp,IoMdNotificationsOutline} from "react-icons/io5";
 import { Menu  } from 'antd';
 import { BsThreeDotsVertical} from "react-icons/bs";
 import { Col, Row } from 'antd';
 import { Input, Space } from 'antd';
 import { GoBook } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";
import Signin from './signin';
import { RiArrowDropDownLine,RiQuestionAnswerLine,RiLogoutCircleRLine} from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
 import {RiLiveLine } from "react-icons/ri";
 import { BiWorld } from "react-icons/bi";
 import { AiOutlineTeam  } from "react-icons/ai";
 import Tec from './3.png';
import { borderRadius, width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const onSearch = (value) => console.log(value);
const { Search } = Input;
const Sign = () => {
const [firstName, setfirstname] = useState("");
const [lastName, setlastname] = useState("");
const [phoneNumber, setphonenumber] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [error, seterror] = useState();
const navigate=useNavigate()
const createteacher=async(e)=>{
    e.preventDefault()
    const post={firstName,lastName,phoneNumber,email,password}
    const response=await fetch('/auth/register',{
      method:"POST",
      body:JSON.stringify(post),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json=await response.json()
    if(!response.ok){
      seterror(json.error)
    }
    if(response.ok){
      setfirstname('')
      setlastname('')
      
      setemail('')
      
      setphonenumber('')
      setpassword('')
      seterror(null)
     
      
    }
}
    return (
      <div className='forms' onSubmit={createteacher}>
       
      <form action="">
        <label htmlFor="">Firstname</label>
        <input type="text" 
        onChange={(e)=>setfirstname(e.target.value)
        }
        value={firstName}
        />
        <label htmlFor="">Lastname</label>
        <input type="text" 
          onChange={(e)=>setlastname(e.target.value)
          }
          value={lastName}
        />
        <label htmlFor="">email</label>
        <input type="text" 
          onChange={(e)=>setemail(e.target.value)
          }
          value={email}
        />
        <label htmlFor="">phonenumber</label>
           <input type="number" 
             onChange={(e)=>setphonenumber(e.target.value)
             }
             value={phoneNumber}
           /> 
           <label htmlFor="">password</label>    
           <input type="text" name="" id=""
             onChange={(e)=>setpassword(e.target.value)
             }
             value={password}
           /> 
           <button>Signup</button>   
      </form>
      </div>



    );
}
export default Sign;