import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = React.ComponentProps<typeof motion.button>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <motion.button
      {...rest}
      whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 18px rgba(91, 79, 71, 0.35)' }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      style={{
        padding: '0.5rem 1.6rem',
        borderRadius: '999px',
        border: '2px solid #fffcf0',
        background: 'linear-gradient(135deg, #695125, #ddc1a7)',
        color: '#fffcf0',
        fontWeight: 600,
        fontSize: '0.95rem',
        letterSpacing: '0.03em',
        cursor: 'pointer',
        boxShadow: '0 3px 10px rgba(91, 79, 71, 0.28)',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
