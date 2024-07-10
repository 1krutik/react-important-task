import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../FireBase';


export default function Singup() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    function Singup() {
        const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   alert('success')
  })
  .catch((error) => {
   console.log(error)
  });
    }
  return (
    <div>
      
      <h1>Singup</h1>
      <input type="email"  placeholder='Enter Your Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password"  placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={Singup}>Submit</button>
    </div>
  )
}
