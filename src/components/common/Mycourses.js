import React from 'react';
import { Card } from 'antd';
import { Avatar, List } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from './logo2.png';
import Ux from './Ux.png'
import Vec from './Vector1.png'
import { IoIosNotificationsOutline} from "react-icons/io";
import { Link,Route,Routes } from 'react-router-dom';
import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv
 } from "react-icons/md";
 import { IoChatbubblesSharp,IoSettingsSharp,IoMdNotificationsOutline} from "react-icons/io5";
 import { Layout, Menu, theme } from 'antd';
 import { BsThreeDotsVertical} from "react-icons/bs";
 import { Col, Row } from 'antd';
 import { Input, Space } from 'antd';
 import { GoBook } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";

import { RiArrowDropDownLine,RiQuestionAnswerLine,RiLogoutCircleRLine} from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
 import {RiLiveLine } from "react-icons/ri";
 const { Header, Content, Footer, Sider } = Layout;
const items = [
    {
      avatar:<Avatar>A</Avatar>,
      title: 'Abdela',
      description:'5 Design Courses',
      
    },
    {
      avatar:<Avatar>N</Avatar>,
      title: 'Nahar',
      description:'6 Web Courses',
      
    },
    {
      avatar:<Avatar>A</Avatar>,
      title: 'Ashik',
      description:'4 Designcourses',
      
    },
    {
      avatar:<Avatar>H</Avatar>,
      title: 'Hossien',
      description:' 6 Mathematics courses',
    
    },
    {
        avatar:<Avatar>A</Avatar>,
        title: 'Abdela',
        description:'5 Design Courses',
        
      },
      {
        avatar:<Avatar>A</Avatar>,
        title: 'Abdela',
        description:'5 Design Courses',
        
      },
      {
        avatar:<Avatar>A</Avatar>,
        title: 'Abdela',
        description:'5 Design Courses',
        
      },
      {
        avatar:<Avatar>A</Avatar>,
        title: 'Abdela',
        description:'5 Design Courses',
        
      },
       
  ];
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
   
const Mycourses = () => {
  const navigate=useNavigate();
  function handleclick(){
    navigate('/Mycourse')
  }
  function handleclicks(){
    navigate('/upload')
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
        > <button onClick={handleclicks}  style={{ marginLeft:1140,marginTop:10,borderRadius:15}}>Upload</button>
            <Row>
             
                <div 
            style={{ width:1200,height:230}}
          className='uxdiv' >
            <Col xs={23} sm={16} md={12} lg={8} xl={23}>
            
            <img style={{ backgroundColor:'#2D4849',marginLeft:30,borderRadius:10, marginTop:10 }} src={Ux} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,marginLeft:80}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160}} src={Vec} className="ux" alt="no image" />
            <p style={{
            color:'black',
            float:'right',
            marginRight:420,
            marginTop:-165,
            fontSize:28

          }}>Ul design for beginner</p>
          <p style={{
            color:'#BFBFBF',
            float:'right',
            marginRight:500,
            marginTop:-100,
          

          }}>Duration:<bdo style={{
            color:'black',
            float:'right',
          
           marginRight:100
          

          }}>2h 30m</bdo></p>

          <p style={{
            color:'#BFBFBF',
            float:'right',
           marginTop:-100,
           marginRight:320
          

          }}>Students:<bdo style={{
            color:'black',
            float:'right',
              
           marginRight:100
          

          }}>200</bdo></p>
           <div style={{
            color:'black',
            float:'right',
              
           marginRight:80,
           marginTop:-30,
           borderRadius:10,

          }}><button style={{
           
           borderRadius:5,

          }}>Edit</button></div>
           <button style={{
            color:'black',
            float:'right',
              
        marginTop:-30,
        borderRadius:5,
          

          }}>Delete</button></Col></div>
            <div 
            style={{ width:1200,height:230}}
          className='uxdiv' >
            <Col xs={23} sm={16} md={12} lg={8} xl={23}>
            
            <img style={{ backgroundColor:'#2D4849',marginLeft:30,borderRadius:10, marginTop:10 }} src={Ux} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,marginLeft:80}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160}} src={Vec} className="ux" alt="no image" />
            <p style={{
            color:'black',
            float:'right',
            marginRight:420,
            marginTop:-165,
            fontSize:28

          }}>Ul design for beginner</p>
          <p style={{
            color:'#BFBFBF',
            float:'right',
            marginRight:500,
            marginTop:-100,
          

          }}>Duration:<bdo style={{
            color:'black',
            float:'right',
          
           marginRight:100
          

          }}>2h 30m</bdo></p>

          <p style={{
            color:'#BFBFBF',
            float:'right',
           marginTop:-100,
           marginRight:320
          

          }}>Students:<bdo style={{
            color:'black',
            float:'right',
              
           marginRight:100
          

          }}>200</bdo></p>
           <div style={{
            color:'black',
            float:'right',
              
           marginRight:80,
           marginTop:-30,
           borderRadius:10,

          }}><button style={{
           
           borderRadius:5,

          }}>Edit</button></div>
           <button style={{
            color:'black',
            float:'right',
              
        marginTop:-30,
        borderRadius:5,
          

          }}>Delete</button></Col></div>
                 <div 
            style={{ width:1200,height:230}}
          className='uxdiv' >
            <Col xs={23} sm={16} md={12} lg={8} xl={23}>
            
            <img style={{ backgroundColor:'#2D4849',marginLeft:30,borderRadius:10, marginTop:10 }} src={Ux} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,marginLeft:80}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160,}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160}} src={Vec} className="ux" alt="no image" />
            <img style={{ backgroundColor:'#2D4849', marginTop:-160}} src={Vec} className="ux" alt="no image" />
            <p style={{
            color:'black',
            float:'right',
            marginRight:420,
            marginTop:-165,
            fontSize:28

          }}>Ul design for beginner</p>
          <p style={{
            color:'#BFBFBF',
            float:'right',
            marginRight:500,
            marginTop:-100,
          

          }}>Duration:<bdo style={{
            color:'black',
            float:'right',
          
           marginRight:100
          

          }}>2h 30m</bdo></p>

          <p style={{
            color:'#BFBFBF',
            float:'right',
           marginTop:-100,
           marginRight:320
          

          }}>Students:<bdo style={{
            color:'black',
            float:'right',
              
           marginRight:100
          

          }}>200</bdo></p>
           <div style={{
            color:'black',
            float:'right',
              
           marginRight:80,
           marginTop:-30,
           borderRadius:10,

          }}><button style={{
           
           borderRadius:5,

          }}>Edit</button></div>
           <button style={{
            color:'black',
            float:'right',
              
        marginTop:-30,
        borderRadius:5,
          

          }}>Delete</button></Col></div>
            </Row>
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

export default Mycourses;