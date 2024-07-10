import React, { useState } from 'react'

const Todoprac = () => {
    
    const [state,setState]=useState("")
    const [Data,setData]=useState([])
    
    const Todo=(e)=>{
        setState(e.target.value)

    }
    const AddTodo=()=>{
        setData([...Data,state])
        setState("")
    }

    const DeleteTodo=(i)=>{
    const newvar=[...Data]
    newvar.splice(i,1)
    setData(newvar)


    }
    const EditTodo=(i)=>{
        const  newvar=prompt("Enter New value")
       let kalu=[...Data]
       kalu[i]=newvar
        setData(kalu)
        
    }
  return (
    
      <div>
        

    <input type="text" name="" id="" onChange={Todo} />
    <button onClick={AddTodo}>Click</button>
    {
        <ul>
            {
                Data.map((el,i)=>(<li key={i}>{el}
                
                <button onClick={()=>DeleteTodo(i)}>Delete</button>
                <button onClick={()=>EditTodo(i)}>
                    Edit
                </button>
                </li>))
            }
        </ul>
    }
        </div>
        
  )
}

export default Todoprac