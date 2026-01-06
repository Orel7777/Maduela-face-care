import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface FloatingActionButtonsProps {
  onOpenContact: () => void;
}

const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* Desktop Vertical Button - Left Side */}
      <motion.div
        className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-[60] items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={onOpenContact}
          className="group relative flex flex-col items-center justify-center bg-gradient-to-br from-[#695125] to-[#ddc1a7] text-[#f8efdf] rounded-r-xl border-y-2 border-r-2 border-l-0 border-[#fffcf0] shadow-[4px_0_15px_rgba(91,79,71,0.25)] overflow-hidden transition-all duration-300 hover:pl-1 hover:shadow-[6px_0_20px_rgba(91,79,71,0.35)]"
          style={{
            padding: '24px 10px',
            minHeight: '180px'
          }}
        >
          <div 
            className="flex items-center gap-3 whitespace-nowrap"
            style={{ 
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)'
            }}
          >
            <span className="text-lg font-bold tracking-wider">
              קביעת תור
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="rotate-90 group-hover:-translate-y-1 transition-transform duration-300"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out" />
        </button>
      </motion.div>

      {/* Desktop WhatsApp Button - Right Side */}
      <motion.a
        href="https://wa.me/972533353203"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-[60] items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#695125] to-[#ddc1a7] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9 text-white" />
      </motion.a>

      {/* Mobile Floating Buttons */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-[60] flex items-end justify-between pointer-events-none">
        {/* Left: Book Appointment */}
        <motion.button
          onClick={onOpenContact}
          className="pointer-events-auto flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#5b4f47] to-[#695125] text-[#f8efdf] font-bold shadow-lg border border-[#ddc1a7]/30 hover:shadow-xl active:scale-95 transition-all"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>קביעת תור</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M5 12h14" />
             <path d="m12 5 7 7-7 7" />
           </svg>
        </motion.button>

        {/* Right: WhatsApp */}
        <motion.a
          href="https://wa.me/972533353203"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#695125] to-[#ddc1a7] text-white shadow-lg hover:shadow-xl active:scale-95 transition-all"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </motion.a>
      </div>
    </>
  );
};

export default FloatingActionButtons;
