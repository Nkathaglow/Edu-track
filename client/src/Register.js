import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
  
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: '', role: 'student'
  });

  const { name, email, password, confirmPassword, role } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Passwords do not match!");
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
      alert(res.data.msg);
      // Logic for the flip can be handled by the parent or by navigating
    } catch (err) {
      alert(err.response?.data?.msg || "Registration Failed");
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '0 50px', textAlign: 'center' }}>
      <h1 style={{ margin: '0' }}>Create Account</h1>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
      <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
      <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={onChange} required style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }} />
      <select name="role" value={role} onChange={onChange} style={{ backgroundColor: '#eee', border: 'none', padding: '12px 15px', margin: '8px 0', width: '100%' }}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button type="submit" style={{ borderRadius: '20px', border: '1px solid #1abc9c', backgroundColor: '#1abc9c', color: '#FFFFFF', fontSize: '12px', fontWeight: 'bold', padding: '12px 45px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '10px' }}>Sign Up</button>
    </form>
  );
};

export default Register;