export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "nafapay",
    title: "NafaPay — Fintech mobile",
    category: "Application Mobile",
    description: "Application de paiement mobile avec wallet, transferts P2P et paiement marchand. Plus de 50 000 utilisateurs actifs.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    tags: ["React Native", "Node.js", "Stripe"],
  },
  {
    slug: "sahel-logistique",
    title: "Sahel Logistique — Plateforme SaaS",
    category: "Développement Web",
    description: "Plateforme SaaS de gestion de flotte et tracking GPS temps réel pour 200 véhicules.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    tags: ["React", "PostgreSQL", "Mapbox"],
  },
  {
    slug: "teranga-foods",
    title: "Teranga Foods — E-commerce",
    category: "E-commerce",
    description: "Site e-commerce et application mobile pour une marque agroalimentaire sénégalaise. +220 % de trafic organique.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    tags: ["Next.js", "Shopify", "SEO"],
  },
  {
    slug: "edusen",
    title: "EduSen — Plateforme e-learning",
    category: "Éducation",
    description: "Plateforme de cours en ligne avec vidéos, quiz et certification pour 15 000 apprenants.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    tags: ["React", "Vidéo", "IA"],
  },
  {
    slug: "festival-dakar",
    title: "Festival Dakar Numérique",
    category: "Événementiel",
    description: "Site événementiel et système de billetterie en ligne ayant tenu 12 000 visiteurs simultanés.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    tags: ["Next.js", "Stripe", "Performance"],
  },
  {
    slug: "xela-ai",
    title: "Xela — Assistant IA interne",
    category: "Intelligence Artificielle",
    description: "Assistant IA conversationnel intégré aux outils internes d'une grande entreprise pour automatiser le support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    tags: ["LLM", "Python", "API"],
  },
];
