import { motion } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';

interface ContactCtaSectionProps {
  onOpenContact?: () => void;
}

const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact-cta" className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f0dd] via-[#fffcf0] to-[#f9f0dd]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ddc1a7] to-transparent" />
      
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b4f47]/10 border border-[#ddc1a7]/50 text-sm font-medium text-[#5b4f47] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              זמינה לתורים
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5b4f47] leading-tight mb-6">
              מוכנה לשינוי?
              <span className="block text-[#a06c3b]">בואי נדבר</span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#5b4f47]/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              הצעד הראשון לעור זוהר מתחיל בשיחה קצרה. השאירי פרטים ואחזור אלייך תוך כמה שעות לתיאום ייעוץ או תור – 
              <span className="font-semibold text-[#5b4f47]"> בלי לחץ, רק הקשבה ומקצועיות.</span>
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[/* eslint-disable @typescript-eslint/no-unused-vars */
                { icon: '✓', text: 'ייעוץ ראשוני חינם' },
                { icon: '✓', text: 'תשובה תוך שעות' },
                { icon: '✓', text: 'ללא התחייבות' },
                { icon: '✓', text: 'תיאום גמיש' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[#5b4f47]/80">
                  <span className="w-5 h-5 rounded-full bg-[#ddc1a7]/40 flex items-center justify-center text-[#a06c3b] text-xs font-bold">
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
                href="https://wa.me/972533353203"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold bg-[#25d366] text-white shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:-translate-y-1"
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
              <div className="p-6 sm:p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-[#ddc1a7]/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#ddc1a7]/30">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#ddc1a7]">
                    <img
                      src="/תמונות/טיפולי פנים/picture/14.jpeg"
                      alt="דקלה מדואלה"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#5b4f47]">דקלה מדואלה</h3>
                    <p className="text-sm text-[#5b4f47]/70">קוסמטיקאית רפואית</p>
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-4">
                  <a href="mailto:dikla.spa@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-[#fffcf0]/80 border border-[#ddc1a7]/40 hover:bg-[#fffcf0] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#ddc1a7]/30 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a06c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#a06c3b]">דוא״ל</p>
                      <p className="text-sm font-bold text-[#2a2421]">dikla.spa@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:0533353203" className="flex items-center gap-4 p-4 rounded-xl bg-[#fffcf0]/80 border border-[#ddc1a7]/40 hover:bg-[#fffcf0] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#ddc1a7]/30 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a06c3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#a06c3b]">טלפון</p>
                      <p className="text-sm font-bold text-[#2a2421]">053-3353203</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Floating badge */}
              <motion.a
                href="https://www.google.com/search?kgmid=/g/11m6qsnxhr&hl=iw-IL&q=%D7%9E%D7%93%D7%95%D7%90%D7%9C%D7%94+%D7%A7%D7%9C%D7%99%D7%A0%D7%99%D7%A7+-+%D7%93%D7%A7%D7%9C%D7%94+%D7%A9%D7%9C%D7%99%D7%98&shndl=30&shem=lcuae,shrtsdl&source=sh/x/loc/osrp/m1/4&kgs=851252971ce84175&utm_source=lcuae,shrtsdl,sh/x/loc/osrp/m1/4"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group absolute -top-4 -left-4 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#ddc1a7]/60 shadow-sm hover:bg-white/90 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a06c3b]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf2]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-sm font-semibold text-[#5b4f47]">דירוג 5 מתוך 5</span>
                  <span className="text-[11px] text-[#5b4f47]/70">בגוגל עסקים</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" className="w-3.5 h-3.5">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#5b4f47]">5.0</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
