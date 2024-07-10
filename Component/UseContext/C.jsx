import React, { useContext } from 'react'
import myContext from './Context'

const C = () => {

    const data=useContext(myContext)
  return (
    <div>
      <h1>C component</h1>
      <p>{data.name}</p>
    </div>
  )
}

export default C
