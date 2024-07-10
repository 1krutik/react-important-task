import React, { useState } from 'react'

const WithoutMemo = () => {

    const [count,setCount]=useState(0)
    const [renderCount,setRenderCount]=useState(0)


    const computeExpensiveValue=(num)=>{
        console.log("Computing")

        let result=0
        for(let i=0;i<100000000;i++){
            result +=num;

        }
        return result;
    }

    const result=computeExpensiveValue(count);
  return (
    <div>


        <h2>Without Memo Example</h2>
        <p>Count:{count}</p>
        <p>REsult{result}</p>
        <p>Render Count: {renderCount}</p>
        <button onClick={()=>setCount(count+1)}>Increament Count</button>
        <button onClick={()=>setRenderCount(renderCount+1)}>Increament Render Count</button>
      
    </div>
  )
}
export default WithoutMemo
