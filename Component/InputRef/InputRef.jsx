import React, { useRef } from 'react'

const InputRef = () => {

    const inprefName=useRef(null)

    const focus=()=>{
        inprefName.current.focus();
        
    }
  return (
    <div className='Form'>
        <h1>Input Refrence Focus</h1>
        
        <input type="text" placeholder='Enter Name' ref={inprefName} name="" id="" />

        <button className='btn btn-primary' onClick={focus}>Focus Name</button>
    </div>
  )
}

export default InputRef
