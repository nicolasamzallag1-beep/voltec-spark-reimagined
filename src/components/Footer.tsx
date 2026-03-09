import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo-voltec.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground relative overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-voltec-yellow/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Top CTA band */}
        <div className="text-center mb-20 pb-20 border-b border-primary-foreground/10">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prêt à passer au solaire ?
          </h3>
          <p className="text-primary-foreground/50 mb-10 max-w-md mx-auto">
            Trouvez un installateur certifié Voltec Solar près de chez vous
          </p>
          <a href="#installateurs" className="voltec-btn-yellow group">
            Trouver un installateur
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src={logo} alt="Voltec Solar" className="h-10 brightness-0 invert mb-6" />
            <p className="text-primary-foreground/40 text-sm leading-relaxed">
              1, rue des Prés<br />
              F-67190 DINSHEIM SUR BRUCHE
            </p>
            <div className="mt-4 space-y-1">
              <a href="tel:+33388494984" className="block text-primary-foreground/40 text-sm hover:text-voltec-yellow transition-colors duration-300">
                Tel : +33 (0)3 88 49 49 84
              </a>
              <p className="text-primary-foreground/40 text-sm">
                Fax : +33 (0)3 88 49 49 85
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Accueil", "Nos modules", "Trouver un installateur", "Trouver un distributeur"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-primary-foreground/40 text-sm hover:text-voltec-yellow transition-colors duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-6">Ressources</h4>
            <ul className="space-y-3">
              {["Documentation technique", "Visiter l'atelier", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-primary-foreground/40 text-sm hover:text-voltec-yellow transition-colors duration-300">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-6">Suivez-nous</h4>
            <ul className="space-y-3">
              {[
                { name: "LinkedIn", url: "https://fr.linkedin.com/company/voltec-solar" },
                { name: "Facebook", url: "https://www.facebook.com/VoltecSolar" },
                { name: "Instagram", url: "https://www.instagram.com/voltec_solar/" },
                { name: "Youtube", url: "https://www.youtube.com/@Voltec_Solar" },
              ].map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 text-sm hover:text-voltec-yellow transition-colors duration-300">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/25 text-xs">
            © {new Date().getFullYear()} Voltec Solar. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Cookies", "RGPD"].map((l) => (
              <a key={l} href="#" className="text-primary-foreground/25 text-xs hover:text-primary-foreground/50 transition-colors duration-300">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
