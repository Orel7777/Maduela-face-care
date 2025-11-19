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
        background: 'rgba(91, 79, 71, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fffcf0',
          padding: '2rem',
          borderRadius: '1rem',
          border: '2px solid #ddc1a7',
          minWidth: '300px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginTop: 0, marginBottom: '1rem', color: '#5b4f47' }}>טופס קביעת תור</h2>
        <p style={{ color: '#5b4f47' }}>כאן נבנה אחר כך את הטופס המלא.</p>
        <button
          onClick={onClose}
          style={{
            marginTop: '1rem',
            padding: '0.4rem 1rem',
            borderRadius: '999px',
            border: '1px solid #695125',
            background: 'linear-gradient(45deg, #ddc1a7, #efe3b8)',
            color: '#5b4f47',
            cursor: 'pointer',
          }}
        >
          סגירה
        </button>
      </div>
    </div>
  );
};

export default Form;
