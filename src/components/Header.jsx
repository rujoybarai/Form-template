import React from 'react'

export default function Header({showForm, setShowForm}) {
  return (
    <div className="container border-bottom mb-3"> 
      <header className="d-flex justify-content-center py-3"> 
          <ul className="nav nav-pills"> 
            <li className="nav-item"><a href="#" className={`nav-link ${showForm=== 'Form' ? 'active' : ''}`} aria-current="page" onClick={() => setShowForm('Form')}>Form Fil up</a></li> 
            <li className="nav-item"><a href="#" className={`nav-link ${showForm === 'Profile' ? 'active' : ''}`} onClick={() => setShowForm('Profile')}>Profile</a></li> 
            
            </ul> 
        </header> 
    </div>
  )
}
