import PageHeader from "@/components/PageHeader";
import { team } from "@/data/team";
import { Target, Eye, Heart } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import CTA from "@/components/CTA";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={<>L'équipe derrière <span className="text-gradient-orange">Tech-Deal</span></>}
        description="Nous sommes une agence technologique sénégalaise qui combine excellence technique, créativité et profondeur culturelle pour bâtir l'Afrique digitale de demain."
      />

      {/* Présentation */}
      <section className="section-y">
        <div className="container mx-auto container-px grid lg:grid-cols-2 gap-12 items-center">
          <img src={teamImg} alt="Équipe Tech-Deal" loading="lazy" width={1536} height={1024} className="rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]" />
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-medium">Notre histoire</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-secondary">Construire avec la tech, travailler avec l'esprit</h2>
            <p className="mt-5 font-body text-muted-foreground leading-relaxed">
              Fondée à Dakar en 2020, Tech-Deal est née d'une conviction : l'Afrique a besoin d'agences
              technologiques locales, exigeantes, capables de rivaliser avec les meilleurs ailleurs.
            </p>
            <p className="mt-3 font-body text-muted-foreground leading-relaxed">
              En 5 ans, nous avons livré plus de 50 projets pour des startups, PME et grandes entreprises
              au Sénégal et à l'international, dans des domaines aussi variés que la fintech, la santé,
              l'éducation, le commerce et l'événementiel.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Valeurs */}
      <section className="section-y bg-muted/40">
        <div className="container mx-auto container-px grid md:grid-cols-3 gap-6">
          {[
            { Icon: Target, title: "Notre mission", text: "Démocratiser l'accès à des solutions technologiques de qualité pour les entreprises africaines, peu importe leur taille." },
            { Icon: Eye, title: "Notre vision", text: "Devenir l'agence technologique de référence en Afrique de l'Ouest, reconnue pour son excellence et son impact." },
            { Icon: Heart, title: "Nos valeurs", text: "Excellence technique, intégrité, créativité, esprit d'équipe et engagement envers nos clients et notre communauté." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-card p-8 shadow-soft border border-border hover:shadow-elegant transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange text-primary-foreground shadow-orange">
                <b.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-secondary">{b.title}</h3>
              <p className="mt-3 font-body text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section className="section-y">
        <div className="container mx-auto container-px">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-sans text-sm uppercase tracking-[0.2em] text-primary font-medium">Notre équipe</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-secondary">6 experts au service de vos projets</h2>
            <p className="mt-3 font-body text-muted-foreground">Une équipe pluridisciplinaire animée par la passion du travail bien fait.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="group rounded-2xl bg-gradient-card p-6 text-center shadow-soft border border-border hover:shadow-hover hover:-translate-y-1 transition-all">
                <img
                  src={m.image}
                  alt=""
                  width={96}
                  height={96}
                  loading="lazy"
                  className="mx-auto h-24 w-24 rounded-full object-cover shadow-orange ring-2 ring-border group-hover:scale-110 transition-transform"
                />
                <h3 className="mt-5 font-display text-lg font-bold text-secondary">{m.name}</h3>
                <p className="font-sans text-sm text-primary font-medium">{m.role}</p>
                <p className="mt-2 font-body text-sm text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organigramme simple */}
      <section className="section-y bg-muted/40">
        <div className="container mx-auto container-px">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">Notre organisation</h2>
            <p className="mt-3 font-body text-muted-foreground">Une structure claire pour une exécution efficace.</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <OrgNode name="Ramata KELLY" role="CEO / Directrice Générale" highlight />
            <div className="h-8 w-px bg-border" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
              <OrgNode name="Babacar Sonar FAYE" role="Chef de Projet (Scrum Master)" />
              <OrgNode name="Kadidiatou SOUARE" role="Business Analyst / Responsable Stratégie" />
              <OrgNode name="Mame Diarra DIAKHATE" role="UI/UX Designer" />
              <OrgNode name="Ousmane DIENG" role="Développeur Full Stack" />
            </div>
            <div className="h-8 w-px bg-border" />
            <OrgNode name="Odile M. S. R. Bourco" role="Responsable Marketing & Communication" />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

const OrgNode = ({ name, role, highlight = false }: { name: string; role: string; highlight?: boolean }) => (
  <div className={`rounded-xl px-6 py-4 text-center border-2 shadow-soft ${highlight ? "bg-gradient-orange text-primary-foreground border-transparent shadow-orange" : "bg-card border-border"}`}>
    <p className={`font-display font-bold ${highlight ? "" : "text-secondary"}`}>{name}</p>
    <p className={`font-sans text-xs uppercase tracking-wider ${highlight ? "text-white/85" : "text-muted-foreground"}`}>{role}</p>
  </div>
);

export default AboutPage;
