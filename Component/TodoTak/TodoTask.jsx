import React, { useState } from 'react'

const TodoTask = () => {
  const [state,setState]=useState("")
  const [data,setData]=useState([])

  const Data =(e)=>{
    setState(e.target.value)
   
  }

  const AddData=()=>{

    setData([...data,state])
    setState("")
 console.log(data)


  }
  const Delete=(index)=>{
   const Newvar=[...data]
   Newvar.splice(index,1)
setData(Newvar)
  }

  const Edit=(i)=>{
const newItem=prompt("ENter New Value")    
const Newvar=[...data]
Newvar[i]=newItem
setData(Newvar)

    
  }
  return (
    <div>
<input value={state} onChange={Data} placeholder='Enter Name' type="text" name="" id="" /><br />
<button onClick={AddData}>Click</button>

<br />

       {
         data.map((el,i)=>(
           <li key={i}> {el}
           
           
           
           <button onClick={()=>{Delete(i)}}>Delete</button>
           <button onClick={()=>{Edit(i)}}>Edit</button>

           </li>
           
           
           ))
}
       
    </div>
    
  )
}

export default TodoTask
