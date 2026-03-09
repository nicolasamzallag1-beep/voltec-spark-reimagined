import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import tarkaImg from "@/assets/tarka-product.jpg";
import solarTexture from "@/assets/solar-texture.jpg";

const TarkaDiamantSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="modules" ref={containerRef} className="relative overflow-hidden">
      {/* Full-width cinematic solar texture band */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden voltec-image-zoom">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={solarTexture} alt="Technologie solaire" className="w-full h-[130%] object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground text-center">
              TARKA <span className="text-voltec-yellow">DIAMANT</span>
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* Product reveal section */}
      <div className="py-32 md:py-44 section-white relative" ref={ref}>
        <div className="gradient-warm-glow absolute inset-0" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Product image - Apple style */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src={tarkaImg}
                  alt="Panneau Tarka Diamant"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
                {/* Ambient glow */}
                <div className="absolute -inset-10 bg-voltec-yellow/5 blur-[80px] rounded-full -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <span className="voltec-section-label">Module phare</span>
                <h3 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-6 mb-4">
                  Le panneau
                </h3>
                <h3 className="text-display text-4xl md:text-5xl lg:text-6xl mb-8">
                  <span className="voltec-yellow-gradient-text">le plus solide</span>
                  <br />
                  <span className="text-foreground">au monde !</span>
                </h3>
                <div className="voltec-divider mb-10" />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-3 gap-6 mb-12">
                  {[
                    { value: "30 ans", label: "Garantie" },
                    { value: "5,5%", label: "TVA éligible" },
                    { value: "Certifié", label: "Bas carbone" },
                  ].map((stat) => (
                    <div key={stat.label} className="border-l-2 border-voltec-yellow pl-4">
                      <div className="font-heading text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="voltec-btn-primary group">
                    En savoir +
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="voltec-btn-secondary">
                    Voir tous les modules
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarkaDiamantSection;
