import React from 'react'

import { BsBookFill,BsFillCalendarDayFill } from "react-icons/bs";

function EventCard(props) {
  return (
    <div className='event-card'>
        <BsFillCalendarDayFill style={{fontSize:'40px',color:'#fff'}} />
        <div className='event-detail'>
            
            <h3>Event Name</h3>
            <span>25 September 2022</span>
            <p>Join this event and get a chance to learn more.</p>
        </div>
        <button>Register Now</button>
    </div>
  )
}

export default EventCard;
