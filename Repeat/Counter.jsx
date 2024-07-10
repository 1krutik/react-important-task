import { set } from 'firebase/database'
import React, { useState } from 'react'

const Counter = () => {

    const [state,steState]=useState(0)
const Counter=()=>{
    steState(state+1)
}
  return (
    <div>Counter
    <h1> Counter is :{state}</h1>

<button onClick={Counter}>Click</button>

    </div>
  )
}

export default Counter