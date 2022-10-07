import React from 'react'
import  { Link} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import all from './all.css'
import axios from 'axios'
import { authLogout } from '../Redux/action';
export default function Navbar() {
    const login =useSelector((state=>state.user));
    const dispatch = useDispatch();
     
    // console.log(login.id)

    const handleLogout = () =>{
     dispatch(authLogout())

     axios({
      method:"PATCH",
      url:`http://localhost:8080/user${login.id}`,
      data:{
        login:false
      }
    });



    }
  return (
    <div style={{display:'flex'}} className='navbar'>

      {
        login.email?null : <div className='todo'>
        <h1>Todo</h1>
        </div>
      }
      

<div className='other'>
       {
        login.email ? 
         <Link  className='todo' to="/todo" >Todo</Link> : null
       }
     {
      login.email? null :  <Link className='sign' to="/sign"   >SignUp</Link>
     }
     
     {
      login.email?  <Link className='loginlink' to="/login"  onClick={handleLogout} >Logout</Link> : <Link  to="/login" className='loginlink'  >Login</Link>   
     }
     {/* {
      login.logout?  <Link className='login' to="/login"   >LogIn</Link> : null
     } */}

     


</div>


      
    </div>
  )
}
