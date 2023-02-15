import React from 'react';
import { Card } from 'antd';
import { Avatar, List } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logo from './logo2.png';

import { IoIosNotificationsOutline} from "react-icons/io";
import { Link,Route,Routes } from 'react-router-dom';
import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv,MdClear
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
 import { BiWorld } from "react-icons/bi";
 import { AiOutlineTeam  } from "react-icons/ai";
 import Tec from './3.png';
import { width } from '@mui/system';
import { FiEdit2,FiFilter} from "react-icons/fi";
import { FcFilledFilter } from "react-icons/fc";

 const { Meta } = Card;
 const { Header, Content, Footer, Sider } = Layout;
const data = [
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
    {
      avatar:<Avatar>y</Avatar>,
      title: 'yohannes',
      description:'@username',
      
    },
      
  ];
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
   
const Setting= () => {
  const navigate=useNavigate();
  function handleclick(){
    navigate('/setting')
  }
  function handleclicks(){
    navigate('/homes')
  }
    return (
        <div className="site-card-border-less-wrapper">
            <Layout>
            <Sider style={{  backgroundColor:'#2D4849', height:872, }}
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
        <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}> <Link to='/'><GrHomeRounded/> Dashboard</Link></Menu.Item>
        <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/course'}><MdLiveTv/> Courses</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/Book'}><MdManageAccounts /> Manage Teachers</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/managestu'}><AiOutlineTeam  /> Manage Students</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/room'}><RiLiveLine/> Live Classes</Link></Menu.Item>
         <Menu.Item hoverable
    style={{ backgroundColor:'#FDB137'}}><Link to={'/room'}><BiWorld/> news & notification</Link></Menu.Item>
        <Menu.Item key='setting' hoverable 
    style={{ backgroundColor:'#FDB137'}}><Link to={'/setting'}><IoSettingsSharp /> Settings</Link></Menu.Item>
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
          <div className='forms' >
  <div style={{
            marginLeft:95,
           
            
          }}>
    <h6 style={{
            marginTop:30

            
          }}>current pasword</h6>
<input  style={{
            width:330

            
          }} type="text" placeholder="************"/>
<h6 style={{
            marginTop:25

            
          }}>new password</h6>
<input style={{
            width:330
            
            
          }}  type="text" placeholder="**********"/>
<h6 style={{
            marginTop:30

            
          }}>Retry pasword</h6>
<input style={{
            width:330
            
            
          }} type="text" placeholder="******"/>


</div>

          <div />
        </div>
        <Button   onClick={handleclicks} style={{
      marginTop:30,
       marginLeft:550,
      borderRadius:10,
      height:40,
      width:200,
      backgroundColor:'#FDB137',
      color:'white'}}>Update password</Button>
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

export default Setting;