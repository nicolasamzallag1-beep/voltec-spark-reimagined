import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const figures = [
  { value: 500000000, label: "cellules soudées", format: true },
  { value: 200, label: "salariés", format: false },
  { value: 5000, label: "panneaux produits / jour", format: true },
  { value: 100000, label: "installations en France", format: true },
];

const AnimatedNumber = ({ value, format }: { value: number; format: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2500;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{format ? display.toLocaleString("fr-FR") : display}</span>;
};

const KeyFiguresSection = () => {
  return (
    <section className="py-32 md:py-44 section-blue-tint relative overflow-hidden">
      <div className="gradient-warm-glow absolute inset-0" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="voltec-section-label justify-center">En chiffres</span>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-6">
              Voltec Solar
              <br />
              <span className="voltec-gradient-text">en chiffres</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {figures.map((fig, i) => (
            <ScrollReveal key={fig.label} delay={i * 0.15}>
              <div className="text-center">
                <div className="voltec-stat-number mb-4">
                  <AnimatedNumber value={fig.value} format={fig.format} />
                </div>
                <div className="voltec-divider mx-auto mb-4" />
                <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">{fig.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
