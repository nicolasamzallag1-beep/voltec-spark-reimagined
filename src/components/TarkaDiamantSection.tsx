import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import tarkaImg from "@/assets/tarka-diamant.jpg";

const TarkaDiamantSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="modules" className="relative py-24 md:py-40 overflow-hidden bg-foreground" ref={ref}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="voltec-section-label">Module phare</span>
              <h2 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mt-4 mb-2">
                TARKA
              </h2>
              <h2 className="font-heading text-5xl md:text-7xl font-bold text-voltec-yellow mb-8">
                DIAMANT
              </h2>
              <div className="voltec-divider mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-2xl md:text-3xl text-primary-foreground/80 font-light mb-8 leading-snug">
                Le panneau <strong className="text-primary-foreground font-semibold">le plus solide au monde</strong> !
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-6 mb-12">
                {[
                  { value: "30 ans", label: "Garantie" },
                  { value: "TVA 5,5%", label: "Éligible" },
                  { value: "Bas carbone", label: "Certifié" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-primary-foreground/10 px-6 py-4">
                    <div className="font-heading text-lg font-bold text-voltec-yellow">{stat.value}</div>
                    <div className="text-xs text-primary-foreground/50 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <a href="#" className="voltec-btn-primary">
                En savoir +
              </a>
            </ScrollReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <img
                src={tarkaImg}
                alt="Panneau Tarka Diamant"
                className="w-full max-w-lg mx-auto"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-voltec-yellow/5 blur-3xl rounded-full scale-75" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TarkaDiamantSection;
