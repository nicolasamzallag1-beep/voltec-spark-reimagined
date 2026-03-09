import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-cinematic.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={heroImg} alt="Panneaux solaires" className="w-full h-full object-cover" />
      </motion.div>

      {/* Cinematic gradient overlay - warm sunlight feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-transparent to-transparent" />
      {/* Warm golden glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-voltec-yellow/15 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col justify-end pb-24 md:pb-32"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-voltec-yellow">
                Alsace, France — Depuis 2012
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-primary-foreground mb-8"
            >
              Concepteur et
              <br />
              fabricant <span className="text-voltec-yellow">français</span>
              <br />
              de panneaux
              <br />
              <span className="text-voltec-yellow">photovoltaïques</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-primary-foreground/60 font-light max-w-lg mb-12 leading-relaxed"
            >
              Les plus <strong className="text-primary-foreground font-medium">solides</strong>, les plus{" "}
              <strong className="text-primary-foreground font-medium">puissants</strong> et les plus{" "}
              <strong className="text-primary-foreground font-medium">bas carbone</strong> au monde
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#modules" className="voltec-btn-yellow">
                Découvrez nos modules
              </a>
              <a href="#installateurs" className="voltec-btn-white">
                Trouver un installateur
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-primary-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
