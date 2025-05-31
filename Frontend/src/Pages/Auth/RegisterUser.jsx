import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../public/Css/Auth/RegisterUser.css';
import registerpic from '../../../public/images/register.png';

const RegisterUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);

    // TODO: Add registration API call here
    // Example:
    // const res = await axios.post('/api/register', formData);
    // if (res.success) navigate('/login');
  };

  return (
    <div className='register-container'>
      <div className="register-left">
        <img src={registerpic} alt="Register Illustration" />
      </div>
      <div className="register-right">
        <div className="register-box">
          <p>Create Your Account</p>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-input">
              <label htmlFor="name">Full Name :</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="register-input">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="register-input">
              <label htmlFor="phone">Phone Number :</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="register-input">
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="register-btn" type="submit">REGISTER NOW</button>
          </form>
          <p id="register-switch">
            Already have an account?{' '}
            <span onClick={() => navigate('/login')}>Login Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
