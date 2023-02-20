import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { FcGoogle} from "react-icons/fc";
import'./signin.css'

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';


const Signin = () => {
    const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [error, seterror] = useState();
const navigate=useNavigate()
const createteacher=async(e)=>{
    e.preventDefault()
    const post={email,password}
    const response=await fetch('/auth/instractorLogin',{
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
    
      setemail('')
      setpassword('')
      seterror(null)
      localStorage.setItem("jwt",response.token)
      localStorage.setItem("user",JSON.stringify(response.user))
      navigate('/dashboard')
   
      
    }
}
    return ( 
        <div className="signin" onSubmit={createteacher}>
        <form className="signinform" action="">
           <h4 className="signinh">Sign In</h4>
           <p className='signinp'>Get started with your Google Account</p>
           <p className="signinp2"><a><FcGoogle style={{width:30,height:25}}/>Or sign with Google</a></p>
            <label className="signinlabelemail" htmlFor="">Email</label>
           <div className="signinemail">
            <input className="sss" type="email" 
             onChange={(e)=>setemail(e.target.value)
             }
             value={email} placeholder="email"
            /></div>
            <label className="signinlabelpas" htmlFor="">Password</label>
            <div className="signinpassword">
            
      <Input.Password style={{
        height:52,
        marginLeft:4,
        width:290
      }}
          onChange={(e)=>setpassword(e.target.value)
        }
        value={password} placeholder="password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
           </div>
                        <a className="signina">forgot password</a>
             <button className="signinbtn">Sign in</button>
        </form>
        </div>
     );
}
 
export default Signin;