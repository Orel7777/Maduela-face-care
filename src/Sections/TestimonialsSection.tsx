import { motion, AnimatePresence } from 'framer-motion';
import { SlidUpRight } from '../components/Motion';
import { useState, useRef, useEffect } from 'react';

// Testimonial images from the folder
const testimonialImages = [
  '/תמונות/המלצות/1.1.jpeg',
  '/תמונות/המלצות/1.2.jpeg',
  '/תמונות/המלצות/1.3.jpeg',
  '/תמונות/המלצות/1.4.jpeg',
  '/תמונות/המלצות/1.5.jpeg',
  '/תמונות/המלצות/1.7.jpeg',
  '/תמונות/המלצות/1.9.jpeg',
  '/תמונות/המלצות/1.10.jpeg',
  '/תמונות/המלצות/1.1change.png',
  '/תמונות/המלצות/1.4change.png',
  '/תמונות/המלצות/parallax-bg-1.jpg',
  '/תמונות/המלצות/parallax-bg-2.jpg',
  '/תמונות/המלצות/parallax-bg-3.jpg',
  '/תמונות/המלצות/parallax-bg-4.jpg',
  '/תמונות/המלצות/parallax-bg-5.jpg',
];

// iPhone Frame Modal Component
const IPhoneModal: React.FC<{
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ isOpen, imageSrc, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNext();
      if (e.key === 'ArrowRight') onPrev();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          
          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>

          {/* iPhone Frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-[320px] sm:max-w-[360px]"
          >
            {/* iPhone outer frame */}
            <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[3rem] p-3 shadow-2xl">
              {/* iPhone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
              
              {/* iPhone screen */}
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-8 pt-2">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
                    </svg>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75z"/>
                    </svg>
                    <div className="w-6 h-3 border border-white rounded-sm relative">
                      <div className="absolute inset-0.5 bg-white rounded-sm" style={{ width: '80%' }} />
                    </div>
                  </div>
                </div>
                
                {/* Image content */}
                <div className="aspect-[9/19.5] overflow-hidden">
                  <img
                    src={imageSrc}
                    alt="המלצה"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full" />
              </div>
              
              {/* Side buttons */}
              <div className="absolute left-[-3px] top-24 w-1 h-8 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute left-[-3px] top-36 w-1 h-12 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute left-[-3px] top-52 w-1 h-12 bg-[#2a2a2a] rounded-l-sm" />
              <div className="absolute right-[-3px] top-32 w-1 h-16 bg-[#2a2a2a] rounded-r-sm" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TestimonialsSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? testimonialImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === testimonialImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="testimonials" className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf0] via-[#f9f0dd]/50 to-[#fffcf0]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#ddc1a7]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e5b78a]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20" dir="rtl">
        {/* Section header */}
        <motion.div
          variants={SlidUpRight(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b4f47]/10 border border-[#ddc1a7]/50 text-sm font-medium text-[#5b4f47] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            מה אומרות הלקוחות
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5b4f47] leading-tight mb-6">
            המלצות מלקוחות
            <span className="block text-[#a06c3b]">שכבר חוו את השינוי</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#5b4f47]/80 leading-relaxed">
            לחצי על כל המלצה כדי לצפות בה במסך מלא
          </p>
        </motion.div>

        {/* Main testimonials container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 sm:p-8 rounded-3xl bg-[#5b4f47]/60 backdrop-blur-lg border border-white/10"
        >
          {/* Scroll buttons */}
          <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-2 z-20">
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all ${
                canScrollRight ? 'hover:bg-white hover:scale-110' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5b4f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-2 z-20">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all ${
                canScrollLeft ? 'hover:bg-white hover:scale-110' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5b4f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Scrollable testimonials */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedImage(index)}
                className="flex-shrink-0 cursor-pointer group"
              >
                {/* Mini iPhone frame */}
                <div className="relative w-[140px] sm:w-[180px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-xl transition-shadow group-hover:shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-black rounded-b-xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-black rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden">
                    <div className="aspect-[9/16]">
                      <img
                        src={image}
                        alt={`המלצה ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-xs sm:text-sm font-medium flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                          </svg>
                          לחצי לצפייה
                        </span>
                      </div>
                    </div>
                    {/* Home indicator */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-0.5 bg-white/40 rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex sm:hidden justify-center mt-4 gap-1">
            <span className="text-white/60 text-xs">גללי לצדדים לעוד המלצות</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#ddc1a7]/30 shadow-xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">+500</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">לקוחות מרוצות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">4.9</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">דירוג ממוצע</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">98%</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">חוזרות לטיפול</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">+10</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">שנות ניסיון</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* iPhone Modal */}
      <IPhoneModal
        isOpen={selectedImage !== null}
        imageSrc={selectedImage !== null ? testimonialImages[selectedImage] : ''}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};

export default TestimonialsSection;
