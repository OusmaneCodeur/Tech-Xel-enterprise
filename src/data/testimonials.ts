export interface Testimonial {
  name: string;
  role: string;
  context: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  { name: "Aïssatou Diop", role: "DG, Sahel Logistique", context: "Entreprise", quote: "Tech-Deal a refondu notre plateforme logistique en 6 semaines. Résultat : +40 % de productivité côté terrain.", rating: 5 },
  { name: "Mouhamadou Sall", role: "CEO, NafaPay", context: "Startup", quote: "L'app mobile livrée par Tech-Deal a propulsé notre fintech. Design impeccable, code solide.", rating: 5 },
  { name: "Fatima Ndiaye", role: "Organisatrice", context: "Événement", quote: "Le site dédié au festival a tenu la charge avec 12 000 visiteurs simultanés. Bravo !", rating: 5 },
  { name: "Ibrahima Ba", role: "Particulier", context: "Particulier", quote: "Mon portfolio créé par Tech-Deal m'a permis de décrocher un contrat international. Merci !", rating: 5 },
  { name: "Awa Diallo", role: "Marketing Lead, Teranga Foods", context: "Entreprise", quote: "Stratégie SEO + refonte = +220 % de trafic organique en 4 mois. Une équipe à l'écoute.", rating: 5 },
  { name: "Cheikh Tidiane Fall", role: "Fondateur, EduSen", context: "Startup", quote: "Du conseil au déploiement, ils ont été des partenaires, pas juste un prestataire.", rating: 5 },
  { name: "Marie Sow", role: "Coordinatrice", context: "Événement", quote: "Plateforme de billetterie pensée jusqu'au moindre détail. Public ravi.", rating: 5 },
  { name: "Ousmane Kane", role: "Particulier", context: "Particulier", quote: "Un chatbot IA pour ma petite boutique en ligne — qualité pro, prix juste.", rating: 5 },
];
