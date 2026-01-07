import { motion } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';
import { useState } from 'react';

const certificates = [
  {
    src: '/תמונות/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.44.28 (1).jpeg',
    title: 'תעודת קוסמטיקאית רפואית',
  },
  {
    src: '/תמונות/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.44.28.jpeg',
    title: 'הסמכה בטיפולי פנים מתקדמים',
  },
  {
    src: '/תמונות/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.45.24.jpeg',
    title: 'קורס טיפולי אנטי-אייג׳ינג',
  },
  {
    src: '/תמונות/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.47.12.jpeg',
    title: 'השתלמות טיפול בעור רגיש',
  },
  {
    src: '/תמונות/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.55.01.jpeg',
    title: 'הסמכה בפילינגים מתקדמים',
  },
  {
    src: '/תמונות/Dikla/Certificates/WhatsApp Image 2025-04-14 at 19.56.19.jpeg',
    title: 'תעודה מקצועית נוספת',
  },
];

const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesPerView = {
    mobile: 1,
    desktop: 3,
  };

  const totalSlides = certificates.length;
  const maxIndexMobile = totalSlides - slidesPerView.mobile;
  const maxIndexDesktop = Math.max(0, totalSlides - slidesPerView.desktop);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = (isMobile: boolean) => {
    const maxIndex = isMobile ? maxIndexMobile : maxIndexDesktop;
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

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

        {/* Certificates Carousel - Desktop (3 slides) */}
        <div className="hidden md:block relative">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: `${(totalSlides / slidesPerView.desktop) * 100}%` }}
              animate={{ x: `${-currentIndex * (100 / totalSlides)}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={cert.src}
                  className="flex-shrink-0 group relative"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="px-3">
                    <div 
                      className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg border border-[#ddc1a7]/40 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      onClick={() => setSelectedCert(index)}
                    >
                      <img
                        src={cert.src}
                        alt={cert.title}
                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white">
                          <p className="text-sm font-semibold">{cert.title}</p>
                          <p className="text-xs text-white/80 mt-1">לחצי להגדלה</p>
                        </div>
                      </div>

                      {/* Corner badge */}
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a06c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons - Desktop (sides) */}
          {currentIndex < maxIndexDesktop && (
            <button
              onClick={() => handleNext(false)}
              className="absolute right-0 top-1/2 -translate-y-1/2 -right-16 w-12 h-12 rounded-full bg-white shadow-lg border border-[#ddc1a7]/40 flex items-center justify-center text-[#5b4f47] hover:bg-[#ddc1a7] hover:text-white transition-all duration-300 z-10"
              aria-label="תעודה הבאה"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          )}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -left-16 w-12 h-12 rounded-full bg-white shadow-lg border border-[#ddc1a7]/40 flex items-center justify-center text-[#5b4f47] hover:bg-[#ddc1a7] hover:text-white transition-all duration-300 z-10"
              aria-label="תעודה קודמת"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          )}
        </div>

        {/* Certificates Carousel - Mobile (1 slide) */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={cert.src}
                  className="min-w-full px-2"
                >
                  <div 
                    className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg border border-[#ddc1a7]/40 cursor-pointer"
                    onClick={() => setSelectedCert(index)}
                  >
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                    
                    {/* Title overlay for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#5b4f47]/90 to-transparent">
                      <p className="text-white text-sm font-semibold text-center">{cert.title}</p>
                      <p className="text-white/80 text-xs text-center mt-1">לחצי להגדלה</p>
                    </div>

                    {/* Corner badge */}
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a06c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons - Mobile (bottom) */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => handleNext(true)}
              disabled={currentIndex >= maxIndexMobile}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-[#ddc1a7]/40 flex items-center justify-center text-[#5b4f47] hover:bg-[#ddc1a7] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#5b4f47]"
              aria-label="תעודה הבאה"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-[#ddc1a7]/40 flex items-center justify-center text-[#5b4f47] hover:bg-[#ddc1a7] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#5b4f47]"
              aria-label="תעודה קודמת"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#a06c3b] w-6'
                    : 'bg-[#ddc1a7]/40'
                }`}
                aria-label={`עבור לתעודה ${index + 1}`}
              />
            ))}
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

      {/* Lightbox modal */}
      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificates[selectedCert].src}
              alt={certificates[selectedCert].title}
              className="w-full h-full object-contain bg-white"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold text-center">{certificates[selectedCert].title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
