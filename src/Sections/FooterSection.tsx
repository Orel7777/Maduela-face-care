import { motion } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaWaze, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci"; // האייקונים החדשים
import styled from 'styled-components';

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

const FooterSection: React.FC = () => {
  const year = new Date().getFullYear();
  const [now, setNow] = useState(() => new Date());

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

  return (
    <footer className="relative w-full bg-[#5b4f47] overflow-hidden">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ddc1a7] via-[#a06c3b] to-[#ddc1a7]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-12 sm:py-16" dir="rtl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              variants={SlidUpRight(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">דקלה מדואלה</h3>
              <p className="text-[#ddc1a7] font-medium mb-4">קוסמטיקאית רפואית</p>
              <p className="text-white/70 text-sm leading-relaxed max-w-md mb-6">
                יותר מ-10 שנות ניסיון בטיפולי פנים מקצועיים. כל טיפול נבנה במיוחד עבורך – 
                להחזיר לעור את הזוהר הטבעי, האיזון והביטחון.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                <StyledSocialIcon 
                  href="https://wa.me/972533353203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.3 }}
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </StyledSocialIcon>
                <StyledSocialIcon 
                  href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.4 }}
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </StyledSocialIcon>
                <StyledSocialIcon 
                  href="https://www.facebook.com/profile.php?id=100058313266229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.5 }}
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </StyledSocialIcon>
                <StyledSocialIcon 
                  href="https://waze.com/ul?q=%D7%94%D7%91%D7%A0%D7%99%D7%9D%2050%2C%20%D7%A0%D7%A1%20%D7%A6%D7%99%D7%95%D7%A0%D7%94&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="waze"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.6 }}
                  aria-label="Waze"
                >
                  <FaWaze className="w-5 h-5" />
                </StyledSocialIcon>
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <motion.div
              variants={SlidUpLeft(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">ניווט מהיר</h4>
              <ul className="space-y-2">
                {[
                  { label: 'טיפולים', href: '#services' },
                  { label: 'קצת עליי', href: '#about' },
                  { label: 'המלצות', href: '#testimonials' },
                  { label: 'שאלות נפוצות', href: '#faq' },
                ].map((link) => (
                  <li key={link.href} className="text-[#ddc1a7]">
                    <a
                      href={link.href}
                      className="hover:text-white/70 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact info */}
          <div>
            <motion.div
              variants={SlidUpLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">יצירת קשר</h4>
              <ul className="space-y-4">
                {/* Location */}
                <li className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ddc1a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="text-white/70">נס ציונה</span>
                </li>

                {/* Hours & Status */}
                <li className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ddc1a7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/70">שעות פעילות</span>
                    <span className="text-white/50 text-xs">א׳-ה׳ | 10:00-20:00</span>
                    <div className="mt-1 inline-flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-2 py-0.5 text-xs font-semibold border ${
                          isOpenNow
                            ? 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30'
                            : 'bg-red-500/15 text-red-200 border-red-500/30'
                        }`}
                      >
                        <span className={`h-2 w-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-red-400'}`} />
                        {isOpenNow ? 'פתוח' : 'סגור'}
                      </span>
                      <span className="text-white/50 text-xs">({israelTimeLabel})</span>
                    </div>
                  </div>
                </li>

                {/* Email - NEW */}
                <li className="flex items-center gap-3 text-sm text-[#ddc1a7]">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <CiMail className="text-[#ddc1a7] text-lg" />
                  </div>
                  <a href="mailto:dikla.spa@gmail.com" className="hover:text-white/70 transition-colors">
                    dikla.spa@gmail.com
                  </a>
                </li>

                {/* Phone - NEW */}
                <li className="flex items-center gap-3 text-sm text-[#ddc1a7]">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <CiPhone className="text-[#ddc1a7] text-lg" />
                  </div>
                  <a href="tel:0533353203" className="hover:text-white/70 transition-colors">
                    053-3353203
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {year} דקלה מדואלה. כל הזכויות שמורות.</p>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="text-xs text-white/60 hover:text-[#ddc1a7] transition-colors underline underline-offset-4"
              >
                מדיניות הפרטיות
              </Link>
              <p className="text-xs">עוצב ופותח עם 💜</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  // 
  // 
};
export default FooterSection;