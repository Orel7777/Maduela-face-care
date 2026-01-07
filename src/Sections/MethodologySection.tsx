import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';
import { SiYoutubeshorts } from 'react-icons/si';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';

const steps = [
  {
    title: 'היכרות עם העור והקצב שלך',
    text: 'שיחה קצרה שבה נבין יחד מה מטרת הטיפול, מה מרגיש לך בעור ביומיום ומה הכי מפריע לך במראה.',
  },
  {
    title: 'אבחון עדין ומדויק',
    text: 'אני בוחנת את העור במגע ובעין מקצועית – מרקם, רגישות, לחות, פיגמנטציה ועוד, כדי לבחור טיפול מותאם אישית.',
  },
  {
    title: 'טיפול חווייתי ומרגיע',
    text: 'טיפול מקצועי עם מוצרים פעילים אך עדינים, מגע נעים ושימת לב לפרטים הקטנים – כדי שתצאי רגועה וזוהרת.',
  },
  {
    title: 'המשך בבית בליווי צמוד',
    text: 'המלצה על שגרת טיפוח יומיומית שמתאימה לך באמת, עם אפשרות ללווי אישי בווטסאפ גם אחרי הטיפול.',
  },
];

const shortVideos = [
  {
    title: 'טיפול מדויק ונעים',
    subtitle: 'תוצאה שמרגישים',
    thumbnailSrc: '/תמונות/דקלה/ביקורות/WhatsApp Image 2025-12-30 at 13.18.35.jpeg',
    videoSrc: '/תמונות/דקלה/סרטונים/1.mp4',
    href: '',
  },
  {
    title: 'חוויה רגועה',
    subtitle: 'וליווי אישי',
    thumbnailSrc: '/תמונות/דקלה/ביקורות/WhatsApp Image 2025-12-30 at 13.18.36.jpeg',
    videoSrc: '/תמונות/דקלה/סרטונים/2.mp4',
    href: '',
  },
  {
    title: 'המלצה קצרה',
    subtitle: 'מהלב',
    thumbnailSrc: '/תמונות/דקלה/ביקורות/WhatsApp Image 2025-12-30 at 13.18.36 (1).jpeg',
    videoSrc: '/תמונות/דקלה/סרטונים/3.mp4',
    href: '',
  },
  {
    title: 'שירות ומקצועיות',
    subtitle: 'ברמה אחרת',
    thumbnailSrc: '/תמונות/דקלה/ביקורות/WhatsApp Image 2025-12-30 at 13.18.36 (2).jpeg',
    videoSrc: '/תמונות/דקלה/סרטונים/1.mp4',
    href: '',
  },
  {
    title: 'עור מאוזן',
    subtitle: 'וזוהר טבעי',
    thumbnailSrc: '/תמונות/דקלה/ביקורות/WhatsApp Image 2025-12-30 at 13.18.37.jpeg',
    videoSrc: '/תמונות/דקלה/סרטונים/2.mp4',
    href: '',
  },
  {
    title: 'תוצאות מדהימות',
    subtitle: 'עור בריא וזוהר',
    thumbnailSrc: '/תמונות/דקלה/ביקורות/1.10.jpeg',
    videoSrc: '/תמונות/דקלה/סרטונים/3.mp4',
    href: '',
  },
];

const MethodologySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [scrollKey, setScrollKey] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mobileItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const baseVideos = shortVideos.slice(0, 5);
  // Duplicate twice for seamless loop
  const duplicatedVideos = [...baseVideos, ...baseVideos];

  const handleCardClick = (baseIndex: number) => {
    setSelectedIndex(baseIndex);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % baseVideos.length;
    });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + baseVideos.length) % baseVideos.length;
    });
  };

  const scrollToMobileIndex = (index: number) => {
    const el = mobileItemRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const selectedVideo = selectedIndex === null ? null : baseVideos[selectedIndex];

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
          <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86] mb-2 text-right">
            שיטת הטיפול
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47] mb-3">
            טיפול מדויק, נעים ומלווה
          </h2>
          <p className="text-sm sm:text-base text-[#5b4f47]/80 max-w-2xl text-right ml-auto">
            השיטה שלי משלבת ידע מקצועי מעודכן, מגע עדין והרבה הקשבה. המטרה היא לא רק עור מאוזן וזוהר,
            אלא גם חוויה רגועה בגוף ובלב.
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
          <motion.div
            variants={SlidUpRight(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-right mb-6 sm:mb-8"
          >
            <div className="flex items-center gap-2 justify-end mb-2">
              <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86]">
                סרטונים קצרים
              </p>
              <SiYoutubeshorts className="w-4 h-4 text-[#fe0034]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#b59b86]">
                shorts
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#5b4f47]">
              הצצה קצרה לחוויה
            </h3>
          </motion.div>

          <div className="sm:hidden">
            <div
              className="relative overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-5 py-4 px-1"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {baseVideos.map((video, index) => (
                <div
                  key={video.title}
                  ref={(el) => {
                    mobileItemRefs.current[index] = el;
                  }}
                  onClick={() => handleCardClick(index)}
                  className="snap-center group/card relative shrink-0 w-[78%] max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-white/40 ring-1 ring-black/5 bg-[#fffcf0]"
                >
                  <video
                    src={`${video.videoSrc}#t=0.1`}
                    poster={video.thumbnailSrc}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-black/10 group-hover/card:scale-110 transition-transform duration-300">
                      <SiYoutubeshorts className="w-8 h-8 text-[#fe0034]" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-20" dir="rtl">
                    <h4 className="text-lg font-bold text-white tracking-tight drop-shadow-md">
                      {video.title}
                    </h4>
                    <p className="text-white/80 text-sm mt-1 font-medium">
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                type="button"
                onClick={() => {
                  const next = (mobileIndex - 1 + baseVideos.length) % baseVideos.length;
                  setMobileIndex(next);
                  scrollToMobileIndex(next);
                }}
                className="w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="הבא"
              >
                <IoChevronForward className="w-6 h-6 text-[#5b4f47]" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const prev = (mobileIndex + 1) % baseVideos.length;
                  setMobileIndex(prev);
                  scrollToMobileIndex(prev);
                }}
                className="w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="הקודם"
              >
                <IoChevronBack className="w-6 h-6 text-[#5b4f47]" />
              </button>
            </div>
          </div>

          <motion.div 
            className="relative w-full overflow-hidden hidden sm:block"
            viewport={{ once: false, amount: 0.1 }}
            onViewportEnter={() => {
              setHasStarted(true);
              setIsPaused(false);
              setScrollKey((k) => k + 1);
            }}
            onPointerEnter={(e) => {
              if (e.pointerType === 'mouse') setIsPaused(true);
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === 'mouse') setIsPaused(false);
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#f9f0dd] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#f9f0dd] to-transparent z-10 pointer-events-none" />

            <div
              key={scrollKey}
              ref={carouselRef}
              className="flex gap-5 sm:gap-6 py-4 animate-scroll"
              style={{
                width: 'max-content',
                animationPlayState: !hasStarted || isPaused ? 'paused' : 'running',
              }}
            >
              <style>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 20s linear infinite;
                }
              `}</style>
              {duplicatedVideos.map((video, index) => (
                <div
                  key={`${video.title}-${index}`}
                  onClick={() => handleCardClick(index % baseVideos.length)}
                  className="group/card relative shrink-0 w-56 sm:w-64 md:w-72 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-white/40 ring-1 ring-black/5 bg-[#fffcf0]"
                >
                  <video
                    src={`${video.videoSrc}#t=0.1`}
                    poster={video.thumbnailSrc}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg ring-1 ring-black/10 group-hover/card:scale-110 transition-transform duration-300">
                      <SiYoutubeshorts className="w-8 h-8 text-[#fe0034]" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center z-20" dir="rtl">
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
                      {video.title}
                    </h4>
                    <p className="text-white/80 text-sm sm:text-base mt-1 font-medium">
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* MacBook-style Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Container */}
            <motion.div
              className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] flex flex-col items-center gap-4"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop Navigation Buttons (hidden on mobile) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Previous"
              >
                <IoChevronBack className="w-7 h-7 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Next"
              >
                <IoChevronForward className="w-7 h-7 text-white" />
              </button>

              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-20" />
                
                {/* Screen */}
                <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/16]">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>

                  {/* Video Content */}
                  <video
                    key={selectedVideo.videoSrc}
                    src={selectedVideo.videoSrc}
                    poster={selectedVideo.thumbnailSrc}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                  />

                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-center pointer-events-none" dir="rtl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-lg">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg mt-1 font-medium">
                      {selectedVideo.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Buttons (below video) */}
              <div className="flex md:hidden items-center justify-center gap-4 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Previous"
                >
                  <IoChevronBack className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="w-12 h-12 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Next"
                >
                  <IoChevronForward className="w-6 h-6 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MethodologySection;
