import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';
import {
  FaSearch,
  FaTooth,
  FaUserMd,
  FaUsers,
  FaEnvelope,
  FaBook,
  FaCalendarAlt,
  FaChartBar,
  FaHistory,
  FaMoneyBillWave,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSMSModal, setShowSMSModal] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      alert('Logged out successfully!');
      navigate('/login');
    } catch (error) {
      alert('Logout failed!');
    }
  };

  const menuItems = [
    { name: 'Dashboard', icon: <FaChartBar /> },
    { name: 'Medical History', icon: <FaHistory /> },
    { name: 'Transaction Record', icon: <FaMoneyBillWave /> },
    { name: 'Patient Transaction', icon: <FaBook /> },
    { name: 'Data Analytics', icon: <FaChartBar /> },
    { name: 'Appointments', icon: <FaCalendarAlt /> },
    { name: 'Settings', icon: <FaCog /> },
  ];

  const renderDataAnalytics = () => (
    <div>
      <h2>Data Analytics Dashboard</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '20px 0' }}>
        <StatCard icon={<FaUsers />} title="Transaction Statistic" value="2" bg="#17a2b8" />
        <StatCard icon={<FaUserMd />} title="Total Accounts" value="1" bg="#28a745" />
        <StatCard icon={<FaEnvelope />} title="Total Messages" value="0" bg="#ffc107" />
        <StatCard icon={<FaBook />} title="Service Statistic" value="4" bg="#007bff" />
        <StatCard icon={<FaCalendarAlt />} title="Total Reservations" value="0" bg="#dc3545" />
      </div>
      <div style={sectionBox}>
        <h4>Reservations</h4>
        <div style={chartPlaceholder}>[Chart Placeholder]</div>
      </div>
    </div>
  );

  const renderMedicalHistory = () => {
    if (selectedUser) {
      return (
        <div>
          <h3>{selectedUser}'s Medical Record</h3>
          <button onClick={() => setSelectedUser(null)} className="btn">Back</button>
          <ul>
            <li>Diagnosis: Tooth decay</li>
            <li>Treatment: Filling</li>
            <li>Date: 03/20/2025</li>
          </ul>
        </div>
      );
    }

    const users = ['John Dominic', 'John Meng', 'Meng Adebayor'];

    return (
      <div>
        <h3>Select a User</h3>
        <ul>
          {users.map((user, i) => (
            <li
              key={i}
              style={{ cursor: 'pointer', padding: '5px 0', color: '#0f5e88' }}
              onClick={() => setSelectedUser(user)}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderTransactionRecord = () => (
    <div>
      <h3>Transaction Records</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Service</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>John Dominic</td>
            <td>2025-04-20</td>
            <td>Cleaning</td>
            <td>₱5000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderAppointments = () => (
    <div>
      <h3>Appointments</h3>
      <div style={{ marginBottom: '20px' }}>
        <label>Select Date: </label>
        <input type="date" style={{ padding: '5px' }} />
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Time</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              <td onClick={() => setShowSMSModal(true)} style={{ cursor: 'pointer', color: '#0f5e88' }}>
                Meng Adebayor
              </td>
              <td>5:00 PM</td>
              <td>2025-04-24</td>
              <td>09123456789</td>
              <td>Brace</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SMS Modal */}
      {showSMSModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>Send SMS Reminder</h2>
            <textarea placeholder="Type message..." rows={4} style={{ width: '100%', padding: '10px' }} />
            <div style={{ marginTop: '10px' }}>
              <button className="btn" onClick={() => setShowSMSModal(false)} style={{ marginRight: '10px' }}>
                Cancel
              </button>
              <button className="btn primary">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
        case 'Dashboard':
            return (
              <div>
                <h2>Dentist Dashboard Overview</h2>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', margin: '20px 0' }}>
                  <div style={cardStyle('#007bff')}>
                    <FaUsers size={24} />
                    <h4>Active Patients</h4>
                    <p>56</p>
                  </div>
                  <div style={cardStyle('#28a745')}>
                    <FaCalendarAlt size={24} />
                    <h4>Upcoming Appointments</h4>
                    <p>12</p>
                  </div>
                  <div style={cardStyle('#ffc107')}>
                    <FaChartBar size={24} />
                    <h4>Monthly Income</h4>
                    <p>₱105,000</p>
                  </div>
                </div>
              </div>
            );
      case 'Medical History':
        return renderMedicalHistory();
      case 'Transaction Record':
        return renderTransactionRecord();
        case 'Patient Transaction':
            return (
              <div>
                <h2>Patient Transaction Logs</h2>
                <input type="text" placeholder="Search by name or service..." style={{ padding: '8px', width: '300px', marginBottom: '15px' }} />
                <table border="1" width="100%" cellPadding="10" cellSpacing="0">
                  <thead style={{ backgroundColor: '#0f5e88', color: 'white' }}>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Patient</th>
                      <th>Service</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>John Dominic</td>
                      <td>Tooth Extraction</td>
                      <td>2025-04-19</td>
                      <td>₱3,000</td>
                      <td style={{ color: 'green' }}>Paid</td>
                    </tr>
                    <tr>
                      <td>1002</td>
                      <td>Meng Adebayor</td>
                      <td>Filling</td>
                      <td>2025-04-18</td>
                      <td>₱2,000</td>
                      <td style={{ color: 'red' }}>Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          
      case 'Data Analytics':
        return renderDataAnalytics();
      case 'Appointments':
        return renderAppointments();
        case 'Settings':
            return (
              <div>
                <h2>Dentist Settings</h2>
                <div style={{ marginBottom: '30px' }}>
                  <h4>Clinic Preferences</h4>
                  <label>Clinic Name: </label>
                  <input type="text" defaultValue="RM Dental Clinic" style={{ margin: '10px 0', padding: '5px', width: '300px' }} /><br />
                  <label>Operating Hours: </label>
                  <input type="text" defaultValue="9:00 AM - 6:00 PM" style={{ margin: '10px 0', padding: '5px', width: '300px' }} />
                </div>
                <div>
                  <h4>Manage Patient Users</h4>
                  <table border="1" width="100%" cellPadding="10" cellSpacing="0">
                    <thead style={{ backgroundColor: '#0f5e88', color: 'white' }}>
                      <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Patient1</td>
                        <td>Patient1@gmail.com</td>
                        <td>Patient1</td>
                        <td>Active</td>
                      </tr>
                      <tr>
                        <td>Patient2</td>
                        <td>Patient2@gmail.com</td>
                        <td>Patient2</td>
                        <td>Active</td>
                      </tr>
                      <tr>
                        <td>Patient3</td>
                        <td>Patient3@gmail.com</td>
                        <td>Patient3</td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          
      default:
        return <h2>Select a menu item</h2>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '150vh' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#1f2b37', color: 'white', padding: '20px' }}>
      <h4 style={{ 
        display: 'flex', 
        alignItems: 'center', 
        fontSize: '24px', 
        // backgroundColor:'black',
        // border: '2px solid lightblue', 
        padding: '10px 8px', 
        // borderRadius: '10px' 
        }}>
  <FaTooth style={{ marginRight: '10px' }} />
  RM Dental
</h4>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: '40px' }}>
          {menuItems.map(({ name, icon }) => (
            <li
              key={name}
              onClick={() => {
                setActiveSection(name);
                setSelectedUser(null);
                setShowSMSModal(false);
              }}
              style={{
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: activeSection === name ? '#0f5e88' : 'transparent',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {icon} {name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
        {/* Top Bar */}
        <div style={{
          backgroundColor: '#0f5e88',
          padding: '15px 30px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <h4>{activeSection}</h4>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Search" style={{ padding: '5px', marginRight: '10px' }} />
            <FaSearch />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '20px' }}>
          {renderContent()}
          <button onClick={handleLogout} className="btn danger" style={{ marginTop: '20px' }}>
            <FaSignOutAlt style={{ marginRight: '8px' }} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

// Component for Statistic Cards
const StatCard = ({ icon, title, value, bg }) => (
  <div style={cardStyle(bg)}>
    {icon}
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

// Styles
const cardStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: 'white',
  flex: '1 1 200px',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
});

const sectionBox = {
  marginTop: '30px',
  background: '#fff',
  padding: '20px',
  borderRadius: '8px',
};

const chartPlaceholder = {
  height: '200px',
  background: '#e9ecef',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#666',
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '8px',
  width: '80%',
  maxWidth: '600px',
};

// Global utility classes (optional for CSS-in-JS)
const css = `
  .btn {
    padding: 10px 20px;
    background-color: #999;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn.primary {
    background-color: #0f5e88;
  }
  .btn.danger {
    background-color: #d9534f;
  }
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  .styled-table th, .styled-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  .styled-table thead {
    background-color: #0f5e88;
    color: white;
  }
`;

if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = css;
  document.head.appendChild(styleTag);
}

export default Dashboard;
 