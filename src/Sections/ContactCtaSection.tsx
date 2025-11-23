import { motion } from 'framer-motion';

interface ContactCtaSectionProps {
  onOpenContact?: () => void;
}

const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#f9f0dd]"
    >
      <div className="max-w-3xl mx-auto text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl bg-[#fffcf0] border border-[#ddc1a7]/80 shadow-[0_12px_35px_rgba(91,79,71,0.18)] px-6 py-7 sm:px-8 sm:py-9 flex flex-col gap-5"
        >
          <div className="text-right">
            <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86] mb-2 text-right">
              בואי נדבר על העור שלך
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47] mb-3">
              כמה שאלות קצרות – וטיפול אחד ששייך רק לך
            </h2>
            <p className="text-sm sm:text-base text-[#5b4f47]/80">
              אפשר להתחיל בייעוץ קצר בוואטסאפ, לשלוח תמונה של העור או לשאול כל שאלה. יחד נתאים עבורך את
              הטיפול הראשון בקליניקה.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact()}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white bg-[#695125] hover:bg-[#5b4f47] shadow-[0_8px_24px_rgba(91,79,71,0.35)]"
            >
              <span>שלחי הודעה מהירה בוואטסאפ</span>
            </button>
            <a
              href="tel:0503080018"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-[#5b4f47] bg-[#ddc1a7]/20 border border-[#ddc1a7] hover:bg-[#ddc1a7]/30"
            >
              <span>שיחת טלפון לתיאום</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
