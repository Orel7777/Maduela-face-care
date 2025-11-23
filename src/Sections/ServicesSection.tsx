import { motion } from 'framer-motion';
import { SlidUp, SlidUpLeft, SlidUpRight } from '../components/Motion';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

const services = [
  {
    id: 1,
    title: 'טיפול פנים ניקוי עמוק',
    description:
      'טיפול יסודי המסייע בניקוי נקבוביות, איזון העור והחזרת תחושת הרעננות והקלילות.',
    image: '/תמונות/טיפולי פנים/picture/3.jpeg',
    duration: '75 דקות',
  },
  {
    id: 2,
    title: 'טיפול זוהר לאירוע',
    description:
      'טיפול מפנק לפני אירועים חשובים, המעניק לעור מראה זוהר, חי ובריא לצילומים.',
    image: '/תמונות/טיפולי פנים/picture/5.jpeg',
    duration: '60 דקות',
  },
  {
    id: 3,
    title: 'טיפול הרגעה לעור רגיש',
    description:
      'טיפול עדין ומדויק לעור רגיש או מגורה, להרגעת אדמומיות והחזרת תחושת הנינוחות.',
    image: '/תמונות/טיפולי פנים/picture/8.jpeg',
    duration: '70 דקות',
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="services"
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#fffcf0]"
    >
      <div className="max-w-6xl mx-auto" dir="rtl">
        {/* כותרת מרכזית של הסקשן */}
        <motion.div
          variants={SlidUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#b59b86] mb-2">
            טיפולי פנים מותאמים
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#5b4f47]">
            בחרי את הטיפול שהעור שלך צריך עכשיו
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5b4f47]/80">
            טיפולי ניקוי עמוק, זוהר לאירוע והרגעה לעור רגיש – כולם נבנים אישית לפי מצב העור, הקצב שלך
            ומה שיגרום לך להרגיש הכי טוב במראה ובתחושה.
          </p>
        </motion.div>

        {/* מסגרת כהה עם כותרת פנימית וכרטיסי שירותים */}
        <motion.div
          variants={SlidUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[32px] border border-[#ddc1a7]/80 bg-[#f9f0dd] shadow-[0_0_0_1px_rgba(91,79,71,0.08),0_18px_45px_rgba(91,79,71,0.28)] px-5 py-6 sm:px-7 sm:py-7"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
          </div>

          <div className="relative flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mb-6">
            <div className="text-right sm:text-right">
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#5b4f47]">
                טיפולי הדגל בקליניקה
              </h3>
              <p className="text-xs sm:text-sm text-[#5b4f47]/80 mt-1">
                שלושה טיפולים מרכזיים שיכולים להיות נקודת ההתחלה המושלמת עבורך.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5b4f47] bg-[#fffcf0] hover:bg-white rounded-full px-4 py-2 border border-[#ddc1a7]/80 transition-colors"
            >
              <span>לא בטוחה מה לבחור? השאירי פרטים</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </button>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                variants={(index % 2 === 0 ? SlidUpRight : SlidUpLeft)(0.15 + index * 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="group overflow-hidden rounded-2xl bg-[#fffcf0] border border-[#ddc1a7]/80 shadow-[0_10px_30px_rgba(91,79,71,0.16)] flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/65 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-2 text-[11px] font-medium text-[#fffcf0]">
                    <span className="px-2.5 py-1 rounded-full bg-[#00000040] backdrop-blur-sm border border-white/40">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <div className="relative p-4 flex-1 flex flex-col text-right">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#5b4f47]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5b4f47]/80 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium tracking-tight text-[#5b4f47]/80 bg-[#ddc1a7]/20 rounded-full px-3 py-1 border border-[#ddc1a7]/70"
                    >
                      <span>למי מתאים?</span>
                    </button>
                    <a
                      href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium tracking-tight text-white bg-[#695125] hover:bg-[#5b4f47] rounded-full px-3 py-1.5 border border-[#5b4f47]/80 transition-colors"
                    >
                      <span className='text-white'>לתיאום ייעוץ קצר</span>
                      <span className="text-sm leading-none">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
