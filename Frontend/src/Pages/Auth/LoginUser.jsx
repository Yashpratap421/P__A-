import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../public/Css/Auth/LoginUser.css';
import loginpic from '../../../public/images/login.png';

const LoginUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // TODO: Add login API call here
    // Example:
    // const res = await axios.post('/api/login', formData);
    // if (res.success) navigate('/dashboard');
  };

  return (
    <div className='loginuser'>
      <div className="left">
        <img src={loginpic} alt="Login Illustration" />
      </div>
      <div className="right">
        <div className="border">
          <p>Login Your account</p>
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor='email'>Email :</label>
              <input
                type="email"
                name="email"
                placeholder='Enter your valid email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="password">
              <label htmlFor='password'>Password :</label>
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">LOGIN NOW</button>
          </form>
          <p className='regis'>
            New User? <span onClick={() => navigate('/register')}>Register Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;