import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/services", label: "Services" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto container-px flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
        <Logo />

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-0 xl:gap-1 min-w-0" aria-label="Navigation principale">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-sans font-medium transition-colors ${
                  isActive ? "text-primary" : "text-secondary hover:text-primary"
                } after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:duration-300 ${
                  ""
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    } origin-left`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm">
            <Link to="/contact?devis=1">Demander un devis</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-secondary hover:bg-muted transition"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[500px]" : "max-h-0"
        } bg-background border-t border-border`}
      >
        <nav className="container mx-auto container-px flex flex-col py-4 gap-1" aria-label="Navigation mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-3 rounded-md font-sans font-medium transition-colors ${
                  isActive ? "bg-accent text-primary" : "text-secondary hover:bg-muted"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="hero" className="mt-2">
            <Link to="/contact?devis=1">Demander un devis</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
