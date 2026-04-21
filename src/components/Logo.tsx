import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

interface LogoProps {
  variant?: "light" | "dark";
}

const Logo = ({ variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-secondary";
  return (
    <Link to="/" className="flex min-w-0 max-w-[min(100%,14rem)] items-center gap-2 sm:gap-3 group shrink-0" aria-label="Tech-Deal accueil">
      <img
        src={logoImg}
        alt=""
        width={40}
        height={40}
        className={`h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-lg object-contain shadow-soft ring-1 ring-border/60 transition-transform group-hover:scale-105 ${
          variant === "light" ? "bg-white/10 ring-white/20" : ""
        }`}
      />
      <span className={`font-display text-lg sm:text-xl font-bold tracking-tight truncate ${textColor}`}>
        Tech<span className="text-primary">-</span>Deal
      </span>
    </Link>
  );
};

export default Logo;
