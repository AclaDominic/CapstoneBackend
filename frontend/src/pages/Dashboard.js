import React from 'react';
import { logout } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      alert('Logged out successfully!');
      navigate('/login');
    } catch (error) {
      alert('Logout failed!');
    }
  };

  return React.createElement('div', null,
    React.createElement('h1', null, 'Welcome to Dashboard!'),
    React.createElement('button', { onClick: handleLogout }, 'Logout')
  );
}

export default Dashboard;
