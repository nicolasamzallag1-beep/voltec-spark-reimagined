import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-voltec.png";

const navLinks = [
  { label: "Nos modules", href: "#modules" },
  { label: "Fabrication", href: "#fabrication" },
  { label: "Pourquoi Voltec", href: "#pourquoi" },
  { label: "Installateurs", href: "#installateurs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_30px_-10px_hsl(var(--voltec-blue)/0.1)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="relative z-10">
            <img
              src={logo}
              alt="Voltec Solar"
              className={`h-9 md:h-11 transition-all duration-500 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-voltec-yellow after:transition-all after:duration-400 hover:after:w-full ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#installateurs" className={`text-xs font-bold tracking-wider uppercase px-7 py-3 transition-all duration-500 border-2 ${
              scrolled
                ? "border-voltec-blue text-voltec-blue hover:bg-voltec-blue hover:text-primary-foreground"
                : "border-primary-foreground/40 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
            }`}>
              Trouver un installateur
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-10 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="text-foreground text-3xl font-heading font-bold"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#installateurs"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="voltec-btn-primary mt-6"
            >
              Trouver un installateur
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
