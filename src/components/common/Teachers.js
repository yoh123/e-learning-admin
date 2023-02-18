import React from 'react';
import Logo from './logo2.png';
import { Anchor } from 'antd';
import { GrHomeRounded } from "react-icons/gr";
 import {RiLiveLine } from "react-icons/ri";

import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv
 } from "react-icons/md";
 import { RiArrowDropDownLine,RiQuestionAnswerLine,RiLogoutCircleRLine} from "react-icons/ri";
 import { BiWorld } from "react-icons/bi";
 import { AiOutlineTeam  } from "react-icons/ai";
 import { FaChalkboardTeacher,FaDiscourse } from "react-icons/fa";
 import { IoChatbubblesSharp,IoSettingsSharp,IoMdNotificationsOutline} from "react-icons/io5";
import { Layout, Menu, theme } from 'antd';
import { Input, Space } from 'antd';
import { Button, message } from 'antd';
import {MdForwardToInbox} from "react-icons/md";
import Cards from './Cards';
import { Col, Row } from 'antd';
import { Card } from 'antd';
import { Avatar, List } from 'antd';
import { IoIosNotificationsOutline} from "react-icons/io";
import TeContents from './Teachercontent';
import { Link,Route,Routes } from 'react-router-dom';
import Home from '../home/Home';
import Teacher from './Teacher';

import TeCharts from './Techerchart';
import { BsThreeDotsVertical} from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";


const { Meta } = Card;

const { Header, Content, Footer, Sider } = Layout;
const Teachers = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  
  const info = () => {
    message.info('This is a normal message');
  };
 
  
  return (
    <div style={{ backgroundColor:'#2D4849' }}> <Routes>
   
   
  
   </Routes>
    <Layout  >
      <Sider style={{  backgroundColor:'#2D4849', height:830, }}
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
         <Menu.Item ><Link to={'/News'}><TfiAnnouncement/> Anouncement</Link></Menu.Item>
         <Menu.Item ><Link to={'/room'}><RiQuestionAnswerLine/> Question and answers</Link></Menu.Item>
         <Menu.Item key='setting'><IoSettingsSharp /> Settings</Menu.Item>
         <Menu.Item ><Link to={'/room'}><RiLogoutCircleRLine/> Logout</Link></Menu.Item>
         </Menu>
      
        </Sider>
      <Layout style={{ backgroundColor:'#2D4849',}}>
      
        
          <Row style={{ backgroundColor:'#2D4849',}}>
      <Col span={8} xs={{ order: 4 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 2 }}>
        <Avatar  style={{ marginLeft:10,marginTop:-50,backgroundColor:' #FEEAA5' }}>Y</Avatar><p style={{ color:'white',marginTop:-40,marginLeft:50}}>profile<BsThreeDotsVertical/></p>
     </Col>
      <Col span={16} xs={{ order: 2}} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 1 }}>
      <Search  placeholder=" search " onSearch={onSearch} style={{ width: 300,marginLeft:372,marginTop:-32,backgroundColor:'white',height:50,borderRadius:20}} />
      </Col>
      <Col>
      <IoIosNotificationsOutline style={{ backgroundColor:'#3fd5' ,marginLeft:780,marginTop:40,width:42,height:22,borderRadius:200}}/>
      </Col>
    </Row>
      
        <Content
          style={{
            margin: '24px 16px 0',
            backgroundColor:'white',
          }}
        >
     
          
          <TeContents />
          <TeCharts/>
          
        </Content>
        
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor:'#2D4849',
            color:'white'
          }}
        >
          e-learning ©2023 
        </Footer>
      </Layout> 
    </Layout>
    
    
 
 


    </div>
  );
};
export default Teachers;