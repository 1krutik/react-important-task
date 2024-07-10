import React, { useMemo, useState } from 'react'

 const Memo = () => {

    const [count,setCount]=useState(0)
    const [input,setInput]=useState('')

    function exp(num){
        console.log("Hello")
        return num*4

    }

    const exp1= useMemo(()=>exp(count),[count])
    function addTodo(){
        setInput(input) 

    }
  return (
    <div>
      <h1>Memo</h1>
      <h1>
        {count}
      </h1>
      <h1>{exp1}</h1> 
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <input type="text" placeholder='Enter Number ' onChange={(e)=>setInput(e.target.value)} name="" id="" />
      <button onClick={addTodo} >Add</button>
    </div>
  )
}

export default Memo
