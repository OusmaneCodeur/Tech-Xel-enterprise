import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Nos réalisations"
        title={<>Projets qui font notre <span className="text-gradient-orange">fierté</span></>}
        description="Une sélection de réalisations livrées pour des startups, entreprises et institutions."
      />

      <section className="container mx-auto container-px py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.slug} className="group overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-all hover:-translate-y-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute top-3 left-3 rounded-full bg-primary/95 backdrop-blur px-3 py-1 font-sans text-xs font-medium text-primary-foreground">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-secondary">{p.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-accent text-accent-foreground font-sans text-xs px-3 py-1">{t}</span>
                ))}
              </div>
              <Button asChild variant="link" className="mt-4 px-0">
                <Link to="/contact">Découvrir le projet <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </article>
        ))}
      </section>

      <CTA />
    </>
  );
};

export default ProjectsPage;
