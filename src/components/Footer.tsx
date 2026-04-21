import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto container-px py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 font-body text-sm text-white/70 leading-relaxed">
            Defar ak xarala, liggéey ak xél. Nous concevons des solutions digitales qui
            propulsent votre entreprise vers l'avenir.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="Réseau social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Navigation</h3>
          <ul className="mt-4 space-y-2 font-sans text-sm text-white/80">
            <li><Link to="/" className="hover:text-primary transition">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-primary transition">À propos</Link></li>
            <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link to="/projets" className="hover:text-primary transition">Projets</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
          <ul className="mt-4 space-y-2 font-sans text-sm text-white/80">
            <li>Développement Web</li>
            <li>Développement Mobile</li>
            <li>Design UI/UX</li>
            <li>Marketing Digital</li>
            <li>Intelligence Artificielle</li>
            <li>Conseil & Stratégie</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
          <ul className="mt-4 space-y-3 font-sans text-sm text-white/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Sacré-Cœur 3, Dakar, Sénégal</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +221 77 866 70 02</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> techxele@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto container-px py-5 text-center font-sans text-xs text-white/60">
          © {new Date().getFullYear()} Tech-Xel — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
