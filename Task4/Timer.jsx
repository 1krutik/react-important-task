import React, {  useRef, useState } from 'react'

const Timer = () => {
    const [state,setState]=useState(0)
    const id = useRef(null);
    
const Timer=()=>{
id.current= setInterval(() => {
  setState((state)=>state+1)
}, 500);


}
const Reset =()=>{
  setState(0)
}
const StopBtn = () => {
  clearInterval(id.current);
};
  return (
    <div>
        <h1>Timer</h1>
<h1>{state}</h1>
        <button onClick={Timer}>Click</button>
        <button onClick={StopBtn}>Stop</button>
        <button onClick={Reset}>REset</button>
    </div>

  )
}

export default Timer
