import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const stories = [
  {
    label: 'את',
    src: '/תמונות/טיפולי פנים/video/3.mp4',
    thumb: '/תמונות/טיפולי פנים/picture/14.jpeg',
  },
  {
    label: 'לקוחה',
    src: '/תמונות/טיפולי פנים/video/4.mp4',
    thumb: '/תמונות/טיפולי פנים/picture/15.jpeg',
  },
  {
    label: 'תוצאה',
    src: '/תמונות/טיפולי פנים/video/4.mp4',
    thumb: '/תמונות/טיפולי פנים/picture/5.jpeg',
  },
];

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, prefix = '', suffix = '', duration = 3000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (!inView || hasAnimated) return;

    let start: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (start === null) {
        start = timestamp;
      }
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.round(startValue + (endValue - startValue) * progress);
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, hasAnimated, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

interface HeroSectionProps {
  onOpenContact?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  const handleOpenStory = (index: number) => {
    setActiveStory(index);
  };

  const handleCloseStory = () => {
    setActiveStory(null);
  };

  const handleNextStory = () => {
    if (activeStory === null) return;
    setActiveStory((prev) => (prev === null ? null : (prev + 1) % stories.length));
  };

  const handlePrevStory = () => {
    if (activeStory === null) return;
    setActiveStory((prev) => (prev === null ? null : (prev - 1 + stories.length) % stories.length));
  };
  return (
    <section className="w-full sm:mt-24 mt-12 px-4 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-center">
        <motion.div
          className="order-1 lg:order-2 lg:col-span-6 text-right lg:ml-auto"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="leading-none tracking-tight text-[#5b4f47]">
            <span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold">
              <span
                data-letter=""
                style={{ display: 'inline-block', transform: 'translateY(0px)', opacity: 1 }}
                className="tracking-tighter"
              >
                דקלה
              </span>
              <span className="block" />
              <span
                data-letter=""
                style={{ display: 'inline-block', transform: 'translateY(0px)', opacity: 1 }}
                className="tracking-tighter"
              >
                מדואלה
              </span>
            </span>
          </h1>
          <motion.p
            className="sm:mt-5 sm:text-2xl leading-relaxed max-w-2xl text-base tracking-tight mt-4 text-[#5b4f47]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            טיפולי פנים מעמיקים, עדינים ומדויקים – עם ניסיון, ידע ואהבה גדולה לעור. יחד נתאים עבורך שגרת טיפול
            אישית שתעניק לעור שלך איזון, זוהר ושקט.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-end"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-[#5b4f47] bg-[#fffcf0] hover:bg-[#fffcf0]/90 border border-[#ddc1a7] shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="arrow-right"
                className="lucide lucide-arrow-right w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <span>הכירי את הטיפולים</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="inline-flex items-center justify-center gap-2 hover:bg-[#ddc1a7]/30 text-sm font-medium tracking-tight text-[#5b4f47] bg-[#ddc1a7]/20 border border-[#ddc1a7] rounded-full pt-3 pr-5 pb-3 pl-5 shadow-sm backdrop-blur"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="mail"
                className="lucide lucide-mail w-4 h-4"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <span>שיחת וואטסאפ מהירה</span>
            </button>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="flex flex-row-reverse items-start gap-3 sm:border-t sm:border-[#ddc1a7] sm:pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="map-pin"
                className="lucide lucide-map-pin w-[18px] h-[18px] text-white/50 mt-0.5"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="text-right border-b border-[#ddc1a7] pb-4 sm:border-none sm:pb-0">
                <p className="text-sm font-medium tracking-tight text-[#5b4f47]">קליניקת בוטיק בנס ציונה</p>
                <p className="text-xs text-[#5b4f47]/70 mt-0.5">אווירה ביתית, חמה ומרגיעה</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start gap-3 sm:border-t sm:border-[#ddc1a7] sm:pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="cpu"
                className="lucide lucide-cpu w-[18px] h-[18px] text-white/50 mt-0.5"
              >
                <path d="M12 20v2" />
                <path d="M12 2v2" />
                <path d="M17 20v2" />
                <path d="M17 2v2" />
                <path d="M2 12h2" />
                <path d="M2 17h2" />
                <path d="M2 7h2" />
                <path d="M20 12h2" />
                <path d="M20 17h2" />
                <path d="M20 7h2" />
                <path d="M7 20v2" />
                <path d="M7 2v2" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="8" y="8" width="8" height="8" rx="1" />
              </svg>
              <div className="text-right border-b border-[#ddc1a7] pb-4 sm:border-none sm:pb-0">
                <p className="text-sm font-medium tracking-tight text-[#5b4f47]">התאמה אישית לכל עור</p>
                <p className="text-xs text-[#5b4f47]/70 mt-0.5">טיפול רגיש, מדויק וללא פשרות</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start gap-3 sm:border-t sm:border-[#ddc1a7] sm:pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="check"
                className="lucide lucide-check w-[18px] h-[18px] text-white/50 mt-0.5"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <div className="text-right border-b border-[#ddc1a7] pb-4 sm:border-none sm:pb-0">
                <p className="text-sm font-medium tracking-tight text-[#5b4f47]">זמינות לקביעת תורים</p>
                <p className="text-xs text-[#5b4f47]/70 mt-0.5">ניתן לתאם בקלות בוואטסאפ</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-2 lg:order-1 lg:col-span-5"
          initial={{ opacity: 0, x: -60, rotateY: 8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          whileHover={{ rotateY: 12, rotateX: 6, rotateZ: 2, y: -8 }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1200,
          }}
        >
          <motion.div
            className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden shadow-[0_8px_30px_rgba(91,79,71,0.25)] bg-[#0b0b0f] rounded-3xl border border-[#ddc1a7] max-w-md mx-auto lg:mx-0"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* top "stories" bar */}
            <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-b from-[#5b4f47] via-[#5b4f47]/95 to-[#5b4f47]/80 px-4 pt-3 flex items-start justify-between">
              <div className="flex items-center gap-3">
                {stories.map((story, idx) => (
                  <button
                    key={story.label}
                    type="button"
                    onClick={() => handleOpenStory(idx)}
                    className="flex flex-col items-center text-center text-[10px] text-white/80 focus:outline-none cursor-pointer active:scale-95"
                  >
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2.5px] bg-[conic-gradient(from_210deg,_#f58529,_#dd2a7b,_#8134af,_#515bd4,_#f58529)] shadow-[0_0_0_1px_rgba(255,255,255,0.35)] transition-transform duration-200 ease-out hover:scale-105 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.8)]">
                      <div className="w-full h-full rounded-full bg-[#5b4f47] overflow-hidden flex items-center justify-center">
                        <img
                          src={story.thumb}
                          alt={story.label}
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    </div>
                    <span className="mt-1 truncate max-w-[56px]">{story.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* main image area */}
            <div className="absolute inset-x-0 top-16 sm:top-20 bottom-0">
              <img
                src="/תמונות/טיפולי פנים/picture/15.jpeg"
                alt="טיפול פנים בקליניקה של דקלה מדואלה"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#695125]/40 via-transparent to-transparent" />

              <motion.div
                className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              >
                <div className="rounded-xl bg-[#fffcf0]/90 backdrop-blur-md border border-[#ddc1a7] p-3 shadow-lg text-right">
                  <div className="flex flex-row-reverse items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#695125]" />
                    <div className="text-lg font-semibold tracking-tight text-[#5b4f47]">
                      <AnimatedNumber value={10} prefix="+" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#5b4f47]/80">שנות ניסיון</p>
                </div>
                <div className="rounded-xl bg-[#fffcf0]/90 backdrop-blur-md border border-[#ddc1a7] p-3 shadow-lg text-right">
                  <div className="flex flex-row-reverse items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#695125]" />
                    <div className="text-lg font-semibold tracking-tight text-[#5b4f47]">
                      <AnimatedNumber value={500} prefix="+" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#5b4f47]/80">לקוחות מרוצות</p>
                </div>
                <div className="rounded-xl bg-[#fffcf0]/90 backdrop-blur-md border border-[#ddc1a7] p-3 shadow-lg text-right">
                  <div className="flex flex-row-reverse items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#695125]" />
                    <div className="text-lg font-semibold tracking-tight text-[#5b4f47]">
                      <AnimatedNumber value={100} suffix="%" />
                    </div>
                  </div>
                  <p className="text-[11px] text-[#5b4f47]/80">התאמה אישית</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {activeStory !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={handleCloseStory}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-md sm:max-w-lg bg-[#0b0b0f] rounded-3xl border border-[#ddc1a7] shadow-[0_18px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
            >
              {/* top bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-black via-black/90 to-black/80 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#ddc1a7]">
                    <img
                      src="/לוגו/לוגו_גדול.jpeg"
                      alt="לוגו דקלה"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-xs text-white/80">
                    <span className="font-semibold text-sm">סטורי קליניקה</span>
                    <span className="text-[11px] text-white/60">{stories[activeStory].label}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseStory}
                  className="text-white/70 hover:text-white rounded-full p-1.5 transition-colors"
                >
                  <span className="sr-only">סגירה</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* video area */}
              <div className="relative bg-black flex-1 flex items-center justify-center">
                <video
                  key={stories[activeStory].src}
                  src={stories[activeStory].src}
                  className="w-full h-full max-h-[60vh] object-cover"
                  autoPlay
                  muted
                  controls
                />

                {/* nav arrows */}
                <button
                  type="button"
                  onClick={handlePrevStory}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/70 text-white p-2 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNextStory}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/70 text-white p-2 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* bottom indicator */}
              <div className="flex items-center justify-center gap-1.5 py-3 bg-black/80 border-t border-white/10">
                {stories.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      activeStory === index ? 'w-6 bg-[#ddc1a7]' : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
