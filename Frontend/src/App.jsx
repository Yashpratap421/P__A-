import React, { useContext } from 'react'
import { DataContext } from './Context/DataContext'  
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Details.jsx/Home';
import {Routes, Route} from 'react-router-dom';
import LoginUser from './Pages/Auth/LoginUser';


const App = () => {
  // const { data } = useContext(DataContext);

  return (
    <div className='main'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginUser />} />
        </Routes>
    </div>
  )
}

export default App;