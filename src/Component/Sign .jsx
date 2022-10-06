import React from 'react'
import  { useNavigate} from "react-router-dom"
import all from './all.css'
export default function Sign () {
    const [name,setName] =React.useState("") 
    const[email,setEmail] =React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate()
    const postData = async() =>{
        let data={
            "name":name,
            "email":email,
            "password":password,
            "todo":[]
        }
        let fetchData =  await fetch("http://localhost:8080/user",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}

        })
        
    }

    const handleSubmit = () =>{
       
        if(name.length != "" && email.length != "" && password.length != ""  ) {
            
            postData()
            alert("Account is Created")
            navigate("/login")
           
        }else{
           alert("Please Fill Correct Details") 
        }
        // console.log(email.length)
      
       
    }
     

  return (
    <div className='signup'>
        <h3>Sign-up</h3>
       <input className='name' type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
       <input className='name' value={email}  placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
       <input className='name' type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
       <input className='submit' type="submit"  onClick={handleSubmit} placeholder='Submit' />
    </div>
  )
}
