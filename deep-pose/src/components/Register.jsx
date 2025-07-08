import React, { useState } from 'react';
// import { registerUser } from '../auth';
import { Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name: '', department: '', role: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || 'Sorry, something went wrong. Please try again later or contact support.');
      }
      setMessage('User registered! You can now log in.');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: 250, margin: '0 auto' }}>
      <h2>Register</h2>
      {['name', 'department', 'role', 'email'].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          style={{ marginBottom: 10, padding: 8 }}
          required
        />
      ))}
      <button type="submit" style={{ padding: 10 }}>Register</button>
      <p>{message}</p>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </form>
  );
}

export default Register;
