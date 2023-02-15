import React from 'react';
import { Link } from 'react-router-dom';
import videoyy from './images/yy.mp4';
import videocc from './images/cc.mp4';
import { Col, Row } from 'antd';
    function Coursesd(props){
        console.log(props)
    return (
        <div> 
      <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
    <iframe src={videoyy} alt="no image"/>
    </Col>
    
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>    
              
        </div>
        
    );
}

export default Coursesd;