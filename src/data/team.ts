import kelly from "@/assets/kelly.jpeg";
import ous from "@/assets/ous.jpg";
import diarra from "@/assets/diarra.jpeg";
import sonar from "@/assets/sonar.jpeg";
import souare from "@/assets/souare.jpeg";
import odile from "@/assets/odile.jpeg";

export interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
  color: string; // tailwind gradient end stop class
}

export const team: Member[] = [
  { name: "Ramata KELLY", role: "CEO / Directrice Générale", image: kelly, bio: "15 ans d'expérience en stratégie tech.", color: "from-primary to-primary-glow" },
  { name: "Ousmane DIENG", role: "Développeur Full Stack", image: ous, bio: "Crée le site web, Développe l’application, Intègre le chatbot ", color: "from-secondary to-primary" },
  { name: "Mame Diarra DIAKHATE", role: "UI/UX Designer", image: diarra, bio: "Conçoit les maquettes, Crée le logo et la charte graphique, Travaille sur l’expérience utilisateur ", color: "from-primary to-secondary" },
  { name: "Kadidiatou SOUARE", role: "Business Analyst / Responsable Stratégie", image: souare, bio: "Réalise l’étude de marché, Fait le BMC et SWOT, Analyse les besoins des utilisateurs ", color: "from-primary-glow to-primary" },
  { name: "Babacar Sonar FAYE", role: "Chef de Projet (Scrum Master)", image: sonar, bio: "Organise le travail (méthode Scrum), Gère Trello, planning, tâches, Coordonne l’équipe", color: "from-secondary to-primary-glow" },
  { name: "Odile M. S. R. Bourco", role: "Responsable Marketing & Communication", image: odile, bio: "Gère les réseaux sociaux, Crée les affiches et contenus, Définit la stratégie digitale", color: "from-primary to-primary-glow" },
];
