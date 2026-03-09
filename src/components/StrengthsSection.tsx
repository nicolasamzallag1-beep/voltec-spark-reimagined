import { Shield, Zap, Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const strengths = [
  {
    icon: Shield,
    title: "Garantie 30 ans",
    stat: "30",
    unit: "ans",
    description: "Nos panneaux photovoltaïques sont garantis jusqu'à 25 ans. Un quart de siècle à construire ensemble.",
  },
  {
    icon: Zap,
    title: "Éligible à la TVA 5,5%",
    stat: "5,5",
    unit: "%",
    description: "Nos modules éligibles à la TVA 5.5% pour rendre le solaire accessible à tous les Français.",
  },
  {
    icon: Leaf,
    title: "Bas Carbone",
    stat: "—",
    unit: "",
    description: "Nous travaillons et fabriquons localement (Europe) et produisons via notre propre chaufferie biomasse.",
  },
];

const StrengthsSection = () => {
  return (
    <section className="py-32 md:py-44 section-white relative">
      <div className="gradient-sunlight absolute inset-0" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="voltec-section-label justify-center">Nos engagements</span>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-6">
              Des panneaux
              <br />
              <span className="voltec-gradient-text">d'exception</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {strengths.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="voltec-feature-card h-full text-center group">
                <div className="w-14 h-14 mx-auto mb-8 flex items-center justify-center rounded-full bg-voltec-blue-light group-hover:bg-voltec-yellow-soft transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-voltec-blue" />
                </div>
                <div className="mb-6">
                  <span className="font-heading text-5xl font-bold text-voltec-blue">{item.stat}</span>
                  <span className="font-heading text-2xl font-bold text-voltec-blue ml-1">{item.unit}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
