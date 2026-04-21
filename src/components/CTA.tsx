import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-y">
      <div className="container mx-auto container-px">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white p-10 md:p-16 shadow-hover">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Prêt à donner vie à <span className="text-gradient-orange">votre projet</span> ?
              </h2>
              <p className="mt-4 font-body text-white/85 max-w-xl">
                Échangeons sur vos besoins et obtenez un devis gratuit sous 24h. Sans engagement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Contactez-nous <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link to="/contact?devis=1">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
