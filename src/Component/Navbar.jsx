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
    <div className='navbar'>
       {
        login.email ? 
         <Link to="/todo" >Todo</Link> : null
       }
     {
      login.email? null :  <Link className='sign' to="/sign"   >SignUp</Link>
     }
     
     {
      login.email?  <Link className='sign' to="/login"  onClick={handleLogout} >Logout</Link> :  <Link className='sign' to="/login"   >LogIn</Link> 
     }
     {
      login.logout?  <Link className='sign' to="/login"   >LogIn</Link> : null
     }

     


    
      
    </div>
  )
}
