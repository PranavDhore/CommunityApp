import React from 'react'
import './css/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <span><a href='#' style={{color:'#fff'}}><span style={{color:'#6462f8'}}>Mac-O</span> Community</a></span>
        </div>
        <div className='navbar-login'>
            <button>Login</button>
            <button className='sign-up-btn'>Sign Up</button>
        </div>
    </nav>
  )
}

export default  Navbar;
