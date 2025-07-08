import React, { useState } from 'react';
import { getCurrentUser, logoutUser } from '../auth';
import { useNavigate } from 'react-router-dom';
import VideoUploader from './VideoUploader';
import EditInformation from './EditInformation';


function Dashboard() {
  const [showEdit, setShowEdit] = useState(false);
  const [user, setUser] = useState(getCurrentUser());
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  if (!user) return <p>Please log in</p>;

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleEditSave = (newInfo) => {
    setUser({ ...user, ...newInfo });
    setShowEdit(false);
    // Optionally, update user info in backend/localStorage here
  };

  const handleEditCancel = () => {
    setShowEdit(false);
  };

  return (
    <div>
      {showEdit && (
        <EditInformation user={user} onSave={handleEditSave} onCancel={handleEditCancel} />
      )}
      <h2>Welcome, {user.name}</h2>
      <p>Department: {user.department}</p>
      <p>Role: {user.role}</p>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleEdit}>Edit information</button>
      </div>
      <h3>To get started, upload your video.</h3>
      <VideoUploader />
    </div>
  );
}

export default Dashboard;
