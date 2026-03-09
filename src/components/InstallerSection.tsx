import { MapPin, ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import installationImg from "@/assets/voltec-installation.jpeg";

const InstallerSection = () => {
  return (
    <section id="installateurs" className="py-32 md:py-44 section-cool relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <span className="voltec-section-label">Réseau certifié</span>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-6 mb-8">
                Trouvez votre
                <br />
                <span className="voltec-gradient-text">installateur</span>
              </h2>
              <div className="voltec-divider mb-10" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-4">
                La performance d'une installation commence par la qualité du fabricant.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Voltec Solar conçoit ses modules en Alsace et s'appuie sur un réseau d'installateurs qualifiés, formés à ses technologies et à ses standards.
              </p>
            </ScrollReveal>

            {/* Big CTA */}
            <ScrollReveal delay={0.3}>
              <div className="mb-12">
                <a href="#" className="voltec-btn-yellow group text-base py-6 px-12">
                  <MapPin className="w-5 h-5 mr-3" />
                  Trouver un installateur près de chez moi
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <p className="text-xs text-muted-foreground mt-4 ml-1">
                  En quelques clics — Si votre installateur ne vous répond pas sous 72h, merci de nous contacter
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-6 p-6 bg-background border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-voltec-blue-light flex-shrink-0">
                  <Phone className="w-5 h-5 text-voltec-blue" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Vous êtes un installateur ?</p>
                  <a href="#" className="text-voltec-blue font-heading font-semibold text-base hover:underline inline-flex items-center gap-2 mt-1">
                    Accéder à l'espace pro <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right">
            <div className="voltec-image-zoom relative">
              <img
                src={installationImg}
                alt="Installation photovoltaïque"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-voltec-yellow/30 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InstallerSection;
