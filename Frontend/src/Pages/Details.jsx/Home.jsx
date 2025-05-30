import React from 'react'
import '../../../public/Css/Details.css'
import robot from '../../../public/images/Robot.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="page1">
        <div className="left">
          <h1><span>Hi!</span> Welcome to </h1>
          <h1>First Virtual Assistent</h1>
          <p>I am help you t manage your daiy task, and make your day better </p>
        </div>
        <div className="right">
          <img src={robot} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home