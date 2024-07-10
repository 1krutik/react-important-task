import React, { useState } from 'react'

const ApiRandomUser = () => {

  const [state,setState]=useState({
    Name:"Krutik",
    City:"Ahmedabad",
    number:"9586670520",
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s",

  })

  const userData=()=>{
    fetch('https://randomuser.me/api/')
    .then((res)=>res.json())
    .then((userData)=>{
      setState({
        Name:userData.results[0].name.first,
        City:userData.results[0].location.city,
        number:userData.results[0].phone,
          Image:userData.results[0].picture.large,
      })
    })
  }
  return (
    <div>
        <h1>Random User</h1>
        <p>Name: {state.Name}</p>
        <p>City: {state.City}</p>
        <p>Number: {state.number}</p>
        <img src={state.Image} alt="" />
        <button onClick={userData}>Click</button>
    </div>
  )
}

export default ApiRandomUser
