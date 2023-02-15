import React, { Component } from 'react';
import Logo from './components/common/logo.PNG'

import { AiOutlineAppstore } from "react-icons/ai";




class Nav extends Component {
  

  render() {

    return(
     <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbor">
  <div class="container-fluid">
   <img src={Logo} className="logo" alt="no image" />  <AiOutlineAppstore />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <a class="nav-link active" href="#">Category
            
          </a></li>
          <li class="nav-item">
          <a class="nav-link active" href="#">Home
            
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Programs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Certification</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Resources</a>
        </li>
        
      </ul>
      
      <button class="btn btn-secondarys my-2 my-sm-0 btt" type="submit">Sign in</button>
      <button class="btn btn-secondary my-2 my-sm-0 " type="submit">Sign up</button>
      
      
      
        
      
    </div>
  </div>
</nav>

</div>
    );
  }
}

export default Nav;