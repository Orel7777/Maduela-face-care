import React from 'react';

type MassagePromoProps = {
  className?: string;
};

const MassagePromo: React.FC<MassagePromoProps> = ({ className }) => {
  return (
    <section className={className} dir="rtl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#fffcf0] via-[#f9f0dd]/70 to-[#fffcf0] border border-[#ddc1a7]/60 shadow-[0_14px_40px_rgba(91,79,71,0.12)]">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ddc1a7]/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#a06c3b]/10 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 sm:p-8 md:p-10">
          <div className="text-right">
            <p className="text-xs tracking-[0.22em] uppercase text-[#b59b86] mb-3">שירות נוסף</p>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47]">
              מסאז׳ים מקצועיים שמחזירים לגוף שקט
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5b4f47]/80 leading-relaxed">
              מחפשים גם שחרור עמוק, הפחתת מתח וכאבים, או פשוט רגע לעצמכם? מוזמנים להציץ בדף המסאז׳ים של
              דקלה ולקבוע טיפול שמתאים בדיוק למה שהגוף שלכם צריך.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="https://dikla-massage.co.il/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#5b4f47] text-white px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                לדף המסאז׳ים
              </a>
              <div className="rounded-2xl bg-white/55 border border-[#ddc1a7]/40 px-4 py-3 text-sm text-[#5b4f47]/80">
                זמינות לתיאום בקליק • קליניקה נעימה • יחס אישי
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] md:aspect-[16/12] rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
              <img
                src="/images/Dikla/website.png"
                alt="מסאז׳ים - תמונת אווירה"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm px-4 py-2 text-xs text-[#5b4f47] border border-[#ddc1a7]/50 shadow-sm">
                  טיפול מרגיע • שחרור • אנרגיה חדשה
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassagePromo;
