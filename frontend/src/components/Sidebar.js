import React from 'react';
import { FaCalendarAlt, FaUserMd, FaChartBar, FaCog } from 'react-icons/fa';

const menuItems = [
  { name: 'Appointments', icon: <FaCalendarAlt /> },
  { name: 'Medical History', icon: <FaUserMd /> },
  { name: 'Transaction Record', icon: <FaChartBar /> },
  { name: 'Data Analytics', icon: <FaChartBar /> },
  { name: 'Settings', icon: <FaCog /> }
];

function Sidebar({ setActivePage, activePage }) {
  return (
    <div style={{ width: '250px', background: '#1f2b37', color: 'white', padding: '20px' }}>
      <h3>🦷 RM Dental</h3>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
        {menuItems.map(item => (
          <li
            key={item.name}
            onClick={() => setActivePage(item.name)}
            style={{
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: activePage === item.name ? '#0f5e88' : 'transparent',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {item.icon} <span style={{ marginLeft: '10px' }}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
