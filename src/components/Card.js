import React from 'react'
import './css/Card.css';

import test from './img/group1.jpg'

function Card(props) {
  const imgUrl = require(`./img/${props.imgUrl}`);
  console.log(imgUrl)
  return (
    <div className='card'>
        <div className='card-title'>
            <h3>{props.name}</h3>
        </div>
        <div className='card-data'>
            <img src={imgUrl} style={{width:'70%',height:'150px',borderRadius:"10px"}} alt='Logo Loading...' />
            <p>{props.description}</p>
        </div>
        <div className='join-now'>
            <button>Join Now</button>
        </div>
        
        
    </div>
  )
}

export default Card;