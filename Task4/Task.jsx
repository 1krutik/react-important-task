import React, {  useState } from 'react'

const Task = () => {

    const[state,setState]=useState(0)

    const Counter=()=>{
        setState(state+1)
      document.title=`${state}`

    }
    

  return (
    <div>
        <h1>Counter : {state}</h1>
<button className='btn btn-primary' onClick={Counter}>Click</button>

    </div>
  )
}

export default Task
