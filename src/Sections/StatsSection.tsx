import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SlidUpLeft, SlidUpRight } from '../components/Motion';

interface StatItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

const stats: StatItem[] = [
  {
    label: 'שנות ניסיון',
    value: 10,
    prefix: '+',
  },
  {
    label: 'לקוחות מרוצות',
    value: 500,
    prefix: '+',
  },
  {
    label: 'התאמה אישית',
    value: 100,
    suffix: '%',
  },
];

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 2500,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (!inView || hasAnimated) return;

    let start: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (start === null) {
        start = timestamp;
      }
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.round(startValue + (endValue - startValue) * progress);
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, hasAnimated, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section
      id="stats"
      className="w-full py-16 sm:py-20 px-4 sm:px-10 lg:px-20 bg-[#fffcf0]"
    >
      <div className="max-w-5xl mx-auto text-right">
        <motion.div
          variants={SlidUpRight(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8 sm:mb-10 flex flex-col items-end"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#b59b86] mb-2 text-right">
            קצת עליי במספרים
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47] mb-3">
            ניסיון, ידע ואהבה לעור
          </h2>
          <p className="text-sm sm:text-base text-[#5b4f47]/80 max-w-2xl">
            דקלה מדואלה – קוסמטיקאית רפואית המתמחה בטיפולי פנים מעמיקים, עדינים ומדויקים, עם ליווי אישי
            צמוד גם אחרי היציאה מהקליניקה.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              variants={SlidUpLeft(0.15 + index * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl bg-[#f9f0dd] border border-[#ddc1a7]/70 shadow-[0_8px_24px_rgba(91,79,71,0.12)] px-4 py-4 sm:px-6 sm:py-5 flex flex-col items-center justify-center text-center"
            >
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5b4f47] mb-1">
                <AnimatedNumber value={item.value} prefix={item.prefix} suffix={item.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-[#5b4f47]/80">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
