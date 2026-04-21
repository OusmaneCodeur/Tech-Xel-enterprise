import { Code2, Smartphone, Palette, Megaphone, BrainCircuit, Briefcase } from "lucide-react";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceUiux from "@/assets/service-uiux.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceConseil from "@/assets/service-conseil.jpg";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  Icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    slug: "developpement-web",
    title: "Développement Web",
    short: "Sites vitrines, e-commerce, plateformes SaaS sur mesure.",
    description: "Nous concevons et développons des sites web rapides, sécurisés et évolutifs avec des technologies modernes (React, Next.js, Node.js). Du concept au déploiement, nous prenons en charge l'ensemble du cycle de vie de votre projet.",
    features: ["Architecture moderne & scalable", "SEO et performance optimisés", "Tableau d'administration", "Hébergement & maintenance"],
    Icon: Code2,
    image: serviceWeb,
  },
  {
    slug: "developpement-mobile",
    title: "Développement Mobile",
    short: "Applications iOS & Android performantes et élégantes.",
    description: "Applications natives ou cross-platform (React Native, Flutter) pensées pour offrir une expérience utilisateur fluide sur iOS et Android. Du prototype à la publication sur les stores.",
    features: ["iOS & Android", "Notifications push & paiements", "Mode hors-ligne", "Publication App Store / Play Store"],
    Icon: Smartphone,
    image: serviceMobile,
  },
  {
    slug: "design-ui-ux",
    title: "Design UI/UX",
    short: "Interfaces intuitives qui marquent les esprits.",
    description: "Recherche utilisateur, wireframes, prototypes interactifs et design systems complets. Nous concevons des expériences digitales centrées sur l'humain et alignées sur vos objectifs business.",
    features: ["Recherche utilisateur", "Wireframes & prototypes", "Design system", "Tests d'utilisabilité"],
    Icon: Palette,
    image: serviceUiux,
  },
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    short: "Stratégies digitales pour faire grandir votre marque.",
    description: "SEO, SEA, réseaux sociaux, content marketing et e-mailing : nous bâtissons des stratégies data-driven pour générer du trafic qualifié et convertir vos visiteurs en clients fidèles.",
    features: ["SEO & SEA", "Community management", "Campagnes Meta & Google Ads", "Reporting et analyse"],
    Icon: Megaphone,
    image: serviceMarketing,
  },
  {
    slug: "intelligence-artificielle",
    title: "Intelligence Artificielle",
    short: "L'IA au service de votre productivité.",
    description: "Chatbots intelligents, automatisation, vision par ordinateur, analyse prédictive : nous intégrons l'intelligence artificielle dans vos processus pour gagner du temps et créer de la valeur.",
    features: ["Chatbots & assistants IA", "Automatisation des processus", "Vision par ordinateur", "Modèles prédictifs sur mesure"],
    Icon: BrainCircuit,
    image: serviceAi,
  },
  {
    slug: "conseil-strategie",
    title: "Conseil & Stratégie",
    short: "Accompagnement stratégique de A à Z.",
    description: "Audit digital, transformation numérique, choix technologiques, organisation des équipes : nos consultants vous accompagnent dans toutes vos décisions stratégiques tech.",
    features: ["Audit digital complet", "Transformation numérique", "Roadmap produit & tech", "Formation des équipes"],
    Icon: Briefcase,
    image: serviceConseil,
  },
];
