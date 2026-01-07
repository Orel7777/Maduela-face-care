import { motion } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

const services = [
  {
    id: 1,
    title: 'טיפול ניקוי עמוק',
    subtitle: 'הבסיס לעור בריא',
    description: 'טיפול יסודי ומקיף שמנקה את העור לעומק, מאזן את הפרשת השומן, מטפל בראשים שחורים ומחזיר לעור את הנשימה והרעננות. מושלם לעור שמן, מעורב או עור עם נטייה לפצעונים.',
    benefits: ['ניקוי נקבוביות יסודי', 'איזון הפרשת שומן', 'מראה נקי ורענן'],
    image: '/תמונות/דקלה/picture/13.jpeg',
    duration: '75 דקות',
    price: '350',
    popular: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" x2="9.01" y1="9" y2="9"/>
        <line x1="15" x2="15.01" y1="9" y2="9"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'טיפול זוהר לאירוע',
    subtitle: 'להיראות מושלמת ביום הגדול',
    description: 'טיפול פרימיום שמכין את העור לאירוע חשוב – חתונה, צילומים, מפגש מיוחד. משלב הזנה עמוקה, הבהרה עדינה ומתיחה קלה לעור זוהר, רענן ומוכן לכל תקריב.',
    benefits: ['זוהר מיידי', 'עור מוכן לאיפור', 'תוצאה שנשארת'],
    image: '/תמונות/דקלה/picture/14.jpeg',
    duration: '60 דקות',
    price: '400',
    popular: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.813 1.912a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.813-1.912a2 2 0 001.272-1.272L12 3z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'טיפול הרגעה לעור רגיש',
    subtitle: 'מענה לעור שדורש עדינות',
    description: 'טיפול מותאם במיוחד לעור רגיש, מגורה או עם נטייה לאדמומיות. משלב מוצרים מרגיעים, טכניקות עדינות וחומרים טבעיים שמחזקים את מחסום העור ומשאירים תחושת נוחות ורוגע.',
    benefits: ['הרגעת אדמומיות', 'חיזוק מחסום העור', 'תחושת נוחות מתמשכת'],
    image: '/תמונות/דקלה/picture/8.jpeg',
    duration: '70 דקות',
    price: '380',
    popular: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf0] via-[#f9f0dd] to-[#fffcf0]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddc1a7] to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#ddc1a7]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#e5b78a]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20" dir="rtl">
        {/* Section header */}
        <motion.div
          variants={SlidUpRight(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b4f47]/10 border border-[#ddc1a7]/50 text-sm font-medium text-[#5b4f47] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l1.912 5.813a2 2 0 001.272 1.272L21 12l-5.813 1.912a2 2 0 00-1.272 1.272L12 21l-1.912-5.813a2 2 0 00-1.272-1.272L3 12l5.813-1.912a2 2 0 001.272-1.272L12 3z"/>
            </svg>
            טיפולי פנים מקצועיים
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5b4f47] leading-tight mb-6">
            הטיפול המושלם
            <span className="block text-[#a06c3b]">לכל סוג עור</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#5b4f47]/80 leading-relaxed">
            כל טיפול נבנה במיוחד עבורך – לפי מצב העור, הצרכים האישיים והמטרות שלך.
            <span className="font-medium text-[#5b4f47]"> בואי נמצא יחד את הטיפול שיעשה לך את השינוי.</span>
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={SlidUpLeft(0.1 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative overflow-hidden rounded-3xl border border-[#5b4f47]/10 bg-white/55 backdrop-blur-sm hover:border-[#a06c3b]/35 transition flex flex-col h-full ${
                service.popular ? 'ring-1 ring-[#a06c3b]/35' : ''
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#a06c3b] to-[#695125] text-white text-xs font-semibold shadow-lg">
                  ⭐ הכי מבוקש
                </div>
              )}

              {/* Image */}
              <div className="aspect-[16/9]">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
              </div>

              {/* Content */}
              <div className="p-5 text-right flex flex-col flex-1">
                <h4 className="text-lg md:text-xl font-semibold tracking-tight text-[#5b4f47]">{service.title}</h4>
                <p className="mt-1 text-sm text-[#a06c3b] font-medium">{service.subtitle}</p>
                <p className="mt-2 text-sm text-[#5b4f47]/75 leading-relaxed">{service.description}</p>
                <div className="mt-auto">
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#5b4f47]">{service.price}</span>
                    <span className="text-xs text-[#5b4f47]/70">{service.duration}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenContact && onOpenContact()}
                    className="mt-4 inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#5b4f47]/90 text-[#fffcf0] font-semibold text-sm hover:bg-[#5b4f47] transition"
                  >
                    <span>לקביעת תור</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={SlidUpRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#ddc1a7]/50 shadow-xl">
            <div className="text-right sm:text-right">
              <h3 className="text-lg sm:text-xl font-bold text-[#5b4f47] mb-1">לא בטוחה מה מתאים לך?</h3>
              <p className="text-sm text-[#5b4f47]/70">נשמח לעזור לך לבחור את הטיפול המושלם – ללא התחייבות</p>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ddc1a7]/30 hover:bg-[#ddc1a7]/50 border border-[#ddc1a7] text-[#5b4f47] font-semibold transition-colors"
            >
              <span>ייעוץ חינם</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
