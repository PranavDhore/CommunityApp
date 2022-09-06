import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
    
    const location = useLocation();

    const linkStyle = {
        display:'block',
        padding: '6px 8px 6px 16px',
        textDecoration: 'none',
        fontSize: '22px',
        color: '#fff'

    }

    const handleTab = (path) =>{

        if(path == location.pathname){
            return 'activeTab';
        }

        return '';

    }
    

  return (
    <div className='sidebar'>
        <Link style={linkStyle} className={handleTab('/')} to='/'>Home</Link>
        <Link style={linkStyle} className={handleTab('/groups')}  to='/groups'>Groups</Link>
        <Link style={linkStyle} className={handleTab('/events')}  to='/events'>Events</Link>
    </div>
  )
}

export default SideBar;