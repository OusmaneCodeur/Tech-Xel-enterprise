import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* glow blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto container-px py-20 md:py-28 lg:py-32 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 font-sans text-xs uppercase tracking-wider border border-white/20">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Agence tech sénégalaise
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Concevons votre <span className="text-gradient-orange">avenir digital</span>, ensemble.
          </h1>
          <p className="mt-5 font-body text-lg text-white/85 italic">
            « Des solutions digitales modernes pour faire grandir vos ambitions. »
          </p>
          <p className="mt-3 font-sans font-light text-white/75 max-w-xl">
            Tech-Deal accompagne les entreprises, startups et institutions du Sénégal et d'ailleurs
            dans la création de produits digitaux performants — du web à l'intelligence artificielle.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/services">
                Découvrir nos services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/contact?devis=1">Demander un devis</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[{ k: "+50", v: "Projets livrés" }, { k: "98%", v: "Clients satisfaits" }, { k: "6", v: "Experts passionnés" }].map((s) => (
              <div key={s.v}>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">{s.k}</p>
                <p className="font-sans text-xs text-white/70 uppercase tracking-wider">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-hover ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Équipe Tech-Deal collaborant sur des interfaces holographiques"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          {/* floating cards */}
          <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-xl bg-card text-foreground p-4 shadow-elegant animate-float">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-orange text-primary-foreground font-display font-bold">★</div>
            <div>
              <p className="font-display text-sm font-semibold">Note moyenne 4.9/5</p>
              <p className="font-sans text-xs text-muted-foreground">basée sur 50+ projets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
