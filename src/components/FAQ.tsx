import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Combien coûte un projet avec Tech-Deal ?", a: "Chaque projet est unique. Après un premier échange gratuit, nous vous remettons un devis détaillé sous 24 à 48h. Nos forfaits démarrent à 500 000 FCFA pour un site vitrine." },
  { q: "Quels sont les délais de réalisation ?", a: "Un site vitrine prend 2 à 4 semaines, une application mobile 6 à 12 semaines et une plateforme SaaS 3 à 6 mois selon la complexité." },
  { q: "Travaillez-vous uniquement au Sénégal ?", a: "Non. Bien que basés à Dakar, nous accompagnons des clients dans toute l'Afrique de l'Ouest, en Europe et en Amérique du Nord." },
  { q: "Assurez-vous la maintenance après livraison ?", a: "Oui. Nous proposons des forfaits de maintenance mensuelle (mises à jour, sauvegardes, support) adaptés à votre projet." },
  { q: "Quelles technologies utilisez-vous ?", a: "React, Next.js, React Native, Node.js, Python, PostgreSQL, AWS, ainsi que des solutions IA (OpenAI, Hugging Face). Nous choisissons la meilleure stack pour chaque projet." },
  { q: "Comment se déroule un projet ?", a: "1. Cadrage & devis · 2. Design UX/UI · 3. Développement par sprints · 4. Tests & validation · 5. Mise en ligne · 6. Maintenance et évolutions." },
];

const FAQ = () => {
  return (
    <section className="section-y bg-muted/40">
      <div className="container mx-auto container-px max-w-3xl">
        <div className="text-center mb-10">
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-medium">FAQ</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-secondary">Questions fréquentes</h2>
          <p className="mt-3 font-body text-muted-foreground">Tout ce que vous devez savoir avant de démarrer.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl bg-card border border-border px-5 shadow-soft">
              <AccordionTrigger className="font-display font-semibold text-secondary text-left hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
