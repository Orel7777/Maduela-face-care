import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';

interface ContactFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ isOpen, onClose }) => {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'privacy'>('idle');
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; phone?: string }>({});
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setIsPrivacyAccepted(false);
    setIsSubmitting(false);
    setSubmitStatus('idle');
    setFieldErrors({});
    setIsToastOpen(false);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isToastOpen) return;

    const t = window.setTimeout(() => setIsToastOpen(false), 3500);
    return () => window.clearTimeout(t);
  }, [isToastOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const rawPhone = String(formData.get('phone') ?? '').trim();
    const phone = rawPhone.replace(/\D/g, '');

    const nextErrors: { name?: string; phone?: string } = {};
    const isNameValid = /^[\p{L}][\p{L} '\-]*$/u.test(name);
    if (!name) nextErrors.name = 'נא להזין שם מלא.';
    else if (!isNameValid) nextErrors.name = 'השם חייב להכיל אותיות בלבד.';

    if (!phone) nextErrors.phone = 'נא להזין מספר טלפון.';
    else if (!/^[0-9]{9,15}$/.test(phone)) nextErrors.phone = 'נא להזין מספר טלפון תקין.';

    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitStatus('idle');
      return;
    }

    if (!isPrivacyAccepted) {
      setSubmitStatus('privacy');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    formData.set('phone', phone);

    formData.append('_subject', 'פנייה חדשה מהאתר - דקלה מדואלה');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('source', 'טופס יצירת קשר באתר');

    try {
      const res = await fetch('https://formsubmit.co/ajax/orelbukris7777@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      setIsToastOpen(true);
      form.reset();
      setIsPrivacyAccepted(false);
      setFieldErrors({});
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto pointer-events-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <section className="relative overflow-hidden ring-1 ring-[#ddc1a7]/30 bg-[#fffcf0] rounded-3xl shadow-2xl" dir="rtl">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ddc1a7]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#a06c3b]/5 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 sm:p-8 md:p-12 pt-5 pr-5 pb-5 pl-5">
                <button
                  type="button"
                  onClick={onClose}
                  className="sm:hidden absolute top-3 right-3 z-30 h-11 w-11 rounded-full bg-[#fffcf0]/90 text-[#5b4f47] flex items-center justify-center shadow-lg ring-1 ring-[#ddc1a7]/40 hover:bg-[#fffcf0] transition-colors"
                  aria-label="סגירה"
                >
                  <span className="text-lg leading-none font-semibold">×</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="hidden sm:flex absolute top-4 left-4 h-10 w-10 rounded-xl bg-[#5b4f47]/5 text-[#5b4f47] items-center justify-center hover:bg-[#5b4f47]/10 transition-colors"
                  aria-label="סגירה"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <div className="mb-6 lg:hidden">
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-[#ddc1a7]/30 bg-white/60">
                    <div className="aspect-[16/9]">
                      <img
                        src="/images/Dikla/picture/4.jpeg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fffcf0]/90 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-[#ddc1a7]/30 shadow-sm p-4 sm:p-6"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] text-[#a06c3b] font-medium tracking-wide">דקלה מדואלה</p>
                          <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#5b4f47]">
                            קביעת תור
                          </h3>
                        </div>
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#ddc1a7] to-[#a06c3b] text-white flex items-center justify-center shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                        </div>
                      </div>

                      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label htmlFor="ct-name" className="block text-xs font-medium text-[#5b4f47]/80 mb-1.5">
                            שם מלא<span className="text-red-400"> *</span>
                          </label>
                          <input
                            id="ct-name"
                            name="name"
                            type="text"
                            required
                            placeholder="השם שלך"
                            onInput={(e) => {
                              const input = e.currentTarget;
                              const next = input.value.replace(/[^\p{L} '\-]/gu, '');
                              if (next !== input.value) input.value = next;
                            }}
                            className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#fffcf0] focus:border-[#a06c3b] focus:ring-1 focus:ring-[#a06c3b] outline-none placeholder:text-[#5b4f47]/30 text-[#5b4f47] transition-all ${
                              fieldErrors.name ? 'border-red-400' : 'border-[#ddc1a7]/30'
                            }`}
                          />
                          {fieldErrors.name && <p className="mt-1.5 text-xs text-red-600">{fieldErrors.name}</p>}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label htmlFor="ct-phone" className="block text-xs font-medium text-[#5b4f47]/80 mb-1.5">
                            טלפון<span className="text-red-400"> *</span>
                          </label>
                          <input
                            id="ct-phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="050-0000000"
                            inputMode="numeric"
                            autoComplete="tel"
                            onInput={(e) => {
                              const input = e.currentTarget;
                              const next = input.value.replace(/\D/g, '');
                              if (next !== input.value) input.value = next;
                            }}
                            className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#fffcf0] focus:border-[#a06c3b] focus:ring-1 focus:ring-[#a06c3b] outline-none placeholder:text-[#5b4f47]/30 text-[#5b4f47] transition-all ${
                              fieldErrors.phone ? 'border-red-400' : 'border-[#ddc1a7]/30'
                            }`}
                          />
                          {fieldErrors.phone && <p className="mt-1.5 text-xs text-red-600">{fieldErrors.phone}</p>}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <label htmlFor="ct-msg" className="block text-xs font-medium text-[#5b4f47]/80 mb-1.5">
                            הודעה (לא חובה)
                          </label>
                          <textarea
                            id="ct-msg"
                            name="message"
                            rows={3}
                            placeholder="ספרי לי בקצרה מה מטריד אותך בעור..."
                            className="w-full px-4 py-3 text-sm rounded-xl border border-[#ddc1a7]/30 bg-[#fffcf0] focus:border-[#a06c3b] focus:ring-1 focus:ring-[#a06c3b] outline-none placeholder:text-[#5b4f47]/30 text-[#5b4f47] transition-all resize-none"
                          />
                        </motion.div>

                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex flex-row-reverse items-center justify-center rounded-xl bg-[#5b4f47] text-[#fffcf0] px-4 py-3.5 text-sm font-semibold hover:bg-[#4a423e] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#5b4f47]/20 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'שולחת...' : 'שליחה וקביעת תור'}
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                            <path d="M19 12H5" />
                            <path d="m12 19-7-7 7-7" />
                          </svg>
                        </motion.button>

                        {submitStatus === 'privacy' && (
                          <p className="text-xs text-center text-[#a06c3b]">כדי לשלוח את הטופס יש לאשר את מדיניות הפרטיות.</p>
                        )}

                        {submitStatus === 'success' && (
                          <p className="text-xs text-center text-[#5b4f47]">נשלח בהצלחה! אחזור אלייך בהקדם.</p>
                        )}

                        {submitStatus === 'error' && (
                          <p className="text-xs text-center text-red-600">משהו השתבש בשליחה. נסי שוב בעוד רגע.</p>
                        )}

                        <div className="flex items-start gap-3 rounded-2xl bg-white/60 border border-[#ddc1a7]/30 p-3">
                          <button
                            type="button"
                            onClick={() => setIsPrivacyAccepted((v) => !v)}
                            className={`mt-0.5 h-5 w-5 rounded-md border flex items-center justify-center transition-colors ${
                              isPrivacyAccepted
                                ? 'bg-[#a06c3b] border-[#a06c3b] text-white'
                                : 'bg-[#fffcf0] border-[#ddc1a7]/50 text-transparent'
                            }`}
                            aria-label="אישור מדיניות פרטיות"
                          >
                            <span className="text-xs font-bold">✓</span>
                          </button>
                          <p className="text-xs text-[#5b4f47]/70 leading-relaxed">
                            אני מאשרת שקראתי ואני מסכימה ל־{' '}
                            <Link
                              to="/privacy-policy"
                              className="text-[#a06c3b] underline underline-offset-4 hover:text-[#5b4f47] transition-colors"
                              onClick={onClose}
                            >
                              מדיניות הפרטיות
                            </Link>
                            .
                          </p>
                        </div>

                        <p className="text-[10px] text-center text-[#5b4f47]/50">בלחיצה את מאשרת יצירת קשר לתיאום תור</p>
                      </form>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-center h-full">
                    <div className="hidden lg:block mb-8">
                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-[#ddc1a7]/30 bg-white/60">
                        <div className="aspect-[16/9]">
                          <img
                            src="/images/Dikla/picture/4.jpeg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fffcf0]/90 via-transparent to-transparent" />
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-[#5b4f47] tracking-tight text-4xl sm:text-5xl font-bold leading-[1.1]">
                        בואי נתאם לך<br/>
                        <span className="text-[#a06c3b]">רגע של שקט.</span>
                      </h2>
                      <p className="sm:text-lg max-w-xl text-[#5b4f47]/80 mt-5 leading-relaxed">
                        העור שלך הוא כרטיס הביקור שלך. השאירי פרטים ואני אחזור אלייך בהקדם כדי להתאים לך את הטיפול המדויק ביותר עבורך.
                      </p>
                    </motion.div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-[#ddc1a7]/20"
                      >
                        <div className="h-10 w-10 rounded-xl bg-[#ddc1a7]/20 flex items-center justify-center text-[#a06c3b]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 6v6h4" />
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#5b4f47] font-bold text-sm mb-0.5">זמינות גבוהה</p>
                          <p className="text-[#5b4f47]/60 text-xs leading-relaxed">אני משתדלת לחזור לכל פנייה תוך זמן קצר כדי שתוכלי להגיע בהקדם.</p>
                        </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-[#ddc1a7]/20"
                      >
                        <div className="h-10 w-10 rounded-xl bg-[#ddc1a7]/20 flex items-center justify-center text-[#a06c3b]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#5b4f47] font-bold text-sm mb-0.5">שיחה אישית</p>
                          <p className="text-[#5b4f47]/60 text-xs leading-relaxed">בשיחה קצרה נבין יחד מה העור שלך צריך ונקבע את התור המושלם.</p>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8"
                    >
                      <div className="inline-flex items-center gap-4 rounded-2xl bg-white/80 border border-[#ddc1a7]/30 shadow-sm p-3 pr-4">
                        <div className="min-w-0">
                          <p className="text-[10px] text-[#a06c3b] font-medium leading-none mb-1">מעדיפה בוואטסאפ?</p>
                          <p className="text-[#5b4f47] font-bold text-sm tracking-tight truncate">שלחי לי הודעה ישירה</p>
                        </div>
                        <a
                          href="https://wa.me/972533353203"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#695125] to-[#ddc1a7] text-white px-4 py-2.5 text-xs font-bold hover:scale-105 transition-all shadow-md shadow-[#695125]/20"
                        >
                          <span className="text-white">וואטסאפ</span>
                          <BsWhatsapp className="text-white" />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          <AnimatePresence>
            {isToastOpen && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]"
              >
                <div className="pointer-events-auto flex items-center gap-3 rounded-2xl bg-white shadow-2xl ring-1 ring-[#ddc1a7]/40 px-4 py-3">
                  <div className="h-9 w-9 rounded-xl bg-[#25d366]/15 text-[#25d366] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#5b4f47]">הטופס נשלח בהצלחה</p>
                    <p className="text-xs text-[#5b4f47]/70">אחזור אלייך בהקדם האפשרי.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormSection;
