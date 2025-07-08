import React, { useState } from 'react';

function EditInformation({ user, onSave, onCancel }) {
  const [name, setName] = useState(user.name || '');
  const [department, setDepartment] = useState(user.department || '');
  const [role, setRole] = useState(user.role || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, department, role });
  };

  return (
    <div className="edit-info-modal" style={{ background: 'rgba(0,0,0,0.2)', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '1rem', minWidth: 320, boxShadow: '0 2px 16px 0 rgba(0,0,0,0.12)' }}>
        <h3>Edit Information</h3>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', marginTop: 4, marginBottom: 12 }} />
        </label>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Department:
          <input value={department} onChange={e => setDepartment(e.target.value)} style={{ width: '100%', marginTop: 4, marginBottom: 12 }} />
        </label>
        <label style={{ display: 'block', marginBottom: 8 }}>
          Role:
          <input value={role} onChange={e => setRole(e.target.value)} style={{ width: '100%', marginTop: 4, marginBottom: 16 }} />
        </label>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button type="button" onClick={onCancel} style={{ background: '#eee', border: 'none', borderRadius: 4, padding: '0.5rem 1.2rem', cursor: 'pointer' }}>Cancel</button>
          <button type="submit" style={{ background: '#003366', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1.2rem', cursor: 'pointer' }}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditInformation;
