import { MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import installationImg from "@/assets/voltec-installation.jpeg";

const InstallerSection = () => {
  return (
    <section id="installateurs" className="py-24 md:py-32 section-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="voltec-section-label">Réseau certifié</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                Nos installateurs
              </h2>
              <div className="voltec-divider mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La performance d'une installation commence par la qualité du fabricant.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Voltec Solar conçoit ses modules en Alsace et s'appuie sur un réseau d'installateurs qualifiés, formés à ses technologies et à ses standards.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#" className="voltec-btn-primary group">
                  <MapPin className="w-4 h-4 mr-2" />
                  Trouver un installateur
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="border border-border p-6 inline-block">
                <p className="text-sm text-muted-foreground mb-1">Vous êtes un installateur ?</p>
                <a href="#" className="text-voltec-blue font-semibold text-sm hover:underline inline-flex items-center gap-2">
                  Espace pro <ArrowRight className="w-3 h-3" />
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  Si votre installateur ne vous répond pas sous 72h, merci de nous contacter
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right">
            <div className="relative">
              <img
                src={installationImg}
                alt="Installation photovoltaïque"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-voltec-yellow" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InstallerSection;
