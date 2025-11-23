import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidUp, SlidUpLeft } from '../components/Motion';

interface VideoItem {
  id: number;
  src: string;
  title: string;
  description: string;
  duration: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    src: '/תמונות/טיפולי פנים/video/5.mp4',
    title: 'ניקוי עמוק ועדין לעור רגיש',
    description: 'הצצה קצרה לאיך נראה טיפול ניקוי עמוק ועדין בקליניקה.',
    duration: '00:45',
  },
  {
    id: 2,
    src: '/תמונות/טיפולי פנים/video/1.mp4',
    title: 'רגעים של רוגע בחדר הטיפולים',
    description: 'אווירה שקטה, מוזיקה נעימה וטיפול מותאם אישית.',
    duration: '00:32',
  },
  {
    id: 3,
    src: '/תמונות/טיפולי פנים/video/2.mp4',
    title: 'לפני ואחרי – זוהר טבעי',
    description: 'תוצאה עדינה וטבעית אחרי טיפול זוהר לפני אירוע.',
    duration: '00:27',
  },
  {
    id: 4,
    src: '/תמונות/טיפולי פנים/video/3.mp4',
    title: 'טיפול הרגעה לעור מגורה',
    description: 'תהליכים עדינים להרגעת אדמומיות ותחושת שריפה.',
    duration: '00:36',
  },
  {
    id: 5,
    src: '/תמונות/טיפולי פנים/video/4.mp4',
    title: 'מבט מקרוב על תהליך הטיפול',
    description: 'איך נראים השלבים השונים של הטיפול בפנים.',
    duration: '00:41',
  },
];

const shuffleVideos = (items: VideoItem[]): VideoItem[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};

const VideoGallerySection: React.FC = () => {
  const shuffled = useMemo(() => shuffleVideos(videos), []);
  const featured = shuffled[0];
  const sideVideos = shuffled.slice(1, 3);

  return (
    <section
      id="video-gallery"
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#fffcf0]"
    >
      <div className="max-w-6xl mx-auto" dir="rtl">
        <motion.div
          variants={SlidUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-start gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ddc1a7]/70 bg-[#f9f0dd]/70 px-3 py-1.5 text-xs text-[#5b4f47]/80">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#695125] text-[#fffcf0] text-[11px] font-semibold">
              וידאו
            </span>
            <span>הצצה אמיתית למה שקורה בקליניקה</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#5b4f47]">
            גלריית וידאו – רגעים מהטיפולים
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#5b4f47]/80">
            כמה שניות של וידאו מספרות הרבה יותר ממילים. בחרי סרטון, התרשמי מהאווירה, מהעדינות ומהתהליך, ותדעי
            למה לצפות כשתגיעי.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* וידאו מרכזי */}
          {featured && (
            <motion.div
              variants={SlidUp(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="col-span-1 lg:col-span-2 rounded-3xl bg-[#f9f0dd] border border-[#ddc1a7]/80 shadow-[0_18px_45px_rgba(91,79,71,0.22)] overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-video bg-black/5 overflow-hidden">
                <video
                  src={featured.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-4 flex items-center gap-2 text-xs text-[#fffcf0]/90">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/35 border border-white/30 px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    וידאו אמיתי מהקליניקה
                  </span>
                </div>
              </div>
              <div className="px-4 sm:px-5 py-4 sm:py-5 text-right">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#5b4f47]">
                  {featured.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5b4f47]/80 max-w-xl">
                  {featured.description}
                </p>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-[#5b4f47]/70">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 border border-[#ddc1a7]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#695125]" />
                    אורך הסרטון {featured.duration}
                  </span>
                  <span>תוכלי לצפות שוב ושוב בקצב שלך</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* וידאו צדדי – שני סרטונים נוספים */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {sideVideos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={SlidUpLeft(0.2 + index * 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-2xl bg-[#fffcf0] border border-[#ddc1a7]/80 shadow-[0_12px_32px_rgba(91,79,71,0.18)] overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-video bg-black/5 overflow-hidden">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/55 via-transparent to-transparent" />
                  <div className="absolute bottom-2 right-3 inline-flex items-center gap-1 rounded-full bg-black/40 border border-white/30 px-2.5 py-1 text-[11px] text-[#fffcf0]/90">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {video.duration}
                  </div>
                </div>
                <div className="px-4 py-3 text-right">
                  <h4 className="text-sm sm:text-base font-semibold tracking-tight text-[#5b4f47]">
                    {video.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#5b4f47]/80 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
