import React from 'react'
import '../../../public/Css/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className="webicon"></div>
      <button onClick={()=> navigate('/login')}>
        Get Started
      </button>
    </div>
  )
}

export default Navbar