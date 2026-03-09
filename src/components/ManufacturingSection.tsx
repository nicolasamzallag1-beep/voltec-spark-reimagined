import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import factoryImg from "@/assets/factory-bright.jpg";

const ManufacturingSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="fabrication" ref={ref} className="relative overflow-hidden">
      {/* Full-width cinematic factory image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img src={factoryImg} alt="Fabrication française" className="w-full h-[130%] object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-foreground/20" />
      </div>

      {/* Content */}
      <div className="py-32 md:py-40 section-warm relative -mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="voltec-section-label justify-center">Made in Alsace</span>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-6 mb-8">
                Nous sommes un
                <br />
                fabricant <span className="voltec-gradient-text">engagé !</span>
              </h2>
              <div className="voltec-divider mx-auto mb-10" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
                Le solaire de demain sera français, local et bas carbone.
                <br />
                <strong className="text-foreground font-semibold">Chez Voltec Solar nous le fabriquons déjà !</strong>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
                Depuis 2012, Voltec Solar innove et fabrique en Alsace des panneaux photovoltaïques toujours plus performants. Un engagement fort en faveur d'une énergie locale durable et souveraine.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <blockquote className="text-lg text-voltec-slate italic border-l-3 border-voltec-yellow pl-8 text-left max-w-lg mx-auto" style={{ borderLeftWidth: '3px', borderLeftColor: 'hsl(var(--voltec-yellow))' }}>
                C'est à 30 km de Strasbourg, que s'écrit depuis 2010 l'avenir des panneaux photovoltaïques français. Une implantation historique… et familiale.
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
