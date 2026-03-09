import ScrollReveal from "./ScrollReveal";
import factoryImg from "@/assets/factory.jpg";

const ManufacturingSection = () => {
  return (
    <section id="fabrication" className="relative py-24 md:py-40 overflow-hidden section-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={factoryImg}
                alt="Fabrication française"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-voltec-yellow" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="voltec-section-label">Made in France</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                Nous sommes un fabricant engagé !
              </h2>
              <div className="voltec-divider mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Le solaire de demain sera français, local et bas carbone. Chez Voltec Solar nous le fabriquons déjà !
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Depuis 2012, Voltec Solar innove et fabrique en Alsace des panneaux photovoltaïques toujours plus performants. Un engagement fort en faveur d'une énergie locale durable et souveraine.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-voltec-yellow pl-6">
                C'est à 30 km de Strasbourg, que s'écrit depuis 2010 l'avenir des panneaux photovoltaïques français. Une implantation historique… et familiale.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
