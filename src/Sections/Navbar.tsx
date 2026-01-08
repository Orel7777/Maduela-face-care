import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { FaWaze, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

interface HeaderProps {
  onOpenContact?: () => void;
}

const StyledMenuItem = styled(motion.a)`
  border: 2px solid #ddc1a7;
  background: linear-gradient(135deg, #fffcf0, #efe3b8);
  box-shadow: 0 5px 15px rgba(91, 79, 71, 0.12);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(216, 180, 119, 0.1), transparent);
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.03);
    border-color: rgba(216, 180, 119, 0.8);
    box-shadow: 0 10px 25px rgba(131, 139, 112, 0.15);
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const StyledMenu = styled.div`
  .menu-item {
    color: #5b4f47;
    font-weight: 700;
    position: relative;
    z-index: 1;
    white-space: nowrap;
    
    &:hover {
      color: #695125;
      scale: 1.05;
      background: rgba(241, 230, 226, 0.95);
      box-shadow: 0 8px 20px rgba(216, 180, 119, 0.2);
    }
  }
`;

const StyledSocialIcon = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 252, 240, 0.9);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  box-shadow: 0 4px 10px rgba(91, 79, 71, 0.18);
  margin: 0 5px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, rgba(255, 252, 240, 0.9), rgba(221, 193, 167, 0.7));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  &.waze {
    color: #33CCFF;
    svg { fill: #33CCFF; }
  }
  
  &.whatsapp {
    color: #25D366;
    svg { fill: #25D366; }
  }
  
  &.instagram {
    color: #E1306C;
    svg { fill: #E1306C; }
  }
  
  &.facebook {
    color: #4267B2;
    svg { fill: #4267B2; }
  }
  
  svg {
    width: 22px;
    height: 22px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    svg {
      transform: scale(1.2);
    }
  }
  
  &.waze:hover {
    background-color: rgba(51, 204, 255, 0.1);
    box-shadow: 0 10px 25px rgba(51, 204, 255, 0.5), 0 0 20px rgba(51, 204, 255, 0.3);
  }
  
  &.whatsapp:hover {
    background-color: rgba(37, 211, 102, 0.1);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.3);
  }
  
  &.instagram:hover {
    background-color: rgba(225, 48, 108, 0.1);
    box-shadow: 0 10px 25px rgba(225, 48, 108, 0.5), 0 0 20px rgba(225, 48, 108, 0.3);
  }
  
  &.facebook:hover {
    background-color: rgba(66, 103, 178, 0.1);
    box-shadow: 0 10px 25px rgba(66, 103, 178, 0.5), 0 0 20px rgba(66, 103, 178, 0.3);
  }
`;

const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 8px;
    bottom: -8px;
    left: -10%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
    border-radius: 50%;
    opacity: 0.6;
  }
`;

const LogoImage = styled(motion.img)`
  border-radius: 50%;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  width: 72px;
  height: 72px;
  object-fit: cover;
