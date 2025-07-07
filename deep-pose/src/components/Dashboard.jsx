import React from 'react';
import { getCurrentUser, logoutUser } from '../auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  if (!user) return <p>Please log in</p>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Department: {user.department}</p>
      <p>Role: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
