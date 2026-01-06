import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface ContactFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/35 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto"
          >
            <section className="relative overflow-hidden ring-1 ring-black/10 bg-neutral-900 rounded-3xl" dir="rtl">
              <div className="absolute inset-0">
                <img
                  src="/תמונות/טיפולי פנים/picture/13.jpeg"
                  alt=""
                  className="h-full w-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />
              </div>

              <div className="relative z-10 sm:p-8 md:p-12 pt-5 pr-5 pb-5 pl-5">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/10 text-white flex items-center justify-center ring-1 ring-white/15 hover:bg-white/15 transition-colors"
                  aria-label="סגירה"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-lg p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] text-neutral-500">דקלה מדואלה</p>
                          <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                            קביעת תור
                          </h3>
                        </div>
                        <div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        </div>
                      </div>

                      <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                        <div>
                          <label htmlFor="ct-name" className="block text-xs text-neutral-600">
                            שם מלא<span className="text-neutral-400"> *</span>
                          </label>
                          <input
                            id="ct-name"
                            name="name"
                            type="text"
                            required
                            placeholder="השם שלך"
                            className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 text-right"
                          />
                        </div>

                        <div>
                          <label htmlFor="ct-phone" className="block text-xs text-neutral-600">
                            טלפון<span className="text-neutral-400"> *</span>
                          </label>
                          <input
                            id="ct-phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="050-0000000"
                            className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 text-right"
                          />
                        </div>

                        <div>
                          <label htmlFor="ct-msg" className="block text-xs text-neutral-600">
                            הודעה (לא חובה)
                          </label>
                          <textarea
                            id="ct-msg"
                            name="message"
                            rows={4}
                            placeholder="ספרי לי בקצרה מה מטריד אותך בעור / איזה טיפול תרצי..."
                            className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 text-right"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                        >
                          שליחה
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                            <path d="M19 12H5" />
                            <path d="m12 19-7-7 7-7" />
                          </svg>
                        </button>

                        <p className="text-[11px] text-neutral-500">בלחיצה על שליחה את מאשרת יצירת קשר לצורך תיאום תור.</p>
                      </form>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <h2 className="text-white tracking-tight text-4xl sm:text-5xl font-semibold leading-[1.05]">
                      בואי נתאם טיפול.
                    </h2>
                    <p className="sm:text-lg max-w-2xl text-base text-neutral-200 mt-4">
                      השאירי פרטים ואני חוזרת אלייך תוך כמה שעות כדי לקבוע יום ושעה שנוחים לך.
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 6v6h4" />
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">מענה מהיר</p>
                          <p className="text-neutral-300 text-xs">בדרך כלל חוזרת תוך כמה שעות.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">תיאום קל</p>
                          <p className="text-neutral-300 text-xs">שיחה קצרה וקובעים תור.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7">
                      <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
                        <img
                          src="/לוגו/לוגו_גדול.jpeg"
                          alt="דקלה מדואלה"
                          className="h-12 w-12 rounded-xl object-cover"
                        />
                        <div className="min-w-0">
                          <p className="text-[11px] text-neutral-500 leading-none">קוסמטיקאית רפואית</p>
                          <p className="text-neutral-900 font-medium tracking-tight truncate">דקלה מדואלה</p>
                        </div>
                        <a
                          href="https://wa.me/972533353203"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mr-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors"
                        >
                          וואטסאפ
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormSection;
