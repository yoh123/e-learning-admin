
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { Layout } from 'antd';
import React,{useCallback,useState} from 'react';
import { useNavigate } from 'react-router-dom';

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

import { RiArrowDropDownLine,RiQuestionAnswerLine,RiLogoutCircleRLine} from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
 import {RiLiveLine } from "react-icons/ri";
 import { BiWorld } from "react-icons/bi";
 import { AiOutlineTeam  } from "react-icons/ai";
 import Tec from './3.png';
import { borderRadius, width } from '@mui/system';
const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const onSearch = (value) => console.log(value);
const { Search } = Input;
const Rigster = () => {
  const {roomId}=useParams();
  const myMeeting = async (element) => {
  
     const appID =1992383001 ;
     const serverSecret = "6e1825185f89768f4ddcbce8ef6193fd";
      const KitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'frtree');
    const zc=ZegoUIKitPrebuilt.create(KitToken);
    zc.joinRoom({
      container:element,
      sharedLinks:[{
        name:'copy link',
        url:'http://localhost:3000/room/$%7Bvalue%7D',
      },],
      scenario:{
        mode:ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton:false,
    });};

    return (
      <div className="site-card-border-less-wrapper">
        <Layout>
  
    <Sider style={{  backgroundColor:'#2D4849', height:1140, }}
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
    style={{ backgroundColor:'#FDB137'}}><IoSettingsSharp /> Settings</Menu.Item>
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

            
          }}>Name</h6>
<input  style={{
            width:330

            
          }} type="text" placeholder="name"/>
<h6 style={{
            marginTop:25

            
          }}>Email</h6>
<input style={{
            width:330
            
            
          }}  type="email" placeholder="email"/>
<h6 style={{
            marginTop:30

            
          }}>Education status</h6>
<input style={{
            width:330
            
            
          }} type="text" placeholder="education status"/>
<h6 style={{
            marginTop:30

            
          }}>Course to offer</h6>
<input style={{
            width:330
            
            
          }} type="text" placeholder="course to offer"/>
<h6 style={{
            marginTop:30

            
          }}>Address</h6>
<input style={{
            width:330
            
            
          }} type="text" placeholder="address"/>
<h6 style={{
            marginTop:30

            
          }}>experience</h6>
<input style={{
            width:330
            
            
          }} type='number'  placeholder="experience"/>
<h6 style={{
            marginTop:30

            
          }}>Age</h6>
<input style={{
            width:330
            
            
          }} type='number'  placeholder="age"/>
<h6 style={{
            marginTop:30

            
          }}>Gender</h6>
<form>
  <input type="checkbox" id="html" name="fav_language" value="HTML"/>
  <label for="html">Male</label>
  <input type="checkbox" id="css" name="fav_language" value="CSS"/>
  <label for="css">Female</label>
  <input type="checkbox" id="javascript" name="fav_language" value="JavaScript"/>
  
 
</form>
<input style={{
            marginLeft:120,
            marginBottom:10,

            
          }}type="submit" value="Register"/>
</div>

          <div />
        </div></Content>
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
}
export default Rigster;