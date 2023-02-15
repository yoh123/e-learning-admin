import React from 'react';
import { Card } from 'antd';
import { Col, Row} from 'antd';

import videoyy from './images/yy.mp4';
import videocc from './images/cc.mp4';
import { Button } from 'antd';
import Logo from './components/common/logo.PNG';
import { Link,Route,Routes } from 'react-router-dom';
import { MdDashboard,
  MdClass,
  MdManageAccounts,
  MdLiveTv
 } from "react-icons/md";
 import { IoChatbubblesSharp,IoSettingsSharp,IoMdNotificationsOutline} from "react-icons/io5";
 import { Layout, Menu, theme } from 'antd';
 import { Avatar, List } from 'antd';
const data = [
  {
    title: 'Ui/UX 1',
  },
  {
    title: 'ui/Ux 2',
  },
  {
    title: 'Ui/ux 3',
  },
  {
    title: 'Ui/UX 4',
  },
];
 const { Header, Content, Footer, Sider } = Layout;
const More = () => {
   
const { Meta } = Card;
    return (
      <div className="site-card-border-less-wrapper">
          <Layout  >
      <Sider style={{ backgroundColor:'#f9f8f3',height:700, }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" >  <img style={{ backgroundColor:'white', }} src={Logo} className="adminlogo" alt="no image" /> </div>
        
        <Menu style={{ backgroundColor:'#f9f8f3',height:600, }}>
        <Menu.Item > <Link to='/'><MdDashboard/> Dashboard</Link></Menu.Item>
         <Menu.Item ><Link to={'/Book'}><MdManageAccounts /> Manage Teacher</Link></Menu.Item>
         <Menu.Item key='live'> <MdLiveTv/> Live Class</Menu.Item>
         <Menu.Item key='setting'><IoSettingsSharp /> Settings</Menu.Item>
         </Menu>
         <Button style={{ backgroundColor:'#f9f8f3',borderRadius:15,margin:30,}}>Join Course</Button>
      </Sider>
      </Layout>
        <Row  style={{
        width: 600,
        marginLeft:290,
        marginTop:-680,
        height:680,
        background:'#f9f8f3',
      }}gutter={[16, 16]}>
   
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
    <iframe src={videoyy} alt="no image"/>
    </Col>
    
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
    <Card
    style={{
      width: 300,
      marginLeft:200,
    }}
  >
    <List
  
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar />}
          title={item.title}
        
        />
      </List.Item>
    )}
  />
   
   
  </Card>
    </Col>
  </Row>    

      </div>  
    );
}

export default More;