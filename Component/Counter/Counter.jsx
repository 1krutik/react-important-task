import React, { useState } from 'react'

const Counter = () => {

    const [state,setState]=useState(0)
    const increment = () => {   
        setState(state+1)
    }
    const Decrement =()=>{
        setState(state=>{


          if (state <= 0 ) {
            alert("Timer is 0 ")
            return 0
            
          }
          return state-1
        })

    }
  return (
    <div  className='counter'>
        <h1>Counter : {state}</h1>
        <button className='btn btn-primary' onClick={increment}>Increment</button>
        <button className='btn btn-primary' onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter
