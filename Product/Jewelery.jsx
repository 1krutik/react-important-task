import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Jewelery3() {
    const[state,setState]=useState([])
    const[ascending,setAscending] = useState(true)
    const[search,setSearch] = useState("")

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res)=>res.json())
        .then((data)=>{
            setState(data)
        })
    },[])

    function HandleSort(){
        const sortData = [...state]
        if(ascending){
            sortData.sort((a,b)=>a.price - b.price)
        }else{
            sortData.sort((a,b)=>b.price-a.price)
        }

        setState(sortData)
        setAscending(!ascending)
    }

    function HandleChange(e){
        setSearch(e.target.value)
    }

    const filterData = state.filter((el)=>
    el.title.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div>
        <h1>jewelery</h1>
        <input type="text" placeholder='search' onChange={HandleChange} />
        <button onClick={HandleSort}>sort by {ascending ? "ascending" : "decending"} by price</button>
       {
        filterData.length > 0? (
           <ol>
             {
                filterData.map((el)=>{
                return<>
                <Link to={`/productDetail/${el.id}`}><li>{el.title}</li></Link>
                <img src={el.image} alt="" className='w-25' />
                <p>{el.price}</p>
                </> 
                })
            }
           </ol>
          
        ):(
            <div><h1>no product</h1></div>
        )
       }
    </div>
  )
}
//state management tool