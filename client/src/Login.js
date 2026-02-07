import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.msg || "Login Failed");
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '0 50px', textAlign: 'center' }}>
      <h1 style={{ margin: '0' }}>Sign In</h1>
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
      <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
      <button type="submit" style={{ borderRadius: '20px', border: '1px solid #1abc9c', backgroundColor: '#1abc9c', color: '#FFFFFF', fontSize: '12px', fontWeight: 'bold', padding: '12px 45px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '10px' }}>Sign In</button>
    </form>
  );
};

export default Login;