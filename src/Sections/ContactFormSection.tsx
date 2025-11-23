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
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-5xl"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#ddc1a7]/70 shadow-[0_18px_55px_rgba(91,79,71,0.5)] ring-1 ring-[#ddc1a7]/40 bg-[#fffcf0]">
              {/* Background */}
              <div className="absolute inset-0">
                <img
                  src="/תמונות/טיפולי פנים/picture/13.jpeg"
                  alt="טיפול פנים בקליניקה"
                  className="h-full w-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5b4f47]/85 via-[#5b4f47]/55 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Form card */}
                  <motion.div
                    className="lg:col-span-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    <div className="rounded-2xl bg-[#fffcf0]/95 backdrop-blur ring-1 ring-[#ddc1a7]/60 shadow-lg p-4 sm:p-5 text-right">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div>
                          <p className="text-[11px] text-[#b59b86]">טופס יצירת קשר</p>
                          <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-[#5b4f47]">
                            נשמח לחזור אלייך
                          </h3>
                        </div>
                        <div className="h-9 w-9 rounded-xl bg-[#5b4f47] text-[#fffcf0] flex items-center justify-center shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
                          </svg>
                        </div>
                      </div>

                      <form className="mt-3 space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label htmlFor="ct-name" className="block text-[11px] text-[#7b6a5f]">
                            שם מלא<span className="text-[#b59b86]"> *</span>
                          </label>
                          <input
                            id="ct-name"
                            name="name"
                            type="text"
                            required
                            placeholder="דקלה כהן"
                            className="mt-1 w-full rounded-xl border border-[#ddc1a7]/70 bg-white/95 px-3 py-2.5 text-xs sm:text-sm text-right placeholder:text-[#b59b86] focus:outline-none focus:ring-2 focus:ring-[#695125] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label htmlFor="ct-phone" className="block text-[11px] text-[#7b6a5f]">
                            טלפון<span className="text-[#b59b86]"> *</span>
                          </label>
                          <input
                            id="ct-phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="050-0000000"
                            className="mt-1 w-full rounded-xl border border-[#ddc1a7]/70 bg-white/95 px-3 py-2.5 text-xs sm:text-sm text-right placeholder:text-[#b59b86] focus:outline-none focus:ring-2 focus:ring-[#695125] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label htmlFor="ct-msg" className="block text-[11px] text-[#7b6a5f]">
                            איך אוכל לעזור?
                          </label>
                          <textarea
                            id="ct-msg"
                            name="message"
                            rows={4}
                            placeholder="ספרי לי בקצרה על העור שלך או על מה היית רוצה לקבל טיפול."
                            className="mt-1 w-full rounded-xl border border-[#ddc1a7]/70 bg-white/95 px-3 py-2.5 text-xs sm:text-sm text-right placeholder:text-[#b59b86] focus:outline-none focus:ring-2 focus:ring-[#695125] focus:border-transparent resize-y"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center rounded-xl bg-[#695125] text-white px-4 py-2.5 text-xs sm:text-sm font-medium tracking-tight hover:bg-[#5b4f47] transition-colors shadow-[0_8px_22px_rgba(91,79,71,0.35)]"
                        >
                          שלחי את הפרטים ואחזור אלייך
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 mr-1"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </button>

                        <p className="text-[10px] text-[#7b6a5f]/80 mt-1">
                          הפרטים שלך נשמרים בפרטיות מלאה ומשמשים רק לצורך חזרה אלייך.
                        </p>
                      </form>
                    </div>
                  </motion.div>

                  {/* Copy + highlights */}
                  <motion.div
                    className="lg:col-span-7 text-right"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                  >
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20 flex items-center justify-center text-[#f7e6c9]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M12 6v6h4" />
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-[#fffcf0]">מענה מהיר</p>
                          <p className="text-[11px] text-[#fdf6e9]/80">
                            ברוב המקרים אחזור אלייך באותו יום או עד יום עסקים אחד.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/20 flex items-center justify-center text-[#f7e6c9]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <circle cx="6" cy="19" r="3" />
                            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                            <circle cx="18" cy="5" r="3" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-[#fffcf0]">שלבים ברורים</p>
                          <p className="text-[11px] text-[#fdf6e9]/80">
                            אשלח לך הצעה מסודרת לטיפול ראשון ושגרת המשך מותאמת אישית.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 left-4 rounded-full bg-[#00000066] hover:bg-[#00000099] text-white p-2 backdrop-blur-sm"
              >
                <span className="sr-only">סגירת טופס</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormSection;
