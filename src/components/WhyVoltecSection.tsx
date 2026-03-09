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
    <section className="py-24 md:py-32 section-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="voltec-section-label">Pourquoi Voltec</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
              Un fabricant engagé
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="voltec-card h-full">
                <item.icon className="w-8 h-8 text-voltec-yellow mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVoltecSection;
