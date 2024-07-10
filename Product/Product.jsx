import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div><br />
      <div>

        <b><Link to="electronic" className='p-2  text-decoration-none  text-dark'>Electronic</Link>
          <Link to="jewellery" className='p-2  text-decoration-none  text-dark' >Jewelery</Link>
        </b>
      </div><br />
      <Outlet />
    </div>
  )
}