import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Axios() {

    const [state,setState]=useState('')
    const [todo,setTodo]=useState([])

    useEffect(()=>{
        fetch()

    },[])
    async function fetch() {
        try{ 
        const response=await axios.get("http://localhost:3000/todo")
        setTodo(response.data)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
      <h1>Axios</h1>
      <button>Click</button>
      {
        todo.map((el,i)=>{
            return <li key={i}>{el.name}</li>
        })
      }
    </div>
  )
}
