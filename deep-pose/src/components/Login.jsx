import React, { useState } from 'react';
import { loginUser } from '../auth';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    try {
      loginUser(email);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width:250, margin: '0 auto' }}>
      <h2>Login</h2>
      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginBottom: 10, padding: 8 }}
        required
      />
      <button type="submit" style={{ padding: 10 }}>Login</button>
      <p>{error}</p>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </form>
  );
}

export default Login;
