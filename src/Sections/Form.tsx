import React from 'react';

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '1rem',
          minWidth: '300px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>טופס קביעת תור</h2>
        <p>כאן נבנה אחר כך את הטופס המלא.</p>
        <button onClick={onClose}>סגירה</button>
      </div>
    </div>
  );
};

export default Form;
