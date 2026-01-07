import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';

interface VideoItem {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  duration: string;
}
// 
const videos: VideoItem[] = [
  {
    id: 1,
    src: '/תמונות/דקלה/סרטונים/20251104_114135000_iOS (video-converter.com).mp4',
    title: 'וידאו מהקליניקה',
    description: 'רגעים אמיתיים מהקליניקה.',
    category: 'קליניקה',
    duration: '',
  },
  {
    id: 2,
    src: '/תמונות/דקלה/סרטונים/20251104_104431000_iOS_0 (video-converter.com).mp4',
    title: 'וידאו מהקליניקה',
    description: 'רגעים אמיתיים מהקליניקה.',
    category: 'קליניקה',
    duration: '',
  },
  {
    id: 3,
    src: '/תמונות/דקלה/סרטונים/20251104_104412000_iOS (video-converter.com).mp4',
    title: 'וידאו מהקליניקה',
    description: 'רגעים אמיתיים מהקליניקה.',
    category: 'קליניקה',
    duration: '',
  },
];

const VideoGallerySection: React.FC = () => {
  const [openedVideo, setOpenedVideo] = useState<number | null>(null);

  return (
    <section id="video-gallery" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fffcf0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20" dir="rtl">
        {/* Section header */}
        <motion.div
          variants={SlidUpRight(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86] mb-2">גלריית וידאו</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#5b4f47] mb-3">
            גלריית וידאו – רגעים מהטיפולים
          </h2>
          <p className="text-sm sm:text-base text-[#5b4f47]/80 max-w-2xl mx-auto">
            כמה שניות של וידאו מספרות הרבה יותר ממילים. בחרי סרטון, התרשמי מהאווירה, מהעדינות ומהתהליך,
            ותדעי בדיוק למה לצפות.
          </p>
        </motion.div>

        {/* Video Grid - 3 videos only */}
        <motion.div
          variants={SlidUpLeft(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {videos.map((video, index) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setOpenedVideo(index)}
              className="w-full text-right group"
            >
              <div className="rounded-3xl bg-[#fffcf0] border border-[#ddc1a7]/70 shadow-[0_10px_26px_rgba(91,79,71,0.12)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-video bg-black">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    onContextMenu={(e) => e.preventDefault()}
                    tabIndex={-1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {video.duration && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 text-white text-[11px] px-2.5 py-1">
                      <span>{video.duration}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  )}
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-semibold text-[#5b4f47] mb-1">
                    {video.title}
                  </p>
                  <p className="text-xs text-[#5b4f47]/70 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-[#f9f0dd] border border-[#ddc1a7]/60">
            <p className="text-[#5b4f47] text-sm sm:text-base">
              <span className="font-semibold">רוצה לראות עוד?</span> יש לנו עוד המון תוכן באינסטגרם
            </p>
            <a
              href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#5b4f47] font-semibold text-sm hover:bg-[#ddc1a7] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              עקבי באינסטגרם
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal/Lightbox */}
      <AnimatePresence>
        {openedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setOpenedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={videos[openedVideo].src}
                src={videos[openedVideo].src}
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <button
                onClick={() => setOpenedVideo(null)}
                className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-[#5b4f47] flex items-center justify-center transition-colors shadow-lg z-10"
                aria-label="סגור"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-semibold text-center text-sm sm:text-base">{videos[openedVideo].title}</p>
                <p className="text-white/80 text-center text-xs sm:text-sm mt-1">{videos[openedVideo].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallerySection;
