import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/תמונות/טיפולי פנים/picture/13.jpeg"
          alt="טיפול פנים מקצועי"
          className="w-full h-full object-cover"
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
              className="flex flex-col sm:flex-row gap-4 justify-end mb-10"
            >
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact()}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-br from-[#5b4f47] via-[#695125] to-[#5b4f47] shadow-[0_8px_30px_rgba(91,79,71,0.4)] hover:shadow-[0_12px_40px_rgba(91,79,71,0.5)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10">קביעת תור עכשיו</span>
                <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#695125] to-[#5b4f47] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-[#5b4f47] bg-white/80 backdrop-blur-sm border-2 border-[#ddc1a7] hover:bg-white hover:border-[#a06c3b] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>שיחה בוואטסאפ</span>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-[#5b4f47]">+10</div>
                <div className="text-xs sm:text-sm text-[#5b4f47]/70 mt-1">שנות ניסיון</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-[#5b4f47]">+500</div>
                <div className="text-xs sm:text-sm text-[#5b4f47]/70 mt-1">לקוחות מרוצות</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#ddc1a7]/40 hover:bg-white/80 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-[#5b4f47]">100%</div>
                <div className="text-xs sm:text-sm text-[#5b4f47]/70 mt-1">התאמה אישית</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image card - Left side for RTL - enters from left */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Main image container */}
              <motion.div
                className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl"
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src="/תמונות/טיפולי פנים/picture/5.jpeg"
                  alt="תוצאה אחרי טיפול פנים"
                  className="w-full h-full object-cover"
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
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img
                  src="/תמונות/טיפולי פנים/picture/3.jpeg"
                  alt="טיפול פנים"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <img
                  src="/תמונות/טיפולי פנים/picture/8.jpeg"
                  alt="תוצאה טיפול"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Rating badge */}
              <motion.div
                className="absolute top-8 -left-2 sm:-left-4 px-4 py-2 rounded-full bg-white shadow-lg border border-[#ddc1a7]/50 flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" className="w-3.5 h-3.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#5b4f47]">4.9</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="text-xs text-[#5b4f47]/60">גלי למטה</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-[#5b4f47]/30 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-3 rounded-full bg-[#5b4f47]/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
