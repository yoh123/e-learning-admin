import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      navigate('/Mycourse')
   
      
    }
}
    return ( 
        <div className="login" onSubmit={createteacher}>
        <form action="">
            <label htmlFor="">email</label>
            <input type="text" 
             onChange={(e)=>setemail(e.target.value)
             }
             value={email}
            />
            <label htmlFor="">password</label>
            <input type="text"
               onChange={(e)=>setpassword(e.target.value)
               }
               value={password}
            />
             <button>login</button>
        </form>
        </div>
     );
}
 
export default Signin;