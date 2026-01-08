import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const stories = useMemo(
    () => [
      {
        thumbSrc: '/images/Dikla/picture/4.jpeg',
        label: 'לפני ואחרי',
        active: true,
        type: 'image' as const,
        src: '/images/Dikla/picture/4.jpeg',
      },
      {
        thumbSrc: '/images/Dikla/picture/16.jpeg',
        label: 'תוצאות',
        active: true,
        type: 'image' as const,
        src: '/images/Dikla/picture/16.jpeg',
      },
      {
        thumbSrc: '/images/Dikla/video/1.mp4',
        label: 'טיפולים',
        active: true,
        type: 'video' as const,
        src: '/images/Dikla/video/1.mp4',
      },
      {
        thumbSrc: '/images/Dikla/video/20251104_114301000_iOS_0 (video-converter.com).mp4',
        label: 'סטורי',
        active: true,
        type: 'video' as const,
        src: '/images/Dikla/video/20251104_114301000_iOS_0 (video-converter.com).mp4',
      },
    ],
    []
  );

  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isStoryPaused, setIsStoryPaused] = useState(false);
  const storyVideoRef = useRef<HTMLVideoElement | null>(null);
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState<Record<number, boolean>>({});
  const [storyMediaLoaded, setStoryMediaLoaded] = useState(false);
  const imageTimerRef = useRef<NodeJS.Timeout | null>(null);

  const trustGridDesktopRef = useRef<HTMLDivElement | null>(null);
  const trustGridMobileRef = useRef<HTMLDivElement | null>(null);
  const trustHasAnimatedRef = useRef(false);
  const [trustYears, setTrustYears] = useState(0);
  const [trustGoogleScore, setTrustGoogleScore] = useState(0);
  const [trustPersonal, setTrustPersonal] = useState(0);

  const openStory = useCallback(
    (index: number) => {
      setActiveStoryIndex(index);
      setIsStoryPaused(false);
      setIsStoryOpen(true);
      setStoryMediaLoaded(false);
    },
    [setActiveStoryIndex, setIsStoryPaused, setIsStoryOpen]
  );

  const closeStory = useCallback(() => {
    if (imageTimerRef.current) {
      clearTimeout(imageTimerRef.current);
      imageTimerRef.current = null;
    }
    setIsStoryOpen(false);
    setIsStoryPaused(false);
  }, []);

  const goPrevStory = useCallback(() => {
    if (imageTimerRef.current) {
      clearTimeout(imageTimerRef.current);
      imageTimerRef.current = null;
    }
    setActiveStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setIsStoryPaused(false);
    setStoryMediaLoaded(false);
  }, [stories.length]);

  const goNextStory = useCallback(() => {
    if (imageTimerRef.current) {
      clearTimeout(imageTimerRef.current);
      imageTimerRef.current = null;
    }
    setActiveStoryIndex((prev) => (prev + 1) % stories.length);
    setIsStoryPaused(false);
    setStoryMediaLoaded(false);
  }, [stories.length]);

  useEffect(() => {
    if (!isStoryOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeStory();
        return;
      }
      if (e.key === 'ArrowLeft') {
        goPrevStory();
        return;
      }
      if (e.key === 'ArrowRight') {
        goNextStory();
        return;
      }
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setIsStoryPaused((p) => !p);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeStory, goNextStory, goPrevStory, isStoryOpen]);

  useEffect(() => {
    if (!isStoryOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isStoryOpen]);

  useEffect(() => {
    const desktopEl = trustGridDesktopRef.current;
    const mobileEl = trustGridMobileRef.current;
    if (!desktopEl && !mobileEl) return;

    const runCounter = (setValue: (v: number) => void, target: number, duration = 1400) => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = target * ease;
        setValue(val);
        if (progress < 1) window.requestAnimationFrame(step);
        else setValue(target);
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (trustHasAnimatedRef.current) return;
          trustHasAnimatedRef.current = true;

          runCounter(setTrustYears, 10, 5200);
          runCounter(setTrustGoogleScore, 5, 4800);
          runCounter(setTrustPersonal, 100, 5600);
        });
      },
      { threshold: 0.35 }
    );

    if (desktopEl) observer.observe(desktopEl);
    if (mobileEl) observer.observe(mobileEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStoryOpen) return;
    
    const currentStory = stories[activeStoryIndex];
    if (!currentStory) return;

    if (currentStory.type === 'video') {
      const el = storyVideoRef.current;
      if (!el) return;

      if (isStoryPaused) {
        el.pause();
        return;
      }

      const p = el.play();
      if (p && typeof (p as Promise<void>).catch === 'function') {
        (p as Promise<void>).catch(() => undefined);
      }
    } else if (currentStory.type === 'image' && storyMediaLoaded && !isStoryPaused) {
      if (imageTimerRef.current) {
        clearTimeout(imageTimerRef.current);
      }
      imageTimerRef.current = setTimeout(() => {
        goNextStory();
      }, 5000);
    }

    return () => {
      if (imageTimerRef.current) {
        clearTimeout(imageTimerRef.current);
        imageTimerRef.current = null;
      }
    };
  }, [isStoryOpen, isStoryPaused, activeStoryIndex, storyMediaLoaded, stories, goNextStory]);

  return (
    <section className="relative w-full -mt-24 min-h-[90vh] lg:min-h-screen overflow-hidden">
      {isStoryOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeStory();
          }}
        >
          <motion.div
            className="relative w-[92vw] max-w-[420px] rounded-[3rem] bg-[#2a2421]/90 border-[3px] border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.65)] overflow-hidden"
            initial={{ scale: 0.96, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/60 rounded-b-2xl z-40" />

            <button
              type="button"
              onClick={closeStory}
              className="absolute top-6 right-6 z-50 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label="סגירה"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="relative w-full aspect-[9/16] bg-black">
              {!storyMediaLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    <span className="text-white/70 text-sm">טוען...</span>
                  </div>
                </div>
              )}
              {stories[activeStoryIndex]?.type === 'video' ? (
                <video
                  key={stories[activeStoryIndex]?.src}
                  ref={storyVideoRef}
                  src={stories[activeStoryIndex]?.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  disablePictureInPicture
                  onLoadedData={() => setStoryMediaLoaded(true)}
                />
              ) : (
                <img
                  key={stories[activeStoryIndex]?.src}
                  src={stories[activeStoryIndex]?.src}
                  alt={stories[activeStoryIndex]?.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoad={() => setStoryMediaLoaded(true)}
                />
              )}

              <div className="absolute top-0 left-0 right-0 p-4 pt-10 z-20">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500">
                      <div className="p-0.5 bg-black rounded-full">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          {stories[activeStoryIndex]?.type === 'video' ? (
                            <video
                              src={`${stories[activeStoryIndex]?.src}#t=0.1`}
                              className="w-10 h-10 rounded-full object-cover"
                              muted
                              playsInline
                              preload="metadata"
                              disablePictureInPicture
                            />
                          ) : (
                            <img
                              src={stories[activeStoryIndex]?.src}
                              alt={stories[activeStoryIndex]?.label}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">{stories[activeStoryIndex]?.label}</div>
                      <div className="text-xs text-white/70">{stories[activeStoryIndex]?.type === 'video' ? 'סטורי וידאו' : 'סטורי תמונה'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={goPrevStory}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label="סטורי קודם"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsStoryPaused((p) => !p)}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 hover:bg-white/25 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label={isStoryPaused ? 'המשך ניגון' : 'עצירה'}
                  >
                    {isStoryPaused ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M6 5h4v14H6z" />
                        <path d="M14 5h4v14h-4z" />
                      </svg>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={goNextStory}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label="סטורי הבא"
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
        </motion.div>
      )}

      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/Dikla/main.jpeg"
          alt="טיפול פנים מקצועי"
          className="w-full h-full object-contain object-center sm:object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#fffcf0]/98 via-[#fffcf0]/85 to-[#fffcf0]/40" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#fffcf0] via-transparent to-[#fffcf0]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ddc1a7]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e5b78a]/15 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20">
        <div className="sm:hidden pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-10 bg-gradient-to-b from-[#ddc1a7]/55 via-[#fffcf0]/90 to-transparent rounded-b-[3rem]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text content - Right side for RTL - enters from right */}
          <motion.div
            className="order-1 lg:order-2 text-right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#5b4f47]/10 border border-[#ddc1a7]/50 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-[#5b4f47]">קליניקת בוטיק בנס ציונה • זמינה לתורים</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-[#5b4f47] leading-tight tracking-tight">
                דקלה מדואלה
              </span>
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-medium text-[#a06c3b]">
                קוסמטיקאית רפואית
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[#5b4f47]/85 leading-relaxed mb-8 max-w-xl mr-0 ml-auto"
            >
              <strong className="text-[#5b4f47]">יותר מ-10 שנות ניסיון</strong> בטיפולי פנים מעמיקים ומדויקים.
              כל טיפול נבנה במיוחד עבורך – להחזיר לעור את הזוהר הטבעי, האיזון והביטחון.
              <span className="block mt-3 text-[#a06c3b] font-medium">הגיע הזמן שהעור שלך יקבל את הטיפול שמגיע לו.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-end justify-end mb-12 sm:mb-14"
            >
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact()}
                className="group relative inline-flex items-center justify-center gap-3 px-5 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-[#5b4f47] via-[#695125] to-[#5b4f47] shadow-[0_8px_30px_rgba(91,79,71,0.35)] hover:shadow-[0_12px_40px_rgba(91,79,71,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                </span>
                <span className="relative z-10">קביעת תור עכשיו</span>
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#695125] to-[#5b4f47] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href="https://wa.me/972533353203"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-[#5b4f47] bg-white/80 backdrop-blur-sm border-2 border-[#ddc1a7] hover:bg-white hover:border-[#a06c3b] shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>שיחה בוואטסאפ</span>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <div className="hidden sm:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-3 gap-4 sm:gap-6"
                ref={trustGridDesktopRef}
              >
                <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                  <div className="text-2xl sm:text-3xl font-bold text-[#5b4f47]">+{Math.round(trustYears)}</div>
                  <div className="text-xs sm:text-sm text-[#5b4f47]/70 mt-1">שנות ניסיון</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                  <div className="text-2xl sm:text-3xl font-bold text-[#5b4f47]">{Math.round(trustGoogleScore)}/5</div>
                  <div className="text-xs sm:text-sm text-[#5b4f47]/70 mt-1">בגוגל עסקים</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                  <div className="text-2xl sm:text-3xl font-bold text-[#5b4f47]">{Math.round(trustPersonal)}%</div>
                  <div className="text-xs sm:text-sm text-[#5b4f47]/70 mt-1">התאמה אישית</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-6 flex items-center justify-end gap-3"
              >
                <span className="text-xs text-[#5b4f47]/70 select-none">נפתח בגוגל (בטאב חדש)</span>

                <motion.a
                  href="https://www.google.com/search?kgmid=/g/11m6qsnxhr&hl=iw-IL&q=%D7%9E%D7%93%D7%95%D7%90%D7%9C%D7%94+%D7%A7%D7%9C%D7%99%D7%A0%D7%99%D7%A7+-+%D7%93%D7%A7%D7%9C%D7%94+%D7%A9%D7%9C%D7%99%D7%98&shndl=30&shem=lcuae,shrtsdl&source=sh/x/loc/osrp/m1/4&kgs=851252971ce84175&utm_source=lcuae,shrtsdl,sh/x/loc/osrp/m1/4"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#ddc1a7]/60 shadow-sm hover:bg-white/90 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a06c3b]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf2]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" className="w-3.5 h-3.5">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#5b4f47]">5.0</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5b4f47]/70 group-hover:text-[#5b4f47] transition-colors">
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Image card - Left side for RTL - enters from left */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start mt-10 sm:mt-12 lg:mt-0"
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="absolute inset-0 bg-[#ddc1a7]/25 blur-[80px] rounded-full transform translate-x-10 translate-y-10" />
              <motion.div
                className="relative z-10 w-[92vw] max-w-[380px] sm:w-[340px] sm:max-w-none md:w-[380px] lg:w-[420px] rounded-[3rem] bg-[#5b4f47]/10 backdrop-blur-sm border-[3px] border-[#ddc1a7]/70 shadow-[0_0_60px_-15px_rgba(160,108,59,0.35),inset_0_0_40px_rgba(221,193,167,0.25)] overflow-hidden flex flex-col"
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2421] rounded-b-2xl z-40" />
                <div className="w-full px-6 pt-12 pb-4 bg-transparent">
                  <div className="flex gap-4 overflow-x-auto no-scrollbar">
                    {stories.map((story, index) => (
                      <button
                        key={story.label}
                        type="button"
                        onClick={() => openStory(index)}
                        className="group flex flex-col items-center gap-1 min-w-[64px] focus:outline-none cursor-pointer"
                        aria-label={`פתיחת סטורי: ${story.label}`}
                      >
                        <div
                          className={
                            story.active
                              ? 'p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 transition-transform duration-300 group-hover:scale-[1.06] group-active:scale-[0.98] group-focus-visible:scale-[1.06]'
                              : 'p-[2px] rounded-full bg-[#5b4f47]/25 transition-transform duration-300 group-hover:scale-[1.06] group-active:scale-[0.98] group-focus-visible:scale-[1.06]'
                          }
                        >
                          <div className="p-0.5 bg-white rounded-full ring-0 ring-[#a06c3b]/0 group-hover:ring-2 group-hover:ring-[#a06c3b]/35 group-focus-visible:ring-2 group-focus-visible:ring-[#a06c3b]/45 transition-all">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden">
                              {!thumbnailsLoaded[index] && (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#5b4f47]/20">
                                  <div className="w-5 h-5 border-2 border-[#a06c3b]/30 border-t-[#a06c3b] rounded-full animate-spin" />
                                </div>
                              )}
                              {story.type === 'video' ? (
                                <video
                                  src={`${story.src}#t=0.1`}
                                  className={
                                    story.active
                                      ? 'w-14 h-14 rounded-full object-cover transition duration-300 group-hover:brightness-[1.03]'
                                      : 'w-14 h-14 rounded-full object-cover opacity-70 transition duration-300 group-hover:opacity-95'
                                  }
                                  muted
                                  playsInline
                                  preload="metadata"
                                  controls={false}
                                  disablePictureInPicture
                                  onLoadedData={() => setThumbnailsLoaded(prev => ({ ...prev, [index]: true }))}
                                  aria-label={story.label}
                                />
                              ) : (
                                <img
                                  src={story.src}
                                  alt={story.label}
                                  className={
                                    story.active
                                      ? 'w-14 h-14 rounded-full object-cover transition duration-300 group-hover:brightness-[1.03]'
                                      : 'w-14 h-14 rounded-full object-cover opacity-70 transition duration-300 group-hover:opacity-95'
                                  }
                                  onLoad={() => setThumbnailsLoaded(prev => ({ ...prev, [index]: true }))}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        <span
                          className={
                            story.active
                              ? 'text-xs text-[#5b4f47] transition-colors group-hover:text-[#a06c3b]'
                              : 'text-xs text-[#5b4f47]/55 transition-colors group-hover:text-[#5b4f47]'
                          }
                        >
                          {story.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative w-full aspect-[3/4] ring-1 ring-inset ring-[#ddc1a7]/60">
                  <img
                    src="/images/Dikla/main.jpeg"
                    alt="תוצאה אחרי טיפול פנים"
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/60 via-transparent to-transparent" />
                  
                  {/* Floating badge on image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ddc1a7]/50 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                      </div>
                      <div className="text-right flex-1">
                        <p className="text-sm font-semibold text-[#5b4f47]">תוצאות מוכחות</p>
                        <p className="text-xs text-[#5b4f47]/70">עור זוהר כבר מהטיפול הראשון</p>
                      </div>
                    </div>
                  </div>

                  {/* Rating badge */}
                  <motion.div
                    className="hidden absolute top-6 right-6 px-4 py-2 rounded-full bg-white shadow-lg border border-[#ddc1a7]/50 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.7 2.1-2.6 3.6-5.5 3.6a6.3 6.3 0 0 1 0-12.6c1.7 0 3.2.7 4.3 1.8l2.7-2.7A10.1 10.1 0 0 0 12 2a10 10 0 1 0 0 20c5.8 0 9.7-4.1 9.7-9.9 0-.7-.1-1.2-.2-1.9H12z" />
                      <path fill="#34A853" d="M3.6 7.3l3.2 2.3A6.3 6.3 0 0 1 12 5.1c1.7 0 3.2.7 4.3 1.8l2.7-2.7A10.1 10.1 0 0 0 12 2c-3.9 0-7.3 2.2-9.1 5.3z" opacity=".001" />
                    </svg>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" className="w-3.5 h-3.5">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#5b4f47]">5.0</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements */}
            </div>
          </motion.div>

          <div className="sm:hidden order-3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
              ref={trustGridMobileRef}
            >
              <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                <div className="text-2xl font-bold text-[#5b4f47]">+{Math.round(trustYears)}</div>
                <div className="text-xs text-[#5b4f47]/70 mt-1">שנות ניסיון</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                <div className="text-2xl font-bold text-[#5b4f47]">{Math.round(trustGoogleScore)}/5</div>
                <div className="text-xs text-[#5b4f47]/70 mt-1">בגוגל עסקים</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                <div className="text-2xl font-bold text-[#5b4f47]">{Math.round(trustPersonal)}%</div>
                <div className="text-xs text-[#5b4f47]/70 mt-1">התאמה אישית</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 flex items-center justify-end gap-3"
            >
              <span className="text-xs text-[#5b4f47]/70 select-none">נפתח בגוגל (בטאב חדש)</span>

              <motion.a
                href="https://www.google.com/search?kgmid=/g/11m6qsnxhr&hl=iw-IL&q=%D7%9E%D7%93%D7%95%D7%90%D7%9C%D7%94+%D7%A7%D7%9C%D7%99%D7%A0%D7%99%D7%A7+-+%D7%93%D7%A7%D7%9C%D7%94+%D7%A9%D7%9C%D7%99%D7%98&shndl=30&shem=lcuae,shrtsdl&source=sh/x/loc/osrp/m1/4&kgs=851252971ce84175&utm_source=lcuae,shrtsdl,sh/x/loc/osrp/m1/4"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#ddc1a7]/60 shadow-sm hover:bg-white/90 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a06c3b]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf2]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" className="w-3.5 h-3.5">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#5b4f47]">5.0</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5b4f47]/70 group-hover:text-[#5b4f47] transition-colors">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-[#5b4f47]/30 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1.5 h-3 rounded-full bg-[#5b4f47]/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
