import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { data } from '../data';
import Base from './Base';
import Card from './Card';
import OnePlatform from './img/onePlatform.png';



function Home() {

  const [groupsData,setGroupData] = useState(data);

  return (
    <Base>
        <img src={OnePlatform} style={{width:'100%'}} alt='Company Title' />
        <div className='main-home-content'>
          <h1>Build Your Community</h1>
          <p>From open discussion to gated content. Create different groups for all kind of use case, like coaching, mentoring, courses, forums, live classes etc
          Design your community to match your branding. Make it feel like your own product with complete customization & integration, including mobile app.
          </p>
        </div>

        <div className='show-groups'>
          {groupsData.map((data,index)=>{
            return (
              <Card key={index} name={data.name} description={data.description} id={data.id} imgUrl={data.imgUrl} />
            )
          })}
        </div>
    </Base>
  )
}

export default Home;