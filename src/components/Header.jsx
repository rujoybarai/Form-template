import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="container border-bottom mb-3"> 
      <header className="d-flex justify-content-center py-3"> 
          <ul className="nav nav-pills"> 
            <li className="nav-item"><Link to="/" className="nav-link" aria-current="page" >Form Fil up</Link></li> 
            <li className="nav-item"><Link to="/profile" className="nav-link" >Profile</Link></li> 
            
            </ul> 
        </header> 
    </div>
  )
}
