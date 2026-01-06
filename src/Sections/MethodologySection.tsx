import { useState } from 'react';
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
    thumbnailSrc: '/תמונות/המלצות/1.1.jpeg',
    href: '',
  },
  {
    title: 'חוויה רגועה',
    subtitle: 'וליווי אישי',
    thumbnailSrc: '/תמונות/המלצות/1.2.jpeg',
    href: '',
  },
  {
    title: 'המלצה קצרה',
    subtitle: 'מהלב',
    thumbnailSrc: '/תמונות/המלצות/1.3.jpeg',
    href: '',
  },
  {
    title: 'שירות ומקצועיות',
    subtitle: 'ברמה אחרת',
    thumbnailSrc: '/תמונות/המלצות/1.4.jpeg',
    href: '',
  },
  {
    title: 'עור מאוזן',
    subtitle: 'וזוהר טבעי',
    thumbnailSrc: '/תמונות/המלצות/1.5.jpeg',
    href: '',
  },
];

const MethodologySection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const baseVideos = shortVideos.slice(0, 5);
  const duplicatedVideos = [
    ...baseVideos,
    ...baseVideos,
    ...baseVideos,
    ...baseVideos,
    ...baseVideos,
    ...baseVideos,
    ...baseVideos,
    ...baseVideos,
  ];

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

          <div 
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#f9f0dd] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#f9f0dd] to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex gap-5 sm:gap-6 py-4"
              animate={{
                x: isPaused ? undefined : ['0%', '-12.5%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
              style={{ width: 'max-content' }}
            >
              {duplicatedVideos.map((video, index) => (
                <div
                  key={`${video.title}-${index}`}
                  onClick={() => handleCardClick(index % baseVideos.length)}
                  className="group/card relative shrink-0 w-56 sm:w-64 md:w-72 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-white/40 ring-1 ring-black/5 bg-[#fffcf0]"
                >
                  <img
                    src={video.thumbnailSrc}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* MacBook-style Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* MacBook Frame */}
            <motion.div
              className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <IoChevronBack className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute -right-10 sm:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <IoChevronForward className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>

              {/* Phone/Device Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-20" />
                
                {/* Screen */}
                <div className="relative bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/16]">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 z-30 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                  >
                    <IoClose className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>

                  {/* Video/Image Content */}
                  <img
                    src={selectedVideo.thumbnailSrc}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center" dir="rtl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-lg">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg mt-1 font-medium">
                      {selectedVideo.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Device Bottom Bar */}
              <div className="mx-auto mt-2 w-24 sm:w-32 h-1 sm:h-1.5 bg-gray-600 rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MethodologySection;
