import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().trim().min(2, "Sujet requis").max(150),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

const ContactPage = () => {
  const [params] = useSearchParams();
  const isDevis = params.get("devis") === "1";
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: isDevis ? "Demande de devis" : "",
    message: isDevis ? "Bonjour, je souhaite obtenir un devis pour…" : "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Formulaire invalide", description: r.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message envoyé ! 🧡", description: "Nous revenons vers vous sous 24h." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Parlons de <span className="text-gradient-orange">votre projet</span></>}
        description="Une idée, un projet, un défi technique ? Notre équipe vous répond sous 24h."
      />

      <section className="container mx-auto container-px py-16 grid lg:grid-cols-5 gap-10">
        {/* Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl bg-gradient-hero text-white p-8 shadow-elegant">
            <h2 className="font-display text-2xl font-bold">Nos coordonnées</h2>
            <p className="mt-2 font-body text-white/80 text-sm">Rejoignez-nous physiquement ou en ligne.</p>
            <ul className="mt-6 space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10"><MapPin className="h-4 w-4 text-primary" /></span> Sacré-Cœur 3, VDN<br />Dakar, Sénégal</li>
              <li className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"><Phone className="h-4 w-4 text-primary" /></span> +221 77 866 70 02</li>
              <li className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"><Mail className="h-4 w-4 text-primary" /></span> techxele@gmail.com</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/15">
              <p className="font-sans text-xs uppercase tracking-wider text-white/70">Suivez-nous</p>
              <div className="mt-3 flex gap-3">
                {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors" aria-label="Réseau social">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-elegant aspect-[4/3] border border-border">
            <iframe
              title="Localisation Tech-Xel à Dakar"
              src="https://www.google.com/maps?q=Sacre-Coeur+3,+Dakar,+Senegal&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-card p-8 md:p-10 shadow-elegant border border-border space-y-5">
          <h2 className="font-display text-2xl font-bold text-secondary">{isDevis ? "Demander un devis" : "Envoyez-nous un message"}</h2>
          <p className="font-body text-sm text-muted-foreground">Tous les champs sont requis.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="font-sans">Nom complet</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" maxLength={100} required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email" className="font-sans">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="vous@email.com" maxLength={255} required className="mt-1.5" />
            </div>
          </div>

          <div>
            <Label htmlFor="subject" className="font-sans">Sujet</Label>
            <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Sujet de votre message" maxLength={150} required className="mt-1.5" />
          </div>

          <div>
            <Label htmlFor="message" className="font-sans">Message</Label>
            <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Décrivez votre projet…" rows={6} maxLength={2000} required className="mt-1.5" />
          </div>

          <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
            {loading ? "Envoi en cours…" : (<>Envoyer <Send className="h-4 w-4" /></>)}
          </Button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
