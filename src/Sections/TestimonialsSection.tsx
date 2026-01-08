import { motion, AnimatePresence } from 'framer-motion';
import { SlidUpRight } from '../components/Motion';
import { useState, useEffect } from 'react';

// Testimonial images from the folder
const testimonialImagesFallback = [
  '/images/Dikla/Recommendations/1.10.jpeg',
  '/images/Dikla/Recommendations/WhatsApp Image 2025-12-30 at 13.18.35.jpeg',
  '/images/Dikla/Recommendations/WhatsApp Image 2025-12-30 at 13.18.36 (1).jpeg',
  '/images/Dikla/Recommendations/WhatsApp Image 2025-12-30 at 13.18.36 (2).jpeg',
  '/images/Dikla/Recommendations/WhatsApp Image 2025-12-30 at 13.18.36.jpeg',
  '/images/Dikla/Recommendations/WhatsApp Image 2025-12-30 at 13.18.37.jpeg',
  '/images/Dikla/Recommendations/parallax-bg-1.jpg',
  '/images/Dikla/Recommendations/parallax-bg-2.jpg',
  '/images/Dikla/Recommendations/parallax-bg-3.jpg',
  '/images/Dikla/Recommendations/parallax-bg-4.jpg',
  '/images/Dikla/Recommendations/parallax-bg-5.jpg',
  '/images/Dikla/Recommendations/whatsapp-image.jpg',
];

const testimonialImagesFromFolder = Object.values(
  import.meta.glob('../../public/images/Dikla/Recommendations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    as: 'url',
  })
) as unknown as string[];

