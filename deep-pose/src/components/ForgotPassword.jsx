import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail, updatePassword } from '../auth'; // Assuming you will create these functions

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = getUserByEmail(email);
    if (user) {
      updatePassword(email, newPassword);
      setMessage('Password reset successful! You can now log in with your new password.');
    } else {
      setMessage('No account found with this email address.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          style={{ marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ padding: 10 }}>Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;
