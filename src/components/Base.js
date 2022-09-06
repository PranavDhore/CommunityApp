import React, { Children } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import SideBar from './SideBar';



function Base(props) {
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='main-container'>
                <SideBar />
                <div className='main-content'>
                    {props.children}
                </div>
            </div>
            
            
        </div>
        <Footer />
    </div>
  )
}

export default Base;
