import logo from "@/assets/logo-voltec.png";

const Footer = () => {
  return (
    <footer id="contact" className="section-dark border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src={logo} alt="Voltec Solar" className="h-10 brightness-0 invert mb-6" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              1, rue des Prés<br />
              F-67190 DINSHEIM SUR BRUCHE
            </p>
            <div className="mt-4 space-y-1">
              <a href="tel:+33388494984" className="block text-primary-foreground/50 text-sm hover:text-voltec-yellow transition-colors">
                Tel : +33 (0)3 88 49 49 84
              </a>
              <p className="text-primary-foreground/50 text-sm">
                Fax : +33 (0)3 88 49 49 85
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {["Accueil", "Nos modules", "Trouver un installateur", "Trouver un distributeur"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-primary-foreground/50 text-sm hover:text-voltec-yellow transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Ressources</h4>
            <ul className="space-y-3">
              {["Documentation technique", "Visiter l'atelier", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-primary-foreground/50 text-sm hover:text-voltec-yellow transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Suivez-nous</h4>
            <ul className="space-y-3">
              {[
                { name: "LinkedIn", url: "https://fr.linkedin.com/company/voltec-solar" },
                { name: "Facebook", url: "https://www.facebook.com/VoltecSolar" },
                { name: "Instagram", url: "https://www.instagram.com/voltec_solar/" },
                { name: "Youtube", url: "https://www.youtube.com/@Voltec_Solar" },
              ].map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 text-sm hover:text-voltec-yellow transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Voltec Solar. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Cookies", "RGPD"].map((l) => (
              <a key={l} href="#" className="text-primary-foreground/30 text-xs hover:text-primary-foreground/60 transition-colors">
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
