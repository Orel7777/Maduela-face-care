import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const steps = [
  {
    title: 'מקצועיות ללא פשרות',
    text: 'צוות מוסמך ומנוסה עם הכשרה מתמדת בטכניקות המתקדמות ביותר בעולם טיפולי הפנים.',
  },
  {
    title: 'התאמה אישית מלאה',
    text: 'כל טיפול מותאם במיוחד עבורך - לסוג העור, לצרכים ולמטרות האישיות שלך.',
  },
  {
    title: 'טכנולוגיות מתקדמות',
    text: 'אנחנו משלבים את השיטות המסורתיות המוכחות עם הטכנולוגיות החדשניות ביותר לתוצאות אופטימליות.',
  },
  {
    title: 'אווירה חמה ומכבדת',
    text: 'חוויה מפנקת במרחב נעים, אינטימי ומקצועי שבו נותנים לך את תחושת הביטחון והנוחות המקסימלית.',
  },
];

const galleryImages = [
  '/images/Dikla/picture/1000271293.jpg',
  '/images/Dikla/picture/13.jpeg',
  '/images/Dikla/picture/14.jpeg',
  '/images/Dikla/picture/16.jpeg',
  '/images/Dikla/picture/20251104_110804060_iOS_0.jpg',
  '/images/Dikla/picture/20251104_110817430_iOS_1.jpg',
  '/images/Dikla/picture/20251104_111627268_iOS.jpg',
  '/images/Dikla/picture/20251104_113545286_iOS.jpg',
  '/images/Dikla/picture/20251104_113601055_iOS.jpg',
  '/images/Dikla/picture/20251104_113841058_iOS.jpg',
  '/images/Dikla/picture/20251104_113846723_iOS.jpg',
  '/images/Dikla/picture/20251104_115911194_iOS_0.jpg',
  '/images/Dikla/picture/20251104_120036817_iOS.jpg',
  '/images/Dikla/picture/20251104_120404059_iOS.jpg',
  '/images/Dikla/picture/20251104_120631956_iOS (1).jpg',
  '/images/Dikla/picture/20251104_121037668_iOS.jpg',
  '/images/Dikla/picture/20251104_121416837_iOS_0.jpg',
  '/images/Dikla/picture/20251104_121431061_iOS.jpg',
  '/images/Dikla/picture/4.jpeg',
  '/images/Dikla/picture/8.jpeg',
];

const MethodologySection: React.FC = () => {
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

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % galleryImages.length;
    });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  const handleGalleryNext = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleGalleryPrev = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const itemsToShow = isMobile ? 1 : 4;

  const selectedImage = selectedIndex === null ? null : galleryImages[selectedIndex];

  return (
    <section
      id="methodology"
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#f9f0dd]"
    >
      <div className="max-w-5xl mx-auto text-right">
        <motion.div
          variants={SlidUpRight(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86] mb-2 text-center">
            למה לבחור בנו
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47] mb-3 text-center">
            למה ללקוחות שלנו כל כך טוב אצלנו?
          </h2>
          <p className="text-sm sm:text-base text-[#5b4f47]/80 max-w-2xl mx-auto text-center">
            אנחנו מאמינים שכל לקוחה ראויה לטיפול מקצועי, אישי ומכבד. הנה 4 הסיבות העיקריות שהופכות אותנו לבחירה המושלמת עבורך.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={SlidUpLeft(0.1 + index * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-3xl bg-[#fffcf0] border border-[#ddc1a7]/70 shadow-[0_8px_24px_rgba(91,79,71,0.12)] px-5 py-5 sm:px-6 sm:py-6 text-right overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ddc1a7] to-[#695125]" />
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#5b4f47] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5b4f47]/80 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16" dir="rtl">
          {/* Static Full-Width Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 py-6">
              {galleryImages.slice(currentGalleryIndex, currentGalleryIndex + itemsToShow).concat(
                currentGalleryIndex + itemsToShow > galleryImages.length 
                  ? galleryImages.slice(0, (currentGalleryIndex + itemsToShow) - galleryImages.length)
                  : []
              ).map((imageSrc, displayIndex) => {
                const actualIndex = (currentGalleryIndex + displayIndex) % galleryImages.length;
                return (
                  <div
                    key={`gallery-${actualIndex}`}
                    onClick={() => handleImageClick(actualIndex)}
                    className="group/card relative w-full max-w-[92vw] sm:max-w-[320px] md:max-w-[360px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40 ring-1 ring-black/5 bg-[#fffcf0]"
                  >
                    {!imagesLoaded[actualIndex] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#5b4f47]/20">
                        <div className="w-8 h-8 border-4 border-[#a06c3b]/30 border-t-[#a06c3b] rounded-full animate-spin" />
                      </div>
                    )}
                    <img
                      src={imageSrc}
                      alt={`גלריה ${actualIndex + 1}`}
                      className="w-full h-full object-cover"
                      onLoad={() => setImagesLoaded(prev => ({ ...prev, [actualIndex]: true }))}
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={handleGalleryPrev}
                className="w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="הקודם"
              >
                <IoChevronForward className="w-6 h-6 text-[#5b4f47]" />
              </button>

              <button
                type="button"
                onClick={handleGalleryNext}
                className="w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="הבא"
              >
                <IoChevronBack className="w-6 h-6 text-[#5b4f47]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Device-Specific Viewer */}
      <AnimatePresence>
        {selectedImage && (
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
                    key={selectedImage}
                    src={selectedImage}
                    alt="גלריה"
                    className="absolute inset-0 w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        aria-label="תמונה קודמת"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        aria-label="תמונה הבאה"
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
                      גלריה
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
                      key={selectedImage}
                      src={selectedImage}
                      alt="גלריה"
                      className="w-full h-full object-contain"
                    />

                    {/* Navigation Buttons */}
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-6 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      aria-label="תמונה קודמת"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-6 top-1/2 -translate-y-1/2 z-30 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      aria-label="תמונה הבאה"
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

export default MethodologySection;
