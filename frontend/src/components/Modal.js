import React from 'react';

function Modal({ children, onClose }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white', padding: '30px', borderRadius: '8px',
        width: '80%', maxHeight: '90vh', overflowY: 'auto'
      }}>
        <button onClick={onClose} style={{ float: 'right', background: 'none', border: 'none', fontSize: '20px' }}>×</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
