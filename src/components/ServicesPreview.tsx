import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const ServicesPreview = () => {
  return (
    <section className="section-y">
      <div className="container mx-auto container-px">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-medium">Nos expertises</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-secondary">
            Des services pensés pour <span className="text-gradient-orange">votre croissance</span>
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            Une équipe pluridisciplinaire pour transformer vos idées en produits digitaux solides.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services#${s.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card p-6 shadow-soft border border-border hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange text-primary-foreground shadow-orange">
                <s.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-secondary">{s.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-medium text-primary group-hover:gap-3 transition-all">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
