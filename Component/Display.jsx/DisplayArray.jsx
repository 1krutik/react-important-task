import React, { useState } from 'react'

const DisplayArray = () => {

    const [array, setArray] = useState(["Apple", "Banana", "Apricot", "Jackfruit", "Jujube", "Honeydew", "melon", "Kiwi", "Kabosu", "Kiwano", "Lime", "Lychee", "Longan", "Mango", "Mulberry", "Pear",])

    return (
        <div>

            <h1>Array Print</h1>

            {  
                array.map((item) => {
                    return   <ul>    
                    <li>{item}</li> </ul>
                    
                })
            
            }

        </div>
    )
}

export default DisplayArray