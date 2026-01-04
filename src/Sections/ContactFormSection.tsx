import { AnimatePresence, motion } from 'framer-motion';

interface ContactFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl" dir="rtl">
              {/* Header with gradient */}
              <div className="relative bg-gradient-to-br from-[#5b4f47] to-[#695125] px-6 sm:px-8 pt-8 pb-16">
                <div className="absolute inset-0 bg-[url('/תמונות/טיפולי פנים/picture/13.jpeg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b4f47]/90 to-[#695125]/90" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">השאירי פרטים</h2>
                      <p className="text-white/80 text-sm">ואחזור אלייך בהקדם</p>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm">
                    מלאי את הפרטים ואחזור אלייך תוך כמה שעות לתיאום ייעוץ או קביעת תור.
                  </p>
                </div>

                {/* Close button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="relative px-6 sm:px-8 pb-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-xl border border-[#ddc1a7]/30 p-6">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    {/* Name field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[#5b4f47] mb-2">
                        שם מלא <span className="text-[#a06c3b]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="השם שלך"
                        className="w-full px-4 py-3 rounded-xl border border-[#ddc1a7]/50 bg-[#f9f0dd]/30 text-[#5b4f47] placeholder:text-[#5b4f47]/40 focus:outline-none focus:ring-2 focus:ring-[#a06c3b] focus:border-transparent transition-all text-right"
                      />
                    </div>

                    {/* Phone field */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-[#5b4f47] mb-2">
                        טלפון <span className="text-[#a06c3b]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="050-0000000"
                        className="w-full px-4 py-3 rounded-xl border border-[#ddc1a7]/50 bg-[#f9f0dd]/30 text-[#5b4f47] placeholder:text-[#5b4f47]/40 focus:outline-none focus:ring-2 focus:ring-[#a06c3b] focus:border-transparent transition-all text-right"
                      />
                    </div>

                    {/* Message field */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-[#5b4f47] mb-2">
                        במה אוכל לעזור?
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={3}
                        placeholder="ספרי לי בקצרה על העור שלך או מה היית רוצה להשיג..."
                        className="w-full px-4 py-3 rounded-xl border border-[#ddc1a7]/50 bg-[#f9f0dd]/30 text-[#5b4f47] placeholder:text-[#5b4f47]/40 focus:outline-none focus:ring-2 focus:ring-[#a06c3b] focus:border-transparent transition-all resize-none text-right"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5b4f47] to-[#695125] text-white font-semibold text-base hover:from-[#695125] hover:to-[#5b4f47] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>שלחי ואחזור אלייך</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>

                    {/* Privacy note */}
                    <p className="text-xs text-[#5b4f47]/60 text-center">
                      הפרטים שלך נשמרים בפרטיות מלאה ומשמשים רק ליצירת קשר
                    </p>
                  </form>
                </div>

                {/* Quick contact alternatives */}
                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="text-sm text-[#5b4f47]/60">או פני אליי ישירות:</span>
                  <a
                    href="https://wa.me/972533353203"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    וואטסאפ
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormSection;
