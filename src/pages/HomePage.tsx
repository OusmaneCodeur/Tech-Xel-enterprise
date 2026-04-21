import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Zap, Heart, Users } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Présentation rapide */}
      <section className="section-y">
        <div className="container mx-auto container-px grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-medium">Qui sommes-nous</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-secondary leading-tight">
              Une équipe sénégalaise <br />passionnée par <span className="text-gradient-orange">la tech</span>
            </h2>
            <p className="mt-5 font-body text-muted-foreground leading-relaxed">
              Tech-Deal est une entreprise technologique basée à Dakar. Nous accompagnons des
              marques ambitieuses dans leur transformation digitale avec des solutions modernes,
              sur mesure et orientées résultats.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { Icon: Target, title: "Mission", text: "Démocratiser la tech en Afrique." },
                { Icon: Zap, title: "Vision", text: "Devenir l'agence tech de référence." },
                { Icon: Heart, title: "Valeurs", text: "Excellence, intégrité, créativité." },
                { Icon: Users, title: "Approche", text: "Centrée sur le client, agile." },
              ].map((b) => (
                <div key={b.title} className="rounded-xl border border-border p-4 hover:border-primary transition-colors">
                  <b.Icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 font-display font-semibold text-secondary">{b.title}</p>
                  <p className="font-sans text-sm text-muted-foreground font-light">{b.text}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="outlineDark" className="mt-8">
              <Link to="/a-propos">En savoir plus sur Tech-Deal</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-orange opacity-20 blur-2xl rounded-3xl" />
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="Équipe Tech-Deal en réunion"
              loading="lazy"
              width={1200}
              height={800}
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <ServicesPreview />
      <TestimonialsMarquee />
      <Partners />
      <CTA />
      <FAQ />
    </>
  );
};

export default HomePage;
