import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title={<>Tout ce dont vous avez <span className="text-gradient-orange">besoin</span></>}
        description="Du concept à la mise en production, six expertises complémentaires pour bâtir vos produits digitaux."
      />

      <div className="container mx-auto container-px py-16 space-y-20 md:space-y-28">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} className="scroll-mt-24 grid lg:grid-cols-2 gap-10 items-center">
              <div className={reverse ? "lg:order-2" : ""}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-orange opacity-15 blur-2xl rounded-3xl" />
                  <img src={s.image} alt={s.title} loading="lazy" width={1024} height={768} className="relative rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]" />
                </div>
              </div>
              <div className={reverse ? "lg:order-1" : ""}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange text-primary-foreground shadow-orange">
                  <s.Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold text-secondary">{s.title}</h2>
                <p className="mt-4 font-body text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-6 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-sans text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <Link to="/contact?devis=1">En savoir plus <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outlineDark">
                    <Link to="/projets">Voir nos projets</Link>
                  </Button>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTA />
    </>
  );
};

export default ServicesPage;
