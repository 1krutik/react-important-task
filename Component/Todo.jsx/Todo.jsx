import React, { useState } from 'react'

const Todo = () => {
  const [state,setState]=useState("")
  const [data,setData]=useState([])

  const Todo=(e)=>{
    setState(e.target.value);

  }
  const AddTodo=()=>{
    setData([...data,state])
  }

  const DeletTodo=(i)=>{

    if (setData<0) {
      
      
    }
    const newdata=[...data]
    newdata.splice(i,1)
    setData(newdata)   
    
 
  }
  return (
    <div>
      <h1>Todo</h1>
        <input type="text" placeholder='Enter Name : ' value={state} onChange={Todo} name="" id="" />
        <button className='btn btn-primary' onClick={AddTodo}>Click</button>


        <ul>
          {
            data.map((el,i)=>(
              <li key={i}>{el}
              
              <button  onClick={()=>DeletTodo(i)} className='btn btn-primary'>Delete</button>
              
              </li>
            )

            )
          }
        </ul>

    </div>
  )
}

export default Todo


 