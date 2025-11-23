import { motion } from 'framer-motion';
import { SlidUp } from '../components/Motion';

const testimonialCards = [
  {
    id: 1,
    name: 'שירן',
    title: 'טיפול ניקוי עמוק וזוהר',
    subtitle: 'באה עם עור עייף ומגורה – יצאה עם עור רגוע ובהיר',
    quote:
      'כבר אחרי הטיפול הראשון הרגשתי שהעור נושם. האדמומיות נרגעה, המרקם התעדן והתחושה הייתה של ניקיון עמוק אבל עדין. סוף סוף מישהי שמסבירה כל שלב ונותנת תחושה שיש על מי לסמוך.',
    city: 'נס ציונה',
    bgImage: '/תמונות/המלצות/images/parallax-bg-1.jpg',
    avatarMain: '/תמונות/המלצות/images/client-1.jpg',
  },
  {
    id: 2,
    name: 'טליה',
    title: 'טיפול הרגעה לעור רגיש',
    subtitle: 'מטיפול פחדתי – היום זה הזמן הכי רגוע בשבוע שלי',
    quote:
      'העור שלי היה אדמומי ומגורה מכל דבר. דקלה בנתה לי תהליך עדין, בלי לחץ ובלי כאב, ופתאום המראה במראה מרגיע במקום לתסכל. מרגישה שסוף סוף מישהו באמת רואה את העור שלי.',
    city: 'רחובות',
    bgImage: '/תמונות/המלצות/images/parallax-bg-2.jpg',
    avatarMain: '/תמונות/המלצות/images/client-2.jpg',
  },
  {
    id: 3,
    name: 'הילה',
    title: 'טיפול זוהר לפני אירוע',
    subtitle: 'הגעתי לפני צילומים – וקיבלתי מחמאות בלי סוף',
    quote:
      'רציתי שהעור יראה טוב בערב חשוב. יצאתי עם זוהר טבעי, איפור שישב מושלם והרגשה שדואגים לי באמת. מאז, לפני כל אירוע גדול אני חוזרת רק לכאן.',
    city: 'ראשון לציון',
    bgImage: '/תמונות/המלצות/images/parallax-bg-3.jpg',
    avatarMain: '/תמונות/המלצות/images/client-3.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#fffcf0]"
    >
      <div className="max-w-6xl mx-auto" dir="rtl">
        <motion.div
          variants={SlidUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#b59b86] mb-2">
            המלצות מלקוחות
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#5b4f47]">
            מה לקוחות מספרות אחרי טיפול פנים
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5b4f47]/80">
            מילים אמיתיות מנשים שהגיעו עייפות מהעור – ויצאו קלילות, זוהרות ורגועות יותר. זו ההוכחה הכי טובה
            למה שמתרחש בחדר הטיפולים.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          {/* במובייל: גלילה אופקית, בדסקטופ: שלושה טורים */}
          <div className="w-full overflow-x-auto pb-4 sm:pb-6">
            <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-5 min-w-[240px] sm:min-w-0 justify-center px-2">
              {testimonialCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  variants={SlidUp(0.15 * index)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative w-[240px] sm:w-full sm:max-w-[280px] shrink-0 group"
                  style={{ perspective: 1000 }}
                >
                  {/* מסגרת אייפון */}
                  <div className="relative bg-[#2c2c2e] rounded-[36px] p-2 shadow-[0_15px_45px_rgba(0,0,0,0.3)] transition-shadow duration-300 group-hover:shadow-[0_20px_55px_rgba(0,0,0,0.4)]">
                    {/* notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#2c2c2e] rounded-b-2xl z-20" />
                    
                    {/* מסך הטלפון */}
                    <div className="relative bg-[#fffcf0] rounded-[30px] overflow-hidden shadow-inner" style={{ aspectRatio: '9/19.5' }}>
                  {/* רקע מטושטש עדין */}
                  <div className="absolute inset-0 opacity-60">
                    <img
                      src={card.bgImage}
                      alt={`תוצאה אחרי טיפול פנים - ${card.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf0]/40 via-[#fffcf0]/85 to-[#fffcf0]" />
                  </div>

                      {/* תוכן "מסך" הטלפון */}
                      <div className="relative z-10 px-3 pt-7 pb-3 h-full flex flex-col">
                        {/* "סטטוס בר" קטן */}
                        <div className="flex items-center justify-between text-[8px] text-[#5b4f47]/70 mb-3">
                          <span>21:30</span>
                          <div className="flex items-center gap-1 text-[#5b4f47]/60">
                            <span className="w-1 h-1 rounded-full bg-[#5b4f47]/60" />
                            <span className="w-2 h-0.5 rounded bg-[#5b4f47]/40" />
                            <span className="w-3 h-0.5 rounded bg-[#5b4f47]/40" />
                          </div>
                        </div>

                        {/* ראש הכרטיס */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 flex-row-reverse">
                            <div className="h-7 w-7 rounded-full overflow-hidden border border-[#ddc1a7]/80 shadow-sm">
                              <img
                                src={card.avatarMain}
                                alt={card.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] font-semibold text-[#5b4f47] leading-tight">
                                {card.name} • {card.title}
                              </p>
                              <p className="text-[8px] text-[#5b4f47]/70 leading-tight">{card.subtitle}</p>
                            </div>
                          </div>

                          <div className="flex flex-col items-end text-[8px] text-[#5b4f47]">
                            <div className="flex items-center gap-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-3 h-3 text-[#d8a85e]"
                              >
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.459a1 1 0 0 0-.364 1.118l1.293 3.985c.3.922-.755 1.688-1.54 1.118l-3.39-2.455a1 1 0 0 0-1.175 0L7.44 18.99c-.784.57-1.838-.196-1.54-1.118l1.293-3.985a1 1 0 0 0-.364-1.118L3.446 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 0 0 .95-.69z" />
                              </svg>
                              <span className="font-semibold text-[9px]">4.9</span>
                            </div>
                            <span className="text-[7px] text-[#5b4f47]/70">עשרות טיפולים</span>
                          </div>
                        </div>

                        {/* ציטוט */}
                        <div className="flex-1 mb-2">
                          <div className="rounded-xl bg-white/90 border border-[#ddc1a7]/70 px-2.5 py-2 text-right shadow-sm h-full flex flex-col">
                            <p className="text-[9px] leading-relaxed text-[#5b4f47]/90 flex-1">
                              "{card.quote}"
                            </p>
                            <p className="mt-1.5 text-[8px] font-medium text-[#5b4f47]">
                              {card.name}, {card.city}
                            </p>
                          </div>
                        </div>

                        {/* social proof קטן בתחתית */}
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5 flex-row-reverse">
                            <div className="flex -space-x-1.5 rtl:space-x-reverse">
                              <img
                                src="/תמונות/המלצות/images/client-2.jpg"
                                alt="לקוחה מרוצה"
                                className="w-5 h-5 rounded-full border border-white object-cover"
                              />
                              <img
                                src="/תמונות/המלצות/images/client-3.jpg"
                                alt="לקוחה מרוצה"
                                className="w-5 h-5 rounded-full border border-white object-cover"
                              />
                              <div className="w-5 h-5 rounded-full border border-white bg-[#5b4f47] text-[#fffcf0] flex items-center justify-center text-[7px] font-medium">
                                +עוד
                              </div>
                            </div>
                            <div className="text-[8px] text-[#5b4f47]/80 text-right">
                              <p className="font-medium leading-tight">מאות לקוחות</p>
                              <p className="text-[7px] text-[#5b4f47]/70 leading-tight">חוזרות</p>
                            </div>
                          </div>

                          <div className="text-[7px] text-[#5b4f47]/70 text-left max-w-[80px]">
                            <p className="leading-tight">
                              הצטרפי לטיפול –
                              <span className="font-medium text-[#5b4f47]"> בעור רגוע</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
