import { motion } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';

const steps = [
  {
    title: 'היכרות עם העור והקצב שלך',
    text: 'שיחה קצרה שבה נבין יחד מה מטרת הטיפול, מה מרגיש לך בעור ביומיום ומה הכי מפריע לך במראה.',
  },
  {
    title: 'אבחון עדין ומדויק',
    text: 'אני בוחנת את העור במגע ובעין מקצועית – מרקם, רגישות, לחות, פיגמנטציה ועוד, כדי לבחור טיפול מותאם אישית.',
  },
  {
    title: 'טיפול חווייתי ומרגיע',
    text: 'טיפול מקצועי עם מוצרים פעילים אך עדינים, מגע נעים ושימת לב לפרטים הקטנים – כדי שתצאי רגועה וזוהרת.',
  },
  {
    title: 'המשך בבית בליווי צמוד',
    text: 'המלצה על שגרת טיפוח יומיומית שמתאימה לך באמת, עם אפשרות ללווי אישי בווטסאפ גם אחרי הטיפול.',
  },
];

const MethodologySection: React.FC = () => {
  return (
    <section
      id="methodology"
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#f9f0dd]"
    >
      <div className="max-w-5xl mx-auto text-right">
        <motion.div
          variants={SlidUpRight(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86] mb-2 text-right">
            שיטת הטיפול
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47] mb-3">
            טיפול מדויק, נעים ומלווה
          </h2>
          <p className="text-sm sm:text-base text-[#5b4f47]/80 max-w-2xl text-right ml-auto">
            השיטה שלי משלבת ידע מקצועי מעודכן, מגע עדין והרבה הקשבה. המטרה היא לא רק עור מאוזן וזוהר,
            אלא גם חוויה רגועה בגוף ובלב.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={SlidUpLeft(0.1 + index * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-3xl bg-[#fffcf0] border border-[#ddc1a7]/70 shadow-[0_8px_24px_rgba(91,79,71,0.12)] px-5 py-5 sm:px-6 sm:py-6 text-right overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ddc1a7] to-[#695125]" />
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#5b4f47] mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5b4f47]/80 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
