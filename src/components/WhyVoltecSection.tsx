import { Factory, ShieldCheck, Lightbulb, ScanSearch, Recycle, Footprints } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: Factory,
    title: "Fabrication française",
    description: "C'est à 30 km de Strasbourg, que s'écrit depuis 2010 l'avenir des panneaux photovoltaïques français. Une implantation historique… et familiale.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie",
    description: "Nos panneaux photovoltaïques sont garantis jusqu'à 25 ans. Un quart de siècle à construire ensemble.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Innover est une seconde nature ; que ce soit par l'intégration de la meilleure cellule du marché, ou par notre procédé breveté proposant des demi-cellules uniques au monde.",
  },
  {
    icon: ScanSearch,
    title: "Traçabilité des matériaux",
    description: "Silicium, aluminium, verre, argent, plastiques, nos matériaux sont majoritairement européens et surtout choisis pour leur faible impact environnemental et sociétal.",
  },
  {
    icon: Recycle,
    title: "Gestion du cycle de vie",
    description: "Innover est une seconde nature ; que ce soit par l'intégration de la meilleure cellule du marché, ou par notre procédé breveté proposant des demi-cellules uniques au monde.",
  },
  {
    icon: Footprints,
    title: "Empreinte carbone",
    description: "Nous travaillons et fabriquons localement (Europe) et produisons via notre propre chaufferie biomasse et notre propre installation photovoltaïque.",
  },
];

const WhyVoltecSection = () => {
  return (
    <section id="pourquoi" className="py-32 md:py-44 section-white relative">
      <div className="gradient-sunlight absolute inset-0" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="voltec-section-label justify-center">Pourquoi Voltec</span>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-6">
              Un fabricant
              <br />
              <span className="voltec-gradient-text">engagé</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="voltec-feature-card h-full group">
                <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-full bg-voltec-blue-light group-hover:bg-voltec-yellow-soft transition-colors duration-500">
                  <item.icon className="w-5 h-5 text-voltec-blue" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVoltecSection;
