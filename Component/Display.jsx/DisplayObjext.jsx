import React, { useState } from 'react'

const DisplayObject = () => {

    const [object, setObject] = useState({
        FirstName: "Kruik",
        LastName: "Panchal",
        Email: "Krutik@gmail.com",
        phone: "0123456789",
    })

    return (
        <div>
            <h1>Object Print </h1>
            <p>FirstName: {object.FirstName}</p>
            <p>LastName: {object.LastName}</p>
            <p>E-Mail: {object.Email}</p>
            <p>Phone: {object.phone}</p>
        </div>
    )
}

export default DisplayObject