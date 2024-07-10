import React, { useContext } from 'react'
import C from './C'
import myContext from './Context'

const B = () => {
  const data=useContext(myContext)
  return (
    <div>


<h1>B copmponent</h1>      
<p>{data.email}</p>
      
      <C/>
    </div>
  )
}

export default B
