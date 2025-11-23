import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoadingProps {
  onDone?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onDone }) => {
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const preloader = preloaderRef.current;
    const progressBar = progressBarRef.current;

    if (!preloader || !progressBar) return;

    // Reset initial state
    gsap.set(preloader, { opacity: 1, scale: 1, display: 'flex' });
    gsap.set(progressBar, { width: '0%' });

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        if (onDone) {
          onDone();
        }
      },
    });

    tl.to(progressBar, {
      width: '100%',
      duration: 0.7,
      ease: 'power2.out',
    })
      .to(
        preloader,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: 'power3.inOut',
          onComplete: () => {
            (preloader as HTMLDivElement).style.display = 'none';
          },
        },
        '>-0.15'
      );

    return () => {
      tl.kill();
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={preloaderRef}
      className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center px-6"
      style={{
        background:
          'radial-gradient(circle at top, rgba(255,252,240,0.95) 0%, #efe3b8 40%, #ddc1a7 100%)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-sm w-full flex flex-col items-center gap-6">
        {/* Logo + title */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-[0_12px_35px_rgba(91,79,71,0.35)] border-4 border-[#fffcf0] bg-gradient-to-br from-[#ddc1a7] to-[#efe3b8] flex items-center justify-center overflow-hidden">
            <img
              src="/לוגו/לוגו_גדול.jpeg"
              alt="דקלה מדואלה"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#69512533] via-transparent to-transparent" />
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-base font-semibold tracking-tight text-[#5b4f47]">
              טוען את חוויית הטיפול שלך
            </p>
            <p className="text-xs sm:text-sm text-[#5b4f47]/80 mt-1">
              רגע קטן של קסם לפני שנכנסים לקליניקה
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-2/3 max-w-xs mx-auto mt-2">
          <div className="h-2 rounded-full bg-[#fffcf0]/70 overflow-hidden shadow-inner">
            <div
              ref={progressBarRef}
              className="progress-bar h-full rounded-full"
              style={{ backgroundColor: '#5b4f47' }}
            />
          </div>
        </div>

        {/* Subtle bottom text */}
        <div className="mt-2 text-[11px] sm:text-xs text-[#5b4f47]/70 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#fffcf0]/70 border border-[#ddc1a7]/60 shadow-sm">
            קליניקת טיפולי פנים מקצועיים בנס ציונה
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
