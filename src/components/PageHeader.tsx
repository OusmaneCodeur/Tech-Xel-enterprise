import { CheckCircle2 } from "lucide-react";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => (
  <section className="relative bg-gradient-hero text-white overflow-hidden">
    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
    <div className="container mx-auto container-px py-20 md:py-28 relative text-center">
      <p className="font-sans text-sm uppercase tracking-[0.25em] text-primary font-medium flex items-center justify-center gap-2">
        <CheckCircle2 className="h-4 w-4" /> {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold">{title}</h1>
      {description && <p className="mt-5 font-body text-lg text-white/85 max-w-2xl mx-auto">{description}</p>}
    </div>
  </section>
);

export default PageHeader;
