import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo(){

    const [newtodo,setaddtodo]=useState('')
    const [n,t]=useState('')

    const [currentodo,setcurrenttodo]=useState([])
    let storage =  JSON.parse(localStorage.getItem("user"))
    let id = storage.payload.id;
 
   
useEffect(()=>{
    axios.get(`http://localhost:8080/user/${id}`)
    .then((e)=>{
        t(e.data)
        if(e.data.todo){
        setcurrenttodo(e.data.todo)
        
         } else{
        setcurrenttodo([])
         }
    }).catch((e)=>console.log(e))
    
},[])




const update=()=>{
  let allTodos = ([...currentodo,newtodo])
  setcurrenttodo(allTodos)
    console.log(currentodo,newtodo)
     axios.patch(`http://localhost:8080/user/${id}`,{
        todo:allTodos
     }).then(e=>console.log(e.data))
      setaddtodo("")
     .catch((e)=>console.log(e))
    
}



const handleDelete = async(id)=>{
    let allTodos = [...currentodo];

    let data=await fetch(`http://localhost:8080/user/${id}`,{
        method:"DELETE"
    })
    

    
    setcurrenttodo(allTodos)

    
}


return<>
<h1>Todo</h1>
<input type={'text'}  value={newtodo} onChange={(e)=>setaddtodo(e.target.value)}/>

<button onClick={update}>Add Todo</button>

{
  currentodo?.map((e,i)=>{
        return(
            <div key={i}>
                <p  > {e}
                <button onClick={()=>handleDelete(i)} > Delete</button>
                </p>
            </div>
        )
    })
        

        



}

</>

 }

