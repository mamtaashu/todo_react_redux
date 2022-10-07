import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { authData } from '../Redux/action';
import  { useNavigate} from "react-router-dom"
export default function Login() {
    const[email,setEmail] =React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = useSelector((state)=>state.user)
    
    const getData = async() =>{
        let getFetchData = await fetch(`http://localhost:8080/user`);
        let result = await getFetchData.json();
        result.forEach(element => {
             if(element.password==password && element.email==email){
                 dispatch(authData(element))
                 localStorage.setItem("user",JSON.stringify(authData(element)))
                 alert("Login Successfully")
                 navigate("/todo")
                
             }
           // else{
            //     alert("Please Enter Correct Details")
            //  }
        });

    }

    const handleLogin = () =>{
        if( email.length != "" && password.length != ""  ) {
            
            getData()
          
           
        }else{
           alert("Please Fill Correct Details") 
        }

        }

  return (
    <div className='signup'>
        <h3>Log-in</h3>
       <input className='name' type="email" value={email}  placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
       <input className='name' type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
       <input className='submit' type="submit"  onClick={handleLogin} placeholder='Submit' />
      
    </div>
  )
}
