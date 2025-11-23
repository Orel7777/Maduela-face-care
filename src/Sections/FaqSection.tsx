import { useState } from 'react';
import { motion } from 'framer-motion';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'כללי',
    question: 'איך נראה הטיפול הראשון בקליניקה?',
    answer:
      'נתחיל משיחה קצרה והיכרות עם העור וההרגלים שלך, נבצע אבחון מדויק בעזרת מצלמה מקצועית, ורק אחר כך נתאים לך פרוטוקול טיפול אישי עם המלצות להמשך בבית.',
  },
  {
    id: 'faq-2',
    category: 'תוצאות',
    question: 'אחרי כמה זמן רואים שינוי בעור?',
    answer:
      'בחלק מהמקרים מרגישים רכות וזוהר כבר מהטיפול הראשון. בשיפור עומק של קמטים, פיגמנטציה או אקנה – בדרך כלל נדרש תהליך של כמה טיפולים, יחד עם התמדה בשגרת בית מותאמת.',
  },
  {
    id: 'faq-3',
    category: 'התאמה',
    question: 'האם הטיפול מתאים גם לעור רגיש או עם בעיות?',
    answer:
      'כן. אני מתמחה בעורות רגישים, סבוריאה, אקנה ופיגמנטציה. הכל נעשה בעדינות, תוך התאמה אישית של חומרים ועוצמות בהתאם למה שהעור שלך צריך – ולא להפך.',
  },
];

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full pt-16 pb-20 sm:pt-20 sm:pb-24 px-4 sm:px-10 lg:px-20 bg-[#fffcf0]">
      <div className="max-w-6xl mx-auto" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid md:grid-cols-12 gap-8 items-start mb-10 sm:mb-12"
        >
          <div className="md:col-span-7 space-y-3 text-right">
            <p className="text-xs tracking-[0.25em] uppercase text-[#b59b86]">שאלות נפוצות</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#5b4f47]">
              תשובות לשאלות הכי נפוצות על טיפולי הפנים
            </h2>
            <p className="text-sm sm:text-base text-[#5b4f47]/80 max-w-2xl ml-auto">
              אספתי עבורך את כל מה שחשוב לדעת לפני הטיפול הראשון – מה קורה בפגישה, כמה זמן לוקח לראות תוצאות
              והאם הטיפול מתאים לעור שלך.
            </p>
          </div>

          <div className="md:col-span-5 hidden md:flex justify-end">
            <div className="relative overflow-hidden rounded-3xl border border-[#ddc1a7]/70 bg-[#f9f0dd]/60 shadow-[0_18px_45px_rgba(91,79,71,0.25)] w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#ddc1a7]/40 mix-blend-screen" />
              <div className="relative aspect-[16/10]">
                <video
                  src="/תמונות/טיפולי פנים/video/5.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />
              <div className="absolute bottom-4 right-4 left-4 bg-[#5b4f47]/90 text-[#fffcf0] rounded-2xl px-4 py-3 text-sm flex items-center justify-between gap-3">
                <span className="font-medium">יש עוד שאלה?</span>
                <span className="text-xs text-[#fffcf0]/90">מוזמנת לכתוב לי בוואטסאפ או בטופס למטה</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="grid md:grid-cols-12 gap-6 items-stretch"
        >
          <div className="md:col-span-7">
            <div className="divide-y divide-[#ddc1a7]/50 rounded-2xl bg-[#fffcf0]/80 border border-[#ddc1a7]/70 shadow-[0_14px_40px_rgba(91,79,71,0.16)]">
              {faqItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="px-4 sm:px-6 py-4 sm:py-5">
                    <div className="text-[11px] uppercase font-medium text-[#b59b86] tracking-[0.18em] mb-1">
                      {item.category}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      className="group mt-1 flex items-center justify-between w-full text-right gap-4"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#5b4f47]">
                        {item.question}
                      </h3>
                      <span className="inline-flex items-center justify-center rounded-full border border-[#ddc1a7]/70 bg-[#f9f0dd]/80 p-1.5 sm:p-2 transition-all duration-300 group-hover:bg-[#ddc1a7]/40 text-[#5b4f47]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`w-[18px] h-[18px] transition-transform duration-300 ${
                            isOpen ? 'rotate-90' : ''
                          }`}
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 overflow-hidden ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="min-h-0">
                        <div className="rounded-xl bg-[#f9f0dd]/80 border border-[#ddc1a7]/60 px-4 py-3 text-sm sm:text-base text-[#5b4f47]/90 leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5 md:hidden">
            <div className="mt-4 rounded-2xl bg-[#5b4f47] text-[#fffcf0] px-4 py-4 text-sm flex flex-col gap-1 text-right">
              <span className="font-medium">לא מצאת את התשובה שחיפשת?</span>
              <span className="text-[#fffcf0]/90">
                תמיד אפשר לכתוב לי הודעה קצרה בוואטסאפ או להשאיר פרטים בטופס, ואחזור אלייך עם הסבר מסודר.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
