import React from 'react'
import {Link} from 'react-router-dom';
import Base from './Base';
import OnePlatform from './img/onePlatform.png';

import group1 from './img/group1.jpg';
import group2 from './img/group2.jpg';
import group3 from './img/group3.jpg';
import group4 from './img/group4.png';
import group5 from './img/group5.png';
import GroupsCard from './GroupsCard';

function Groups() {
  return (
    <Base>
        <img src={OnePlatform} style={{width:'100%'}} alt='Company Title' />
        <div className='main-home-content'>
          <h1>Explore Various Groups Around You</h1>
          <p>From open discussion to gated content. Create different groups for all kind of use case, like coaching, mentoring, courses, forums, live classes etc
          Design your community to match your branding. Make it feel like your own product with complete customization & integration, including mobile app.</p>
          <button className='group-join-now-btn'>Join Now</button>
        </div>

        <div className='group-categories'>
          <div className='groups'>
            <img src={group1} alt='Group Image Loading...' />
            <p>Music</p>
          </div>
          <div className='groups'>
            <img src={group2} alt='Group Image Loading...' />
            <p>Programming</p>
          </div>
          <div className='groups'>
            <img src={group3} alt='Group Image Loading...' />
            <p>Environment</p>
          </div>
          <div className='groups'>
            <img src={group4} alt='Group Image Loading...' />
            <p>Travelling</p>
          </div>
          <div className='groups'>
            <img src={group5} alt='Group Image Loading...' />
            <p>Reading</p>
          </div>
        </div>

        <div className='groups-main-card'>
          <h1>Groups</h1>
          <GroupsCard name='Music' 
          description='A music community is a group of people involved in a given type of music. Typically such a community has an informal, supportive structure. In the past such groups have typically developed within a town or school, where the members can meet physically.' />
          <GroupsCard name='Programming' 
          description='Communities are usually built on shared struggles of individuals learning in a particular region, and the goals of each community differ per the individuals collective needs. Over the years, these developer communities have grown across the world with different goals and missions but still with the general aim of providing a platform for developers to learn, interact, share ideas, support each other and grow.' />
          <GroupsCard name='Travelling' 
          description='A Travelling community is a group of people involved in a given type of Travelling. Typically such a community has an informal, supportive structure. In the past such groups have typically developed within a town or school, where the members can meet physically.' />
        
        </div>
        
    </Base>
  )
}

export default Groups;