import { motion } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'שירן כהן',
    treatment: 'טיפול ניקוי עמוק',
    rating: 5,
    quote: 'כבר אחרי הטיפול הראשון הרגשתי שהעור נושם. האדמומיות נרגעה, המרקם התעדן והתחושה הייתה של ניקיון עמוק אבל עדין. דקלה מסבירה כל שלב ונותנת תחושה שיש על מי לסמוך. לא ידעתי שטיפול פנים יכול להיות כל כך מקצועי ונעים בו זמנית.',
    city: 'נס ציונה',
    image: '/תמונות/טיפולי פנים/picture/3.jpeg',
    avatar: '/תמונות/המלצות/images/client-1.jpg',
    highlight: 'עור נושם ורענן',
  },
  {
    id: 2,
    name: 'טליה לוי',
    treatment: 'טיפול לעור רגיש',
    rating: 5,
    quote: 'העור שלי היה אדמומי ומגורה מכל דבר. דקלה בנתה לי תהליך עדין, בלי לחץ ובלי כאב. המראה במראה עכשיו מרגיע במקום לתסכל. מרגישה שסוף סוף מישהי באמת רואה את העור שלי ויודעת איך לטפל בו. הטיפולים אצלה הפכו להיות הזמן הכי רגוע בשבוע.',
    city: 'רחובות',
    image: '/תמונות/טיפולי פנים/picture/5.jpeg',
    avatar: '/תמונות/המלצות/images/client-2.jpg',
    highlight: 'עור רגוע ומאוזן',
  },
  {
    id: 3,
    name: 'הילה אברהם',
    treatment: 'טיפול זוהר לאירוע',
    rating: 5,
    quote: 'הגעתי לפני צילומים של אירוע חשוב. יצאתי עם זוהר טבעי, האיפור ישב מושלם והרגשה שדואגים לי באמת. קיבלתי מחמאות בלי סוף! מאז, לפני כל אירוע גדול אני חוזרת רק לדקלה. היא פשוט יודעת להכין את העור בצורה מושלמת.',
    city: 'ראשון לציון',
    image: '/תמונות/טיפולי פנים/picture/8.jpeg',
    avatar: '/תמונות/המלצות/images/client-3.jpg',
    highlight: 'זוהר טבעי מושלם',
  },
  {
    id: 4,
    name: 'מיכל דוד',
    treatment: 'סדרת טיפולים',
    rating: 5,
    quote: 'אחרי שנים של ניסיונות עם קוסמטיקאיות שונות, סוף סוף מצאתי את דקלה. היא לא רק מטפלת מקצועית, אלא גם מלווה אותי בין הטיפולים עם המלצות מדויקות. העור שלי השתנה לחלוטין – יותר נקי, יותר מאוזן ויותר זוהר. ממליצה בחום!',
    city: 'תל אביב',
    image: '/תמונות/טיפולי פנים/picture/14.jpeg',
    avatar: '/תמונות/המלצות/images/client-1.jpg',
    highlight: 'שינוי מדהים בעור',
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf0] via-[#f9f0dd]/50 to-[#fffcf0]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#ddc1a7]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e5b78a]/10 rounded-full blur-3xl" />

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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
            מה אומרות הלקוחות
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5b4f47] leading-tight mb-6">
            המילים של הלקוחות
            <span className="block text-[#a06c3b]">מדברות בעד עצמן</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#5b4f47]/80 leading-relaxed">
            מאות נשים כבר חוו את השינוי בעור ובתחושה.
            <span className="font-medium text-[#5b4f47]"> קראי מה הן מספרות על החוויה בקליניקה.</span>
          </p>
        </motion.div>

        {/* Main testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Featured testimonial */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white shadow-xl border border-[#ddc1a7]/30">
              {/* Quote icon */}
              <div className="absolute -top-5 right-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl text-[#5b4f47] leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ddc1a7]">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#5b4f47]">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-[#a06c3b]">{testimonials[activeIndex].treatment}</p>
                  <p className="text-xs text-[#5b4f47]/60">{testimonials[activeIndex].city}</p>
                </div>
              </div>

              {/* Highlight badge */}
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#f9f0dd] to-[#ddc1a7]/30 border border-[#ddc1a7]/50 text-sm font-medium text-[#5b4f47]">
                ✨ {testimonials[activeIndex].highlight}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            key={`img-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={testimonials[activeIndex].image}
                alt="תוצאת טיפול"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5b4f47]/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Testimonial navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-[#5b4f47] text-white shadow-lg'
                  : 'bg-white text-[#5b4f47] border border-[#ddc1a7]/50 hover:border-[#5b4f47]/30'
              }`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-current/20">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className={`text-xs ${activeIndex === index ? 'text-white/70' : 'text-[#5b4f47]/60'}`}>
                  {testimonial.treatment}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          variants={SlidUpLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#ddc1a7]/30 shadow-xl">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">+500</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">לקוחות מרוצות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">4.9</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">דירוג ממוצע</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">98%</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">חוזרות לטיפול</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#5b4f47]">+10</div>
              <div className="text-sm text-[#5b4f47]/70 mt-1">שנות ניסיון</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
