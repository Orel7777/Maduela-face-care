import { motion, AnimatePresence } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';
import { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const certificates = [
  {
    src: '/images/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.44.28 (1).jpeg',
    title: 'תעודת קוסמטיקאית רפואית',
  },
  {
    src: '/images/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.44.28.jpeg',
    title: 'הסמכה בטיפולי פנים מתקדמים',
  },
  {
    src: '/images/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.45.24.jpeg',
    title: 'קורס טיפולי אנטי-אייג׳ינג',
  },
  {
    src: '/images/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.47.12.jpeg',
    title: 'השתלמות טיפול בעור רגיש',
  },
  {
    src: '/images/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.55.01.jpeg',
    title: 'הסמכה בפילינגים מתקדמים',
  },
  {
    src: '/images/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.56.19.jpeg',
    title: 'תעודה מקצועית נוספת',
  },
];

const CertificatesSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCertClick = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % certificates.length;
    });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + certificates.length) % certificates.length;
    });
  };

  const handleGalleryNext = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % certificates.length);
  };

  const handleGalleryPrev = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const selectedCert = selectedIndex === null ? null : certificates[selectedIndex];

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f0dd] via-[#fffcf0] to-[#f9f0dd]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddc1a7] to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-[#ddc1a7]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#e5b78a]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20" dir="rtl">
        {/* Section header */}
        <motion.div
          variants={SlidUpRight(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b4f47]/10 border border-[#ddc1a7]/50 text-sm font-medium text-[#5b4f47] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15l-2 5l9-13h-6l2-5l-9 13h6z"/>
            </svg>
            הסמכות מקצועיות
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5b4f47] leading-tight mb-6">
            ידע מקצועי
            <span className="block text-[#a06c3b]">שמגובה בהכשרות</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#5b4f47]/80 leading-relaxed">
            מאחורי כל טיפול עומדים שנים של לימודים, קורסים והשתלמויות מתקדמות.
            <span className="font-medium text-[#5b4f47]"> את יכולה לסמוך על ידיים מקצועיות ומנוסות.</span>
          </p>
        </motion.div>

        {/* Credentials highlights */}
        <motion.div
          variants={SlidUpLeft(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 sm:mb-16"
        >
          {[
            { icon: '🎓', label: 'קוסמטיקאית רפואית מוסמכת' },
            { icon: '📚', label: '+15 קורסים והשתלמויות' },
            { icon: '⭐', label: 'התמחות בעור רגיש' },
            { icon: '🔬', label: 'ידע מתעדכן בשיטות חדשות' },
          ].map((item, index) => (
            <div key={index} className="text-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#ddc1a7]/30">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-[#5b4f47]">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Certificates - Desktop: fixed grid, no navigation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-full hidden md:block"
          dir="rtl"
        >
          <div className="grid grid-cols-3 gap-4 py-6 max-w-5xl mx-auto justify-items-center">
            {certificates.map((cert, index) => (
              <div
                key={`cert-desktop-${index}`}
                onClick={() => handleCertClick(index)}
                className="group/card relative w-full max-w-[240px] lg:max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#ddc1a7]/40 bg-white"
              >
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#5b4f47]/20">
                    <div className="w-8 h-8 border-4 border-[#a06c3b]/30 border-t-[#a06c3b] rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2"
                  onLoad={() => setImagesLoaded(prev => ({ ...prev, [index]: true }))}
                />

                {/* Corner badge */}
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a06c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/90 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-semibold">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates - Mobile: one at a time + bottom navigation */}
        <div className="relative w-full md:hidden" dir="rtl">
          <div className="py-6">
            <div
              onClick={() => handleCertClick(currentGalleryIndex)}
              className="group/card relative w-full max-w-[280px] mx-auto aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-[#ddc1a7]/40 bg-white"
            >
              {!imagesLoaded[currentGalleryIndex] && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#5b4f47]/20">
                  <div className="w-8 h-8 border-4 border-[#a06c3b]/30 border-t-[#a06c3b] rounded-full animate-spin" />
                </div>
              )}
              <img
                src={certificates[currentGalleryIndex].src}
                alt={certificates[currentGalleryIndex].title}
                className="w-full h-full object-contain p-2"
                onLoad={() => setImagesLoaded(prev => ({ ...prev, [currentGalleryIndex]: true }))}
              />

              {/* Corner badge */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a06c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={handleGalleryPrev}
                className="w-12 h-12 bg-white/90 hover:bg-[#ddc1a7] hover:text-white shadow-lg border border-[#ddc1a7]/40 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 text-[#5b4f47]"
                aria-label="תעודה קודמת"
              >
                <IoChevronForward className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleGalleryNext}
                className="w-12 h-12 bg-white/90 hover:bg-[#ddc1a7] hover:text-white shadow-lg border border-[#ddc1a7]/40 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 text-[#5b4f47]"
                aria-label="תעודה הבאה"
              >
                <IoChevronBack className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#ddc1a7]/30 shadow-lg">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <p className="text-sm sm:text-base text-[#5b4f47] text-right">
              <span className="font-bold">את בידיים בטוחות</span> – כל הטיפולים מבוצעים על פי הסטנדרטים המקצועיים הגבוהים ביותר, עם ידע מעודכן ומוצרים איכותיים.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Device-Specific Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Mobile: iPhone-style Story Viewer */}
            {isMobile ? (
              <motion.div
                className="relative w-[92vw] max-w-[420px] rounded-[3rem] bg-[#2a2421]/90 border-[3px] border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.65)] overflow-hidden"
                initial={{ scale: 0.96, y: 18 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/60 rounded-b-2xl z-40" />

                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-6 right-6 z-50 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label="סגירה"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <div className="relative w-full aspect-[9/16] bg-transparent">
                  <img
                    key={selectedCert.src}
                    src={selectedCert.src}
                    alt={selectedCert.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        aria-label="תעודה קודמת"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        aria-label="תעודה הבאה"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/45 via-transparent to-black/25" />
                </div>
              </motion.div>
            ) : (
              /* Desktop: MacBook Pro-style Viewer */
              <motion.div
                className="relative w-[90vw] max-w-[1100px]"
                initial={{ scale: 0.94, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* MacBook Pro Window */}
                <div className="relative bg-gradient-to-b from-[#3a3a3c] to-[#2c2c2e] rounded-[12px] shadow-[0_40px_140px_rgba(0,0,0,0.7)] overflow-hidden border border-white/10">
                  {/* Window Title Bar */}
                  <div className="relative h-12 bg-[#2a2a2c] border-b border-white/5 flex items-center justify-between px-4">
                    {/* X Close Button */}
                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-white/10 transition-colors"
                      aria-label="סגירה"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                    <div className="absolute left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                      תעודות מקצועיות
                    </div>
                    {/* macOS Window Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff6b63] transition-colors"
                        aria-label="סגירה"
                      />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#fec444] transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#30d158] transition-colors" />
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative" style={{ height: '70vh', maxHeight: '800px', background: 'transparent' }}>
                    <img
                      key={selectedCert.src}
                      src={selectedCert.src}
                      alt={selectedCert.title}
                      className="w-full h-full object-contain"
                    />

                    {/* Navigation Buttons */}
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-6 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      aria-label="תעודה קודמת"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-6 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      aria-label="תעודה הבאה"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
