import React, { useContext } from 'react'
import { DataContext } from './Context/DataContext'  
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Details.jsx/Home';
import {Routes, Route} from 'react-router-dom';
import LoginUser from './Pages/Auth/LoginUser';
import RegisterUser from './Pages/Auth/RegisterUser.jsx'


const App = () => {
  // const { data } = useContext(DataContext);

  return (
    <div className='main'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginUser />} />
          <Route path='/register' element={<RegisterUser/>} />
        </Routes>
    </div>
  )
}

export default App;