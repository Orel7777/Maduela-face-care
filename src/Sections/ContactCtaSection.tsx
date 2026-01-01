import { motion } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';

interface ContactCtaSectionProps {
  onOpenContact?: () => void;
}

const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact-cta" className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b4f47] via-[#4a3f39] to-[#695125]" />
      <div className="absolute inset-0 bg-[url('/תמונות/טיפולי פנים/picture/13.jpeg')] bg-cover bg-center opacity-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fffcf0] to-transparent" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#ddc1a7]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#a06c3b]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={SlidUpRight(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-right"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              זמינה לתורים
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              מוכנה לשינוי?
              <span className="block text-[#ddc1a7]">בואי נדבר</span>
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              הצעד הראשון לעור זוהר מתחיל בשיחה קצרה. השאירי פרטים ואחזור אלייך תוך כמה שעות לתיאום ייעוץ או תור – 
              <span className="font-semibold text-white"> בלי לחץ, רק הקשבה ומקצועיות.</span>
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[/* eslint-disable @typescript-eslint/no-unused-vars */
                { icon: '✓', text: 'ייעוץ ראשוני חינם' },
                { icon: '✓', text: 'תשובה תוך שעות' },
                { icon: '✓', text: 'ללא התחייבות' },
                { icon: '✓', text: 'תיאום גמיש' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <span className="w-5 h-5 rounded-full bg-[#ddc1a7]/30 flex items-center justify-center text-[#ddc1a7] text-xs font-bold">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact()}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold bg-white text-[#5b4f47] shadow-xl hover:bg-[#ddc1a7] transition-all duration-300 hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                השארת פרטים
              </button>
              
              <a
                href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold bg-[#25D366] text-white shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                שיחה בוואטסאפ
              </a>
            </div>
          </motion.div>

          {/* Image/Card side */}
          <motion.div
            variants={SlidUpLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/20">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#ddc1a7]">
                    <img
                      src="/תמונות/טיפולי פנים/picture/14.jpeg"
                      alt="דקלה מדואלה"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">דקלה מדואלה</h3>
                    <p className="text-sm text-white/70">קוסמטיקאית רפואית</p>
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">מיקום</p>
                      <p className="text-sm font-medium text-white">נס ציונה</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">שעות פעילות</p>
                      <p className="text-sm font-medium text-white">א׳-ה׳ | 9:00-19:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">זמינות</p>
                      <p className="text-sm font-medium text-white">תגובה תוך כמה שעות</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -left-4 px-4 py-2 rounded-full bg-[#ddc1a7] text-[#5b4f47] font-semibold text-sm shadow-lg"
              >
                ⭐ דירוג 4.9
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
