import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Base from './Base';

import OnePlatform from './img/onePlatform.png';

import { FaMicrophone } from "react-icons/fa";
import { BsBookFill,BsFillCalendarDayFill } from "react-icons/bs";
import EventCard from './EventCard';
import eventNewData from '../eventData';


function Events() {

  const [eventData,setEventData] = useState(eventNewData);

  return (
    <Base>
        <img src={OnePlatform} style={{width:'100%'}} alt='Company Title' />
        <div className='main-home-content'>
          <h1>Grow With Your Community</h1>
          <p>From open discussion to gated content. Create different groups for all kind of use case, like coaching, mentoring, courses, forums, live classes etc
          Design your community to match your branding. Make it feel like your own product with complete customization & integration, including mobile app</p>

        </div>
        <div className='events-details'>
          <div className='event-detail-card'>
            <BsBookFill style={{fontSize:'40px',color:'#fff'}} />
            <h3>Conference Directory</h3>
            <button className='event-button'>Learn More</button>
          </div>
          <div className='event-detail-card'>
            <FaMicrophone style={{fontSize:'40px',color:'#fff'}} />
            <h3>Guest Information</h3>
            <button className='event-button'>Learn More</button>
          </div>
          <div className='event-detail-card'>
            <BsFillCalendarDayFill style={{fontSize:'40px',color:'#fff'}} />
            <h3>Conference Directory</h3>
            <button className='event-button'>Learn More</button>
          </div>
        </div>

        <div className='upcoming-events'>
          <h1>Upcoming Events</h1>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        
    </Base>
  )
}

export default Events;