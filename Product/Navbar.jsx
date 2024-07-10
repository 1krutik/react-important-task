import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
<div>
            <div  className='w-100'  style={{ backgroundColor: "black", display: "flex", color: "white",position:"fixed", justifyContent: "space-around", alignItems: "center", padding: "10px 0" }}>
                <h1 style={{ margin: "0" }}>Zudio</h1>
                <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: "0", padding: "0" }}>
                    <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "white" }} to="/services">Services</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "white" }} to="/men">Men</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "white" }} to="/women">Women</Link></li>
                    <li><Link style={{ textDecoration: "none", color: "white" }} to="/product">Product</Link></li>
                </ul>
            </div>

            
        </div>
  )
}