const testimonialImages = (
  testimonialImagesFromFolder.length > 0 ? testimonialImagesFromFolder : testimonialImagesFallback
).slice().sort((a, b) => a.localeCompare(b));

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

          {/* iPhone Frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-[320px] sm:max-w-[360px]"
          >
            {/* Controls positioned relative to the phone */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-[-52px] sm:left-[-64px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
              aria-label="הקודם"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-[-52px] sm:right-[-64px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
              aria-label="הבא"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute -top-10 right-0 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all"
              aria-label="סגירה"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* iPhone outer frame */}
            <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[3rem] p-3 shadow-2xl">
              {/* iPhone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
              
              {/* iPhone screen */}
              <div className="relative bg-transparent rounded-[2.5rem] overflow-hidden">
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
                <div className="relative aspect-[9/19.5] overflow-hidden bg-transparent">
                  <img
                    src={imageSrc}
                    alt="המלצה"
                    className="relative z-[1] w-full h-full object-contain object-center"
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
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState<1 | -1>(1);

  const featuredReviews = [
    {
      text:
        'הגעתי לטיפול פנים עמוק אחרי תקופה שהעור שלי סבל. התוצאות היו מעבר לציפיות! העור זוהר, חלק ובריא. מדואלה מקצועית, קשובה ומדהימה!',
      name: 'שרה',
      title: 'רמת גן',
      rating: '5.0',
    },
    {
      text:
        'פיסול הפנים הטבעי פשוט שינה לי את החיים! תוצאות כמו ליפטינג אבל בלי ניתוח. העור מתוח, הפנים מחוטבות והביטחון העצמי שלי עלה פלאים. תודה ענקית!',
      name: 'מיכל',
      title: 'תל אביב',
      rating: '5.0',
    },
    {
      text:
        'טיפול הפלזמה להסרת נגעים היה מהיר, יעיל וללא כאב. המקצועיות והסבלנות של מדואלה גרמו לי להרגיש בטוחה לחלוטין. ממליצה בחום!',
      name: 'רונית',
      title: 'גבעתיים',
      rating: '5.0',
    },
    {
      text:
        'פיסול שפתיים ללא מחטים?! הייתי סקפטית בהתחלה, אבל התוצאות מדהימות! השפתיים שלי נראות טבעיות, מלאות ויפות. בדיוק מה שרציתי!',
      name: 'ליאור',
      title: 'חולון',
      rating: '5.0',
    },
  ];

  const total = testimonialImages.length;
  const mod = (n: number) => ((n % total) + total) % total;
  const goPrevCarousel = () => {
    setCarouselDirection(-1);
    setCarouselIndex((v) => mod(v + 1));
  };
  const goNextCarousel = () => {
    setCarouselDirection(1);
    setCarouselIndex((v) => mod(v - 1));
  };

  const getReviewForIndex = (index: number) => {
    const i = ((index % featuredReviews.length) + featuredReviews.length) % featuredReviews.length;
    return featuredReviews[i];
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
    <section id="testimonials" className="relative w-full py-20 sm:py-28 lg:py-32 overflow-visible">
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
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase text-[#5b4f47]/70 tracking-widest mb-2">ביקורות נבחרות</p>
          <h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-[#5b4f47]">
            מה הלקוחות שלנו אומרות
          </h2>
        </motion.div>

        <div className="relative flex items-center justify-center py-12 sm:py-20 min-h-[520px] overflow-visible">
          <div className="w-full max-w-full" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>

            {/* Mobile: single card carousel */}
            <div className="relative w-full sm:hidden">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ type: 'tween', duration: 0.28, ease: 'easeOut' }}
                  className="relative flex justify-center"
                >
                  {(() => {
                    const imageIndex = mod(carouselIndex);
                    const review = getReviewForIndex(carouselIndex);
                    return (
                      <button
                        type="button"
                        onClick={() => setSelectedImage(imageIndex)}
                        className="relative w-[92%] max-w-[360px] min-h-[420px] bg-gradient-to-b from-white/10 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.10)] flex justify-center items-center rounded-2xl backdrop-blur-[10px] transition duration-200 hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99] group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a06c3b]/40"
                      >
                        <div className="absolute inset-3 rounded-2xl shadow-xl ring-1 overflow-hidden bg-gradient-to-br from-[#fffcf0] via-[#faf6ed] to-[#f5ead8] text-[#5b4f47] ring-[#ddc1a7]/30">
                          <div className="p-5 text-right h-full flex flex-col">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-[10px] font-medium text-[#a06c3b] bg-[#a06c3b]/10 px-2 py-0.5 rounded-full">ממליצה</span>
                            </div>

                            <p className="text-sm leading-relaxed text-[#5b4f47]/85 flex-grow">{review.text}</p>

                            <div className="pt-3 mt-3 border-t border-[#ddc1a7]/30 flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] flex items-center justify-center text-white text-xs font-medium shadow-sm">
                                {review.name.charAt(0)}
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-[#5b4f47]">{review.name}</div>
                                <div className="text-[10px] text-[#5b4f47]/50">{review.title}</div>
                              </div>
                            </div>

                            <div className="relative w-[90px] mx-auto mt-4 transform transition-transform duration-300 group-hover:scale-105">
                              <div className="relative bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-[1.2rem] p-1.5 shadow-lg ring-1 ring-white/10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-b-lg z-10" />
                                <div className="relative bg-zinc-900 rounded-[1rem] overflow-hidden aspect-[9/16] ring-1 ring-black/40">
                                  <img
                                    src={testimonialImages[imageIndex]}
                                    alt="המלצה - תצוגה מקדימה"
                                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/25 backdrop-blur-sm rounded-full p-2 shadow-md">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="text-[9px] text-center text-[#5b4f47]/40 mt-1">לחצי לצפייה</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={goPrevCarousel}
                  className="w-11 h-11 rounded-full bg-white/95 text-[#5b4f47] shadow-xl ring-1 ring-[#ddc1a7]/40 hover:bg-white hover:scale-110 transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="הקודם"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={goNextCarousel}
                  className="w-11 h-11 rounded-full bg-white/95 text-[#5b4f47] shadow-xl ring-1 ring-[#ddc1a7]/40 hover:bg-white hover:scale-110 transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="הבא"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop (sm+): 3 overlapping cards */}
            <div className="hidden sm:block">
              <div className="hidden lg:flex pointer-events-none absolute inset-y-0 left-0 right-0 items-center justify-between z-20 px-2 sm:px-6">
                <button
                  type="button"
                  onClick={goPrevCarousel}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/95 text-[#5b4f47] shadow-xl ring-1 ring-[#ddc1a7]/40 hover:bg-white hover:scale-110 transition-all duration-200 cursor-pointer"
                  aria-label="הקודם"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={goNextCarousel}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-white/95 text-[#5b4f47] shadow-xl ring-1 ring-[#ddc1a7]/40 hover:bg-white hover:scale-110 transition-all duration-200 cursor-pointer"
                  aria-label="הבא"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              </div>

              <div className="relative flex flex-row justify-center items-center h-full overflow-visible">
                {(() => {
                  const leftIndex = mod(carouselIndex);
                  const midIndex = mod(carouselIndex + 1);
                  const rightIndex = mod(carouselIndex + 2);

                  const leftReview = getReviewForIndex(carouselIndex);
                  const midReview = getReviewForIndex(carouselIndex + 1);
                  const rightReview = getReviewForIndex(carouselIndex + 2);

                  const mx = 'mx-[-50px]';

                  return (
                    <>
                      <button
                        type="button"
                        onClick={() => setSelectedImage(leftIndex)}
                        className={`relative w-[340px] min-h-[460px] ${mx} -rotate-[10deg] bg-gradient-to-b from-white/10 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.10)] flex justify-center items-center rounded-2xl backdrop-blur-[10px] transition duration-200 hover:-translate-y-1 hover:scale-[1.02] sm:hover:-translate-y-2 sm:hover:scale-105 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a06c3b]/40`}
                      >
                        <div className="absolute inset-3 rounded-2xl shadow-xl ring-1 overflow-hidden bg-gradient-to-br from-[#fffcf0] via-[#faf6ed] to-[#f5ead8] text-[#5b4f47] ring-[#ddc1a7]/30">
                          <div className="p-5 text-right h-full flex flex-col">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-[10px] font-medium text-[#a06c3b] bg-[#a06c3b]/10 px-2 py-0.5 rounded-full">ממליצה</span>
                            </div>

                            <p className="text-sm leading-relaxed text-[#5b4f47]/85 flex-grow">{leftReview.text}</p>

                            <div className="pt-3 mt-3 border-t border-[#ddc1a7]/30 flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] flex items-center justify-center text-white text-xs font-medium shadow-sm">
                                {leftReview.name.charAt(0)}
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-[#5b4f47]">{leftReview.name}</div>
                                <div className="text-[10px] text-[#5b4f47]/50">{leftReview.title}</div>
                              </div>
                            </div>

                            <div className="relative w-[90px] mx-auto mt-4 transform transition-transform duration-300 group-hover:scale-105">
                              <div className="relative bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-[1.2rem] p-1.5 shadow-lg ring-1 ring-white/10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-b-lg z-10" />
                                <div className="relative bg-zinc-900 rounded-[1rem] overflow-hidden aspect-[9/16] ring-1 ring-black/40">
                                  <img
                                    src={testimonialImages[leftIndex]}
                                    alt="המלצה - תצוגה מקדימה"
                                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <p className="text-[9px] text-center text-[#5b4f47]/40 mt-1">לחצי לצפייה</p>
                            </div>
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedImage(midIndex)}
                        className={`relative w-[340px] min-h-[460px] ${mx} -rotate-[6deg] bg-gradient-to-b from-white/8 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.10)] flex justify-center items-center rounded-2xl backdrop-blur-[10px] transition duration-200 hover:-translate-y-1 hover:scale-[1.02] sm:hover:-translate-y-2 sm:hover:scale-105 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a06c3b]/40`}
                      >
                        <div className="absolute inset-3 rounded-2xl shadow-xl ring-1 overflow-hidden bg-gradient-to-br from-[#fffcf0] via-[#faf6ed] to-[#f5ead8] text-[#5b4f47] ring-[#ddc1a7]/30">
                          <div className="p-5 text-right h-full flex flex-col">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-[10px] font-medium text-[#a06c3b] bg-[#a06c3b]/10 px-2 py-0.5 rounded-full">ממליצה</span>
                            </div>

                            <p className="text-sm leading-relaxed text-[#5b4f47]/85 flex-grow">{midReview.text}</p>

                            <div className="pt-3 mt-3 border-t border-[#ddc1a7]/30 flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] flex items-center justify-center text-white text-xs font-medium shadow-sm">
                                {midReview.name.charAt(0)}
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-[#5b4f47]">{midReview.name}</div>
                                <div className="text-[10px] text-[#5b4f47]/50">{midReview.title}</div>
                              </div>
                            </div>

                            <div className="relative w-[90px] mx-auto mt-4 transform transition-transform duration-300 group-hover:scale-105">
                              <div className="relative bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-[1.2rem] p-1.5 shadow-lg ring-1 ring-white/10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-b-lg z-10" />
                                <div className="relative bg-zinc-900 rounded-[1rem] overflow-hidden aspect-[9/16] ring-1 ring-black/40">
                                  <img
                                    src={testimonialImages[midIndex]}
                                    alt="המלצה - תצוגה מקדימה"
                                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <p className="text-[9px] text-center text-[#5b4f47]/40 mt-1">לחצי לצפייה</p>
                            </div>
                          </div>
                        </div>
                      </button>

                      <AnimatePresence initial={false} mode="wait">
                        <motion.button
                          type="button"
                          key={rightIndex}
                          onClick={() => setSelectedImage(rightIndex)}
                          initial={{ opacity: 0, x: carouselDirection === 1 ? 140 : -140, scale: 0.96 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: carouselDirection === 1 ? 140 : -140, scale: 0.96 }}
                          transition={{ type: 'tween', duration: 0.26, ease: 'easeOut' }}
                          className={`relative w-[340px] min-h-[460px] ${mx} rotate-0 bg-gradient-to-b from-white/6 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.10)] flex justify-center items-center rounded-2xl backdrop-blur-[10px] transition duration-200 hover:-translate-y-1 hover:scale-[1.02] sm:hover:-translate-y-2 sm:hover:scale-105 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a06c3b]/40`}
                        >
                          <div className="absolute inset-3 rounded-2xl shadow-xl ring-1 overflow-hidden bg-gradient-to-br from-[#fffcf0] via-[#faf6ed] to-[#f5ead8] text-[#5b4f47] ring-[#ddc1a7]/30">
                            <div className="p-5 text-right h-full flex flex-col">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-[10px] font-medium text-[#a06c3b] bg-[#a06c3b]/10 px-2 py-0.5 rounded-full">ממליצה</span>
                              </div>

                              <p className="text-sm leading-relaxed text-[#5b4f47]/85 flex-grow">{rightReview.text}</p>

                              <div className="pt-3 mt-3 border-t border-[#ddc1a7]/30 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] flex items-center justify-center text-white text-xs font-medium shadow-sm">
                                  {rightReview.name.charAt(0)}
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-[#5b4f47]">{rightReview.name}</div>
                                  <div className="text-[10px] text-[#5b4f47]/50">{rightReview.title}</div>
                                </div>
                              </div>

                              <div className="relative w-[90px] mx-auto mt-4 transform transition-transform duration-300 group-hover:scale-105">
                                <div className="relative bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-[1.2rem] p-1.5 shadow-lg ring-1 ring-white/10">
                                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2.5 bg-black rounded-b-lg z-10" />
                                  <div className="relative bg-zinc-900 rounded-[1rem] overflow-hidden aspect-[9/16] ring-1 ring-black/40">
                                    <img
                                      src={testimonialImages[rightIndex]}
                                      alt="המלצה - תצוגה מקדימה"
                                      className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                                <p className="text-[9px] text-center text-[#5b4f47]/40 mt-1">לחצי לצפייה</p>
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      </AnimatePresence>
                    </>
                  );
                })()}
              </div>

              <div className="mt-5 flex lg:hidden items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={goPrevCarousel}
                  className="w-11 h-11 rounded-full bg-white/95 text-[#5b4f47] shadow-xl ring-1 ring-[#ddc1a7]/40 hover:bg-white hover:scale-110 transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="הקודם"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={goNextCarousel}
                  className="w-11 h-11 rounded-full bg-white/95 text-[#5b4f47] shadow-xl ring-1 ring-[#ddc1a7]/40 hover:bg-white hover:scale-110 transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="הבא"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
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