`;

const Header: FC<HeaderProps> = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(intervalId);
  }, []);

  const israelWeekday = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jerusalem',
    weekday: 'short',
  }).format(now);

  const israelHour = Number(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jerusalem',
      hour: '2-digit',
      hour12: false,
    }).format(now),
  );

  const israelMinute = Number(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jerusalem',
      minute: '2-digit',
      hour12: false,
    }).format(now),
  );

  const israelTimeLabel = new Intl.DateTimeFormat('he-IL', {
    timeZone: 'Asia/Jerusalem',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  const israelMinutesSinceMidnight = israelHour * 60 + israelMinute;
  const isOpenNow =
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].includes(israelWeekday) &&
    israelMinutesSinceMidnight >= 10 * 60 &&
    israelMinutesSinceMidnight < 20 * 60;

  const statusLabel = isOpenNow ? 'פתוח' : 'סגור';
  const statusPillClass = isOpenNow
    ? 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30'
    : 'bg-red-500/15 text-red-700 border-red-500/30';
  const statusDotClass = isOpenNow ? 'bg-emerald-500' : 'bg-red-500';

  const handleOpenForm = () => {
    if (onOpenContact) onOpenContact();
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className="navbar-root"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
        }}
      >
        <div
          className="navbar-bg"
          style={{
            background: '#efe3b8',
            boxShadow: '0 2px 6px rgba(91, 79, 71, 0.15)',
          }}
        >
          <div
            className="navbar-inner"
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '8px 32px',
            }}
          >
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px',
              }}
            >
              <div className="hidden w-full md:flex items-center justify-between gap-8">
                {/* Left: Social + CTA */}
                <div
                  className="desktop-social"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 15,
                      delay: 0.9
                    }}
                  >
                    <LogoContainer 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      <button onClick={scrollToTop} className="bg-transparent border-none cursor-pointer p-0">
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <LogoImage 
                            src="/לוגו/לוגו_גדול.jpeg" 
                            alt="דקלה מדואלה" 
                            className="logo-desktop"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ 
                              scale: 1, 
                              opacity: 1,
                              transition: { 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 15,
                                delay: 0.2
                              }
                            }}
                            whileHover={{ 
                              scale: 1.15,
                              boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)"
                            }}
                            style={{
                              boxShadow: '0 8px 25px rgba(91, 79, 71, 0.3)',
                              border: '3px solid #fffcf0',
                              background: 'linear-gradient(135deg, #ddc1a7, #efe3b8)'
                            }}
                          />
                          <motion.div 
                            className="absolute top-0 left-0 right-0 bottom-0 rounded-full -z-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ 
                              opacity: [0.5, 0.8, 0.5], 
                              scale: [0.9, 1.05, 0.9],
                              transition: { 
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                              }
                            }}
                            style={{
                              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                              transform: 'translate(-5%, -5%)',
                              width: '110%',
                              height: '110%'
                            }}
                          />
                        </motion.div>
                      </button>
                      <motion.span 
                        className="mt-1 text-sm font-semibold text-[#5b4f47]"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        נעים מאוד - מדואלה דקלה שליט
                      </motion.span>
                    </LogoContainer>
                  </motion.div>

                  <div
                    className="desktop-social-icons"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <StyledSocialIcon 
                      href="https://www.facebook.com/profile.php?id=100058313266229" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="facebook"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.8 }}
                    >
                      <FaFacebook className="w-5 h-5" />
                    </StyledSocialIcon>

                    <StyledSocialIcon 
                      href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="instagram"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.7 }}
                    >
                      <FaInstagram className="w-5 h-5" />
                    </StyledSocialIcon>

                    <StyledSocialIcon 
                      href="https://wa.me/972533353203" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whatsapp"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.6 }}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </StyledSocialIcon>

                    <StyledSocialIcon 
                      href="https://waze.com/ul?q=%D7%94%D7%91%D7%A0%D7%99%D7%9D%2050%2C%20%D7%A0%D7%A1%20%D7%A6%D7%99%D7%95%D7%A0%D7%94&navigate=yes" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="waze"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.5 }}
                    >
                      <FaWaze className="w-5 h-5" />
                    </StyledSocialIcon>
                  </div>
                </div>

                {/* Center: Desktop Menu */}
                <div
                  className="desktop-menu"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '56px',
                    fontSize: '18px',
                  }}
                >
                  {[ 
                    { name: "טיפולים", anchor: "services" },
                    { name: "המלצות", anchor: "testimonials" },
                    { name: "גלריה", anchor: "methodology" },
                    { name: "שאלות", anchor: "faq" }
                  ].map((item, index) => (
                    <motion.button 
                      key={item.name}
                      onClick={() => scrollToSection(item.anchor)}
                      className="relative text-lg font-medium text-[#5b4f47] bg-transparent border-none cursor-pointer"
                      style={{ whiteSpace: 'nowrap' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover="hover"
                    >
                      {item.name}
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-[#695125] rounded-full"
                        initial={{ width: 0 }}
                        variants={{
                          hover: { width: "100%" }
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Right: CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15,
                    delay: 0.9
                  }}
                >
                  <Button onClick={handleOpenForm}>קביעת תור</Button>
                </motion.div>
              </div>

              {/* Mobile top bar */}
              <div className="relative flex w-full items-center md:hidden" style={{ minHeight: '72px' }}>
                <motion.button
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2 ml-2 rounded-full text-[#5b4f47] z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(135deg, #ddc1a7, #695125)',
                    boxShadow: '0 4px 12px rgba(91, 79, 71, 0.3)',
                    border: '1px solid #5b4f47'
                  }}
                >
                  <RiMenuUnfoldFill className="w-7 h-7 text-[#ffffff]" />
                </motion.button>

                
                <div className="absolute inset-0 flex items-center justify-end pr-0 pointer-events-none">
                  <div className="flex flex-col items-center pointer-events-auto" style={{ transform: 'translateX(10px)' }}>
                    <button onClick={scrollToTop} className="bg-transparent border-none cursor-pointer p-0">
                      <img
                        src="/לוגו/לוגו_גדול.jpeg"
                        alt="דקלה מדואלה"
                        className="w-16 h-16 rounded-full object-cover"
                        style={{
                          boxShadow: '0 6px 18px rgba(91, 79, 71, 0.25)',
                          border: '3px solid #ddc1a7',
                          background: 'linear-gradient(135deg, #fffcf0, #efe3b8)'
                        }}
                      />
                    </button>
                    <span
                      className="mt-1 text-xs font-semibold text-[#5b4f47] text-center"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)' }}
                    >
                      נעים מאוד - מדואלה דקלה שליט
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, #efe3b8, #ddc1a7)',
                overflowY: 'auto'
              }}
            >
              <motion.div 
                className="flex flex-col items-center px-4 py-6 min-h-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative p-6 space-y-5 w-full max-w-md text-center rounded-2xl"
                  style={{
                    background: 'linear-gradient(to bottom, #fffcf0, #efe3b8)',
                    boxShadow: '0 20px 50px rgba(91, 79, 71, 0.2), inset 0 0 30px rgba(221, 193, 167, 0.4)',
                    border: '2px solid #ddc1a7',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-3 right-3 p-2 text-[#5b4f47] rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'linear-gradient(135deg, #ddc1a7, #695125)',
                      boxShadow: '0 4px 12px rgba(91, 79, 71, 0.3)',
                      border: '1px solid #5b4f47'
                    }}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2.5" 
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>

                  <div className="flex flex-col justify-center items-center mb-6">
                    <button onClick={() => { scrollToTop(); setIsMenuOpen(false); }} className="bg-transparent border-none cursor-pointer p-0">
                      <motion.img 
                        src="/לוגו/לוגו_גדול.jpeg" 
                        alt="דקלה מדואלה" 
                        className="p-1 w-24 h-24 rounded-full"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        style={{
                          boxShadow: '0 8px 25px rgba(91, 79, 71, 0.25)',
                          border: '3px solid #ddc1a7',
                          background: 'linear-gradient(135deg, #fffcf0, #efe3b8)'
                        }}
                      />
                    </button>
                    <span className="mt-3 text-lg font-semibold text-[#5b4f47]">
                      נעים מאוד - מדואלה דקלה שליט
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-[#ddc1a7]/60 px-3 py-1 text-sm font-bold text-[#5b4f47] shadow-sm">
                      <span className={`h-2.5 w-2.5 rounded-full ${statusDotClass}`} />
                      {statusLabel}
                      <span className="text-[#5b4f47]/70 font-semibold">({israelTimeLabel})</span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center items-center mb-8">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <RiMenuUnfoldFill className="w-6 h-6 text-[#695125]" />
                    </motion.div>
                    <div
                      className="text-2xl font-bold text-[#5b4f47]"
                      style={{ 
                        textShadow: '0 2px 10px rgba(91, 79, 71, 0.2)',
                        background: 'linear-gradient(90deg, #5b4f47, #695125, #5b4f47)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% auto',
                        animation: 'gradient 3s linear infinite'
                      }}
                    >
                      תפריט
                    </div>
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <RiMenuUnfoldFill className="w-6 h-6 text-[#695125]" />
                    </motion.div>
                  </div>

                  <StyledMenu className="mb-8 space-y-4">
                    {[
                      { name: "טיפולים", anchor: "services" },
                      { name: "המלצות", anchor: "testimonials" },
                      { name: "גלריה", anchor: "methodology" },
                      { name: "שאלות", anchor: "faq" }
                    ].map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.anchor)}
                        className="block text-xl font-semibold transition-all text-[#5b4f47] py-2.5 px-4 rounded-xl menu-item w-full text-center bg-transparent cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                        style={{
                          border: '2px solid #ddc1a7',
                          background: 'linear-gradient(135deg, #fffcf0, #efe3b8)',
                          boxShadow: '0 5px 15px rgba(91, 79, 71, 0.12)'
                        }}
                        whileHover={{
                          scale: 1.03,
                          y: -5
                        }}
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </StyledMenu>
              
                  {/* Mobile Social Icons */}
                  <div className="flex justify-center mb-8 space-x-8 rtl:space-x-reverse">
                    <StyledSocialIcon 
                      href="https://waze.com/ul?q=%D7%94%D7%91%D7%A0%D7%99%D7%9D%2050%2C%20%D7%A0%D7%A1%20%D7%A6%D7%99%D7%95%D7%A0%D7%94&navigate=yes" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="waze"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.3 }}
                      style={{ boxShadow: '0 5px 15px rgba(51, 204, 255, 0.2)' }}
                    >
                      <FaWaze className="w-6 h-6" />
                    </StyledSocialIcon>
                    
                    <StyledSocialIcon 
                      href="https://wa.me/972533353203" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whatsapp"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.4 }}
                      style={{ boxShadow: '0 5px 15px rgba(37, 211, 102, 0.2)' }}
                    >
                      <FaWhatsapp className="w-6 h-6" />
                    </StyledSocialIcon>
                    
                    <StyledSocialIcon 
                      href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="instagram"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.5 }}
                      style={{ boxShadow: '0 5px 15px rgba(225, 48, 108, 0.2)' }}
                    >
                      <FaInstagram className="w-6 h-6" />
                    </StyledSocialIcon>
                    
                    <StyledSocialIcon 
                      href="https://www.facebook.com/profile.php?id=100058313266229" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="facebook"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.6 }}
                      style={{ boxShadow: '0 5px 15px rgba(66, 103, 178, 0.2)' }}
                    >
                      <FaFacebook className="w-6 h-6" />
                    </StyledSocialIcon>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4"
                  >
                    <motion.button
                      onClick={handleOpenForm}
                      className="px-8 py-3 rounded-full text-white font-bold tracking-wide text-xl"
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(131, 139, 112, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      style={{ 
                        background: 'linear-gradient(45deg, #695125, #ddc1a7, #695125)',
                        backgroundSize: '200% auto',
                        animation: 'gradient 4s ease infinite',
                        border: '2px solid #fffcf0',
                        boxShadow: '0 5px 15px rgba(91, 79, 71, 0.25)'
                      }}
                    >
                      קביעת תור
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
