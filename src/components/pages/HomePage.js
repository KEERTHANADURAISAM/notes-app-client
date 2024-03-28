import React from 'react'
import '../styles/Home.css'
import note from '../medias/order.gif'
import search from '../medias/paper.png'
const HomePage = () => {
  return (
    <div className='home-page'>
        <nav className='nav-main'>
        <div className='nav-head'>Notes</div>
            <ul className='nav-ul'>              
                
                <li><img src={search} alt='' className='search-icon'/></li>
                <li>SignIn</li>
                <li>SignUp</li>
            </ul>
        </nav>
        <div className='grid-div'>
        <div className='home-img-div'>
            
            <img src={note} alt='note img' className='note-img'/>
            
                </div>
        <ul className='planner-ul'>     
        <li>″You can always change your plan, but only if you have one.</li>
            <li> I’m a big believer in to-do lists.</li>
            <li> It helps us break life into small steps.</li>
            <li>I once put “get tenure” on my to-do list.</li>
            <li> That was naïve.</li>
            <li>The most useful to-do list breaks tasks into small steps.</li> 
            <li> It’s like when I encourage Logan to clean his room by picking up one thing at a time.</li>

        </ul>
        </div>
       
    </div>
  )
}

export default HomePage