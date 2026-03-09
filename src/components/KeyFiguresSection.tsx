import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const figures = [
  { value: 500000000, suffix: "", label: "cellules soudées", format: true },
  { value: 200, suffix: "", label: "salariés", format: false },
  { value: 5000, suffix: "", label: "panneaux produits / jour", format: true },
  { value: 100000, suffix: "", label: "Installations en France", format: true },
];

const AnimatedNumber = ({ value, format }: { value: number; format: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  const formatted = format
    ? display.toLocaleString("fr-FR")
    : display.toString();

  return <span ref={ref}>{formatted}</span>;
};

const KeyFiguresSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-foreground">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="voltec-section-label">En chiffres</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
              Voltec Solar en chiffres
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {figures.map((fig, i) => (
            <ScrollReveal key={fig.label} delay={i * 0.15}>
              <div className="text-center">
                <div className="voltec-stat-number mb-3">
                  <AnimatedNumber value={fig.value} format={fig.format} />
                </div>
                <p className="text-primary-foreground/50 text-sm uppercase tracking-wider">{fig.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
