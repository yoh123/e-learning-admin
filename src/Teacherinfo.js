import React, { Component,useState } from 'react';
import Logo from './images/react15.mp4'
import videoyy from './images/yy.mp4';
import videocc from './images/cc.mp4';
import videodd from './images/dd.mp4';
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
 import { FcDocument} from "react-icons/fc";
import { GrDocumentPdf,GrDocumentZip } from "react-icons/gr";
import {  Modal } from 'antd';
import { BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
const Teacherinfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
   
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <div>
            <div className="site-card-wrapper">
    <Row gutter={16} >
    <Col xs={23} sm={16} md={12} lg={8} xl={10}>
        <Card style={{  backgroundColor:'#e6f0f0',}} title="Video" bordered={false}><Button style={{
          float:'right',
          marginTop:-70,
          borderRadius:15,
          backgroundColor:'#FDB137',
          color:'white',
          fontWeight:'bold'
        }}>See All</Button>
        <Button type="primary" onClick={showModal}>
    <video style={{
        width: 300,

        height:300,
        
      }} src={Logo} alt="no image" />
      </Button>
      <Modal  style={{backgroundColor:'#e6f0f0'}}title="Design video" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <iframe src={videoyy} alt="no image"/>
      </Modal>
      <Button type="primary" onClick={showModal}>
      <span>OmK</span><video style={{
        width: 300,

        height:300,
        
      }} src={videocc} alt="no image" />
      </Button>
      <Modal  style={{backgroundColor:'#e6f0f0'}}title="Design video" open={isModalOpen}  onCancel={handleCancel} footer={null}>
        <iframe src={videoyy} alt="no image"/>
      </Modal>
      <Button type="primary" onClick={showModal}><span>OmK</span>
    <video style={{
        width: 300,

        height:300,
        
      }} src={videoyy} alt="no image" />
      </Button>
      <Modal  style={{backgroundColor:'#e6f0f0'}}title="Design video" open={isModalOpen}  onCancel={handleCancel} footer={null}>
        <iframe src={Logo} alt="no image"/>
      </Modal>


      <Button type="primary" onClick={showModal}><span>OmK</span>
    <video style={{
        width: 300,

        height:300,
        
      }} src={videoyy} alt="no image" />
      </Button>
      <Modal  style={{backgroundColor:'#e6f0f0'}}title="Design video" open={isModalOpen} footer={null} onCancel={handleCancel}>
        <iframe src={Logo} alt="no image"/>
      </Modal>
        </Card>
      </Col>
      
      <Col xs={23} sm={16} md={12} lg={8} xl={10}>
        <Card  style={{  backgroundColor:'#e6f0f0',}} title="Document" bordered={false}><Button style={{
          float:'right',
          marginTop:-70,
          borderRadius:15,
          backgroundColor:'#FDB137',
          color:'white',
          fontWeight:'bold'
        }}>See All</Button>
        <GrDocumentPdf style={{
        width: 300,

        height:200,
        marginBottom:20
        
      }}/> <Button
      style={{
        float:'right',
        marginTop:65,
        borderRadius:15,
        marginRight:60,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}> View </Button><Button
      style={{
        float:'right',
        marginTop:65,
        borderRadius:15,
        marginRight:-140,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}>  Delete</Button>
        <GrDocumentZip style={{
        width: 300,

        height:200,
        
      }}/> <Button
      style={{
        float:'right',
        marginTop:45,
        borderRadius:15,
        marginRight:60,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}> View </Button><Button
      style={{
        float:'right',
        marginTop:45,
        borderRadius:15,
        marginRight:-140,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}>  Delete</Button>
        <FcDocument style={{
        width: 300,

        height:200,
        
      }}/> <Button
      style={{
        float:'right',
        marginTop:95,
        borderRadius:15,
        marginRight:60,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}> View </Button><Button
      style={{
        float:'right',
        marginTop:93,
        borderRadius:15,
        marginRight:-140,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}>  Delete</Button>

<GrDocumentPdf style={{
        width: 300,

        height:200,
        marginBottom:20
        
      }}/> <Button
      style={{
        float:'right',
        marginTop:65,
        borderRadius:15,
        marginRight:60,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}> View </Button><Button
      style={{
        float:'right',
        marginTop:65,
        borderRadius:15,
        marginRight:-140,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}>  Delete</Button>
        <GrDocumentZip style={{
        width: 300,

        height:200,
        
      }}/> <Button
      style={{
        float:'right',
        marginTop:45,
        borderRadius:15,
        marginRight:60,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}> View </Button><Button
      style={{
        float:'right',
        marginTop:45,
        borderRadius:15,
        marginRight:-140,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}>  Delete</Button>
        <FcDocument style={{
        width: 300,

        height:200,
        
      }}/> <Button
      style={{
        float:'right',
        marginTop:95,
        borderRadius:15,
        marginRight:60,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}> View </Button><Button
      style={{
        float:'right',
        marginTop:93,
        borderRadius:15,
        marginRight:-140,
        backgroundColor:'#FDB137',
        color:'white',
        fontWeight:'bold'
       
      }}>  Delete</Button>
        </Card>
      </Col>
    </Row>
    
  </div>
 </div>
    );
}

export default Teacherinfo;