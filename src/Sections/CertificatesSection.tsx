import { motion } from 'framer-motion';

const certificates = [
  '/תמונות/תעודות/2 (2).jpeg',
  '/תמונות/תעודות/2 (4).jpeg',
  '/תמונות/תעודות/2.1.jpeg',
  '/תמונות/תעודות/WhatsApp Image 2025-04-14 at 19.44.28 (1).jpeg',
  '/תמונות/תעודות/WhatsApp Image 2025-04-14 at 19.44.28.jpeg',
  '/תמונות/תעודות/WhatsApp Image 2025-04-14 at 19.45.24.jpeg',
];

const CertificatesSection: React.FC = () => {
  return (
    <section
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#f9f0dd]"
    >
      <div className="max-w-5xl mx-auto text-right">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10 sm:mb-14 flex flex-col items-end"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86] mb-2 text-right">
            הסמכות והכשרות
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47] mb-3">
            ידע מקצועי שמגובה בתעודות
          </h2>
          <p className="text-sm sm:text-base text-[#5b4f47]/80 max-w-2xl">
            מאחורי כל טיפול עומדים לימודים, קורסים והשתלמויות בתחום האסתטיקה והעור – כדי שתדעי שאת בידיים
            מקצועיות ובטוחות.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.17, 0.67, 0.3, 0.97] }}
              className="rounded-2xl overflow-hidden border border-[#ddc1a7]/70 bg-[#fffcf0] shadow-[0_6px_18px_rgba(91,79,71,0.15)]"
            >
              <img
                src={src}
                alt="תעודה מקצועית"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
