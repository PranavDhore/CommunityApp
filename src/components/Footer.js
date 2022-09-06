import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className='logo'>
            <span><a href='#' style={{color:'#fff'}}><span style={{color:'#6462f8'}}>Mac-O</span> Community</a></span>
        </div>
        <div className='footer-links'>
            <Link className='footer-link-style' to=''>Home</Link>
            <Link className='footer-link-style' to=''>Privacy Policy</Link>
            <Link className='footer-link-style' to=''>Groups</Link>
            <Link className='footer-link-style' to=''>Terms of Service</Link>
            <Link className='footer-link-style' to=''>Events</Link>
            <Link className='footer-link-style' to=''>Login</Link>
        </div>
        <p>© 2022 Mac-O Community All rights reserved.</p>
    </footer>
  )
}

export default Footer;