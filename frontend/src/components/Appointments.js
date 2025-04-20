import React, { useState } from 'react';
import Modal from '../components/Modal';

function Appointments() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setModalOpen(true);
  };

  const patients = Array.from({ length: 10 }, (_, i) => ({
    name: `Patient ${i + 1}`,
    time: '5:00 PM',
    date: '24/03/2025',
    contact: '09123456789',
    purpose: 'Brace'
  }));

  return (
    <>
      <input type="date" />
      <table border="1" width="100%" cellPadding="10">
        <thead style={{ backgroundColor: '#0f5e88', color: 'white' }}>
          <tr>
            <th>Patient Name</th>
            <th>Appointment Time</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, i) => (
            <tr key={i} onClick={() => openModal(p)} style={{ cursor: 'pointer' }}>
              <td>{p.name}</td>
              <td>{p.time}</td>
              <td>{p.date}</td>
              <td>{p.contact}</td>
              <td>{p.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h2>Send SMS to {selectedPatient.name}</h2>
          <p>Contact: {selectedPatient.contact}</p>
          <textarea rows="4" style={{ width: '100%' }} placeholder="Enter your message..." />
          <button>Send SMS</button>
        </Modal>
      )}
    </>
  );
}

export default Appointments;
