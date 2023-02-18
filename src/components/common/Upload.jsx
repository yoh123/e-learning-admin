import React from 'react';
import { Avatar } from 'antd';
import Logo from './logo2.png';
import { IoIosNotificationsOutline} from "react-icons/io";
import { Link } from 'react-router-dom';
 import { IoSettingsSharp} from "react-icons/io5";
 import { Layout, Menu, theme } from 'antd';
 import { BsThreeDotsVertical} from "react-icons/bs";
 import { Col, Row } from 'antd';
 import { Input, Space } from 'antd';
 import { GoBook } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";
import {RiQuestionAnswerLine,RiLogoutCircleRLine} from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
 import {RiLiveLine } from "react-icons/ri";
 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import './signin.css'
 import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message ,  Select} from 'antd';
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const { Option } = Select;
const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
 const { Content, Footer, Sider } = Layout;

  const onSearch = (value) => console.log(value);
  const { Search } = Input;
   
const Uploads = () => {
  
const [courseName, setcourseName] = useState("");
const [level, setlevel] = useState("");
const [catagory, setcatagory] = useState("");


const [description, setdescription] = useState("");
const [curriculum, setcurriculum] = useState("");
const [error, seterror] = useState();
const navigate=useNavigate()
const creatpost=async(e)=>{
    e.preventDefault()
    const post={courseName,catagory,level,description,curriculum}
    const response=await fetch('/courses',{
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
     setcourseName('')
     setlevel('')
     setcatagory('')
     setdescription('')
     setcurriculum('')
  navigate('/video')
  
      
    }
}
    return (
        <div className="site-card-border-less-wrapper">
            <Layout>
      <Sider style={{  backgroundColor:'#2D4849', height:970, }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" style={{marginTop:10,backgroundColor:'#2D4849' }}>  <img style={{ backgroundColor:'#2D4849' }} src={Logo} className="adminlogo" alt="no image" /> </div>
        
        <Menu style={{backgroundColor:'#2D4849',height:600,color:'white' }}>
        <Menu.Item > <Link to='/dashboard'><GrHomeRounded/> Dashboard</Link></Menu.Item>
        <Menu.Item ><Link to={'/Mycourse'}><GoBook/> My Courses</Link></Menu.Item>
        <Menu.Item ><Link to={'/room'}><RiLiveLine/> Live Classes</Link></Menu.Item>
         <Menu.Item ><Link to={'/Book'}><TfiAnnouncement/> Anouncement</Link></Menu.Item>
         <Menu.Item ><Link to={'/room'}><RiQuestionAnswerLine/> Question and answers</Link></Menu.Item>
         <Menu.Item key='setting'><IoSettingsSharp /> Settings</Menu.Item>
         <Menu.Item ><Link to={'/room'}><RiLogoutCircleRLine/> Logout</Link></Menu.Item>
         </Menu>
      
        </Sider>
      <Layout>
      
        
          <Row style={{ backgroundColor:'#2D4849',}}>
      <Col span={8} xs={{ order: 4 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 2 }}>
        <Avatar  style={{ marginLeft:10,marginTop:-50,backgroundColor:' #FEEAA5' }}>Y</Avatar><p style={{ color:'white',marginTop:-40,marginLeft:50}}>profile<BsThreeDotsVertical/></p>
     </Col>
      <Col span={16} xs={{ order: 2}} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 1 }}>
      <Search  placeholder=" search " onSearch={onSearch} style={{ width: 300,marginLeft:372,marginTop:-32,backgroundColor:'white',height:50,borderRadius:20}} />
      </Col>
      <Col>
      <IoIosNotificationsOutline style={{ backgroundColor:'#BFBFBF' ,marginLeft:780,marginTop:40,width:42,height:22,borderRadius:200}}/>
      </Col>
    </Row>
    <Content
          style={{
            margin: '24px 16px 0',
            backgroundColor:'white',
          }}
        > 
            <div className="upload" onSubmit={creatpost}>
           <form className='uploadform' action="">
            <label className='courselabel'>coursname</label>
            <div className='courseinput'><input type="text" 
              onChange={(e)=>setcourseName(e.target.value)
              }
              value={courseName}
            placeholder='coursname'/></div>
            <label className='catagorylabel' htmlFor="">Catagory</label>
            <div className='catagoryinput'> <Select style={{width:340}} defaultValue="" >
        <Option  value="1">catagory1</Option>
        <Option value="2">catagory2</Option>
        <Option value="2">catagory3</Option>
      </Select></div>
            <label className='levellabel' htmlFor="">level</label>
            <Select style={{width:340,marginLeft:5}} defaultValue="" >
        <Option  value="1">level1</Option>
        <Option value="2">level2</Option>
        <Option value="2">level3</Option>
      </Select>

            <label className='catagorylabel' htmlFor="">Description</label>
            <div className='courseinput'> <input  type="text" 
              onChange={(e)=>setdescription(e.target.value)
              }
              value={description}
            /></div>
        
      
      <label className='catagorylabel' htmlFor="">Curriculum</label>
      <div className='courseinput'> <input   type="text" 
              onChange={(e)=>setcurriculum(e.target.value)
              }
              value={curriculum}
            /></div>
     
     
            <button className="signinbtns" >upload</button>
            </form>
        
            </div>
                </Content>
    
                <Footer
          style={{
            textAlign: 'center',
            backgroundColor:'#2D4849',
            color:'white'
          }}
        >
          E-learning ©2020 
        </Footer>
        </Layout>
        </Layout>
  </div>
    );
}

export default Uploads;