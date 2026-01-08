import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'כמה זמן לוקח טיפול פנים?',
    answer: 'טיפול פנים קלאסי נמשך כ-60 דקות, בעוד טיפול פנים עמוק יכול להימשך 75-90 דקות. טיפולי אקספרס הם בין 30-45 דקות.',
  },
  {
    id: 'faq-2',
    question: 'האם הטיפולים כואבים?',
    answer: 'רוב הטיפולים שלנו לא כואבים כלל ואף מרגיעים ומפנקים. טיפולי פלזמה עשויים לגרום לתחושה קלה של עקצוץ, אך אנחנו עושים הכל כדי שתרגישי בנוח.',
  },
  {
    id: 'faq-3',
    question: 'באיזו תדירות מומלץ לבצע טיפולי פנים?',
    answer: 'מומלץ לבצע טיפול פנים אחת לחודש-חודשיים לשמירה על עור בריא. לבעיות ספציפיות, נקבע תוכנית טיפולים אישית.',
  },
  {
    id: 'faq-4',
    question: 'האם צריך הכנה מיוחדת לטיפול?',
    answer: 'לא נדרשת הכנה מיוחדת. רצוי להגיע עם פנים נקיות ללא איפור. נשמח לענות על שאלות נוספות בעת התיאום.',
  },
  {
    id: 'faq-5',
    question: 'האם ניתן לקבל טיפול בהריון?',
    answer: 'חלק מהטיפולים מתאימים להריון, אך חשוב לעדכן אותנו מראש. נתאים את הטיפול בהתאם למצבך ולשליש ההריון.',
  },
];

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  return (
    <section id="faq" className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f0dd] to-[#fffcf0]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddc1a7] to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-80 h-80 bg-[#ddc1a7]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-[#e5b78a]/10 rounded-full blur-3xl" />

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
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <path d="M12 17h.01"/>
            </svg>
            שאלות נפוצות
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5b4f47] leading-tight mb-6">
            שאלות נפוצות
          </h2>
          
          <p className="text-base sm:text-lg text-[#5b4f47]/80 leading-relaxed">
            מצאתם כאן תשובות לשאלות הנפוצות ביותר שלנו.
            <span className="font-medium text-[#5b4f47]"> לא מצאתם תשובה? צרו קשר ונשמח לעזור.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* FAQ accordion */}
          <motion.div
            variants={SlidUpLeft(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen 
                        ? 'bg-white border-[#ddc1a7] shadow-lg' 
                        : 'bg-white/70 border-[#ddc1a7]/40 hover:border-[#ddc1a7]/70'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right"
                    >
                      <h3 className={`text-base sm:text-lg font-semibold transition-colors ${
                        isOpen ? 'text-[#5b4f47]' : 'text-[#5b4f47]/90'
                      }`}>
                        {item.question}
                      </h3>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? 'bg-[#5b4f47] text-white rotate-180' 
                          : 'bg-[#f9f0dd] text-[#5b4f47]'
                      }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                            <div className="p-4 rounded-xl bg-[#f9f0dd]/60 border border-[#ddc1a7]/30">
                              <p className="text-sm sm:text-base text-[#5b4f47]/85 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Side content */}
          <motion.div
            variants={SlidUpRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 space-y-6">
              {/* Contact card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#5b4f47] to-[#695125] text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">עוד שאלות?</h3>
                <p className="text-white/80 text-sm mb-6">
                  אם לא מצאת את התשובה שחיפשת, אני כאן בשבילך. מוזמנת לפנות אליי ישירות ואשמח לעזור.
                </p>
                <a
                  href="https://wa.me/972533353203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#a06c3b] font-semibold text-sm hover:font-bold hover:bg-[#ddc1a7] transition-all w-full justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  שלחי הודעה בוואטסאפ
                </a>
              </div>

              {/* Quick info */}
              <div className="p-5 rounded-2xl bg-white border border-[#ddc1a7]/40 shadow-lg">
                <h4 className="font-semibold text-[#5b4f47] mb-4">פרטים מהירים</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f9f0dd] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b4f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <span className="text-[#5b4f47]/80">60-90 דקות לטיפול</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f9f0dd] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b4f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <span className="text-[#5b4f47]/80">נס ציונה</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f9f0dd] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b4f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                        <line x1="16" x2="16" y1="2" y2="6"/>
                        <line x1="8" x2="8" y1="2" y2="6"/>
                        <line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                    </div>
                    <span className="text-[#5b4f47]/80">ימים א׳-ה׳</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
