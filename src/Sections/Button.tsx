import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      style={{
        padding: '0.6rem 1.6rem',
        borderRadius: '999px',
        border: '2px solid rgba(241, 230, 226, 0.9)',
        background: 'linear-gradient(45deg, #838b70, #d8b477)',
        color: '#fff',
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
