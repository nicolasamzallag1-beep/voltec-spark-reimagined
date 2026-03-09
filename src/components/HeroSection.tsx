import { motion } from "framer-motion";
import heroImg from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Installation photovoltaïque" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-voltec-blue-deep/95 via-voltec-blue-deep/80 to-voltec-blue-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-voltec-blue-deep/60 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="voltec-section-label">Voltec Solar — Alsace, France</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-primary-foreground mb-8"
          >
            Concepteur et fabricant{" "}
            <span className="text-voltec-yellow">français</span> de{" "}
            <span className="text-voltec-yellow">panneaux photovoltaïques</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-primary-foreground/70 font-light leading-relaxed mb-12 max-w-xl"
          >
            Les plus <strong className="text-primary-foreground font-semibold">solides</strong>, les plus{" "}
            <strong className="text-primary-foreground font-semibold">puissants</strong> et les plus{" "}
            <strong className="text-primary-foreground font-semibold">bas carbone</strong> au monde
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#modules" className="voltec-btn-primary">
              Découvrez nos modules
            </a>
            <a href="#installateurs" className="voltec-btn-outline-white">
              Trouver un installateur
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
