import React, { useState } from 'react'

import './css/GroupsCard.css';

import { BsArrowDownCircle } from 'react-icons/bs';

function GroupsCard({name,description}) {

    const [isOpen,setOpen] = useState(false);

    const handleClick = () =>{

        setOpen(!isOpen);

    }

  return (
    <div className='groups-card'>
        <div className='group-card-btn' onClick={handleClick}>
            <h3>{name}</h3>
            <BsArrowDownCircle className='icon-size' />
        </div>
        <div className='groups-card-info' style={isOpen ? {display:'block'} : {display:'none'}}>
            <p>{description}</p>
            <button>Join Now</button>
        </div>
    </div>
  )
}

export default GroupsCard;
