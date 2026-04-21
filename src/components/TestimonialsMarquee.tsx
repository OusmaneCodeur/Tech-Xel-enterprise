import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

const TestimonialsMarquee = () => {
  // Duplicate for seamless loop
  const list = [...testimonials, ...testimonials];
  return (
    <section className="section-y bg-muted/40 overflow-hidden">
      <div className="container mx-auto container-px text-center mb-12">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-medium">Témoignages</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-secondary">Ils nous font confiance</h2>
        <p className="mt-3 font-body text-muted-foreground max-w-2xl mx-auto">
          Des entreprises, startups, organisateurs et particuliers qui ont propulsé leurs projets avec Tech-Xel.
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {list.map((t, i) => (
            <article
              key={i}
              className="w-[320px] md:w-[380px] shrink-0 rounded-2xl bg-card p-6 shadow-soft border border-border hover:shadow-elegant transition-shadow"
            >
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-3 font-body text-foreground italic leading-relaxed line-clamp-4">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-orange text-primary-foreground font-display font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-display font-semibold text-secondary text-sm">{t.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{t.role} · {t.context}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
