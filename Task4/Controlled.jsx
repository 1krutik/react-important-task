import React, { useState } from 'react'

const Controlled = () => {
    const [name,setName]=useState("")
    const [surname,setSurName]=useState("")
    const [email,setEmail]=useState("")

    const FirstName=(e)=>{
        setName(e.target.value)

    }

    const SurName=(e)=>{
        setSurName(e.target.value)

    }
    const Email=(e)=>{

        setEmail(e.terget.value)
    }


    const setData=()=>{
        if(!FirstName){
          return  alert("Enter The Name First....")
        }
        else if(!SurName){
            return  alert("Enter The Surname First....")
        }
        else if(!Email){    
            return  alert("Enter The Email First....")  
            }
            else{
                alert("Form Submited Successfully")
                console.log({name:name,   
                    surname:surname,
                    email:email,
                })
            }

    }


 
  return (
    <div>
        <input type="text" value={name} placeholder="Enter Name" onChange={FirstName} name="" id=""/>
        <input type="text" value={surname} placeholder="Enter Surname" name="" onChange={SurName} id=""/>
        <input type="email" value={email} placeholder="Enter Email" name="" onChange={Email} id=""/>
        <button onClick={setData}>Click</button>

    </div>
  )
}

export default Controlled
