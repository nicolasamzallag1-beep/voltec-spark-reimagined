import { Shield, Zap, Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const strengths = [
  {
    icon: Shield,
    title: "Garantie 30 ans",
    description: "Nos panneaux photovoltaïques sont garantis jusqu'à 25 ans. Un quart de siècle à construire ensemble.",
  },
  {
    icon: Zap,
    title: "Éligible à la TVA 5,5%",
    description: "Nos modules éligibles à la TVA 5.5% pour rendre le solaire accessible à tous.",
  },
  {
    icon: Leaf,
    title: "Bas Carbone",
    description: "Nous travaillons et fabriquons localement (Europe) et produisons via notre propre chaufferie biomasse.",
  },
];

const StrengthsSection = () => {
  return (
    <section className="py-24 md:py-32 section-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="voltec-section-label">Nos engagements</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-4">
              Des panneaux d'exception
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="voltec-card group text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-voltec-yellow/30 group-hover:border-voltec-yellow/60 transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-voltec-yellow" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-4">{item.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed text-sm">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
