import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Msg { role: "user" | "bot"; text: string }

const knowledge: { keywords: string[]; reply: string }[] = [
  { keywords: ["bonjour", "salut", "hello", "coucou", "hey"], reply: "Bonjour 👋 Je suis Xela, l'assistante virtuelle de Tech-Deal. Comment puis-je vous aider ?" },
  { keywords: ["service", "offre", "proposez"], reply: "Nous proposons : Développement Web, Mobile, Design UI/UX, Marketing Digital, IA et Conseil. Quel domaine vous intéresse ?" },
  { keywords: ["prix", "tarif", "devis", "coût", "cout"], reply: "Chaque projet est unique. Cliquez sur \"Demander un devis\" en haut, ou rendez-vous sur la page Contact. Nous revenons vers vous sous 24h." },
  { keywords: ["contact", "joindre", "appeler", "email", "téléphone", "telephone"], reply: "Vous pouvez nous joindre au +221 77 866 70 02 ou techdeal@gmail.com. Notre bureau est à Sacré-Cœur 3, Dakar." },
  { keywords: ["mobile", "application", "app"], reply: "Nous développons des apps iOS & Android natives et React Native, performantes et belles. Voulez-vous voir nos projets ?" },
  { keywords: ["web", "site", "internet"], reply: "Sites vitrines, e-commerce, plateformes SaaS — nous codons sur-mesure avec React, Next.js et des stacks modernes." },
  { keywords: ["ia", "intelligence", "ai"], reply: "Notre équipe intègre des solutions d'IA : chatbots, vision par ordinateur, analyse prédictive, automatisation." },
  { keywords: ["délai", "delai", "temps", "durée"], reply: "Un site vitrine : 2 à 4 semaines. Une app mobile : 6 à 12 semaines. Précisons cela ensemble lors d'un appel." },
  { keywords: ["équipe", "equipe", "qui", "vous êtes"], reply: "Tech-Deal rassemble 6 experts passionnés en tech, design et stratégie. Découvrez-les sur la page À propos." },
  { keywords: ["merci", "thanks"], reply: "Avec plaisir ! 🧡 Autre chose ?" },
];

const fallback = "Je note votre question. Pour une réponse précise, contactez-nous via la page Contact ou demandez un devis 🙂";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Bonjour 👋 Je suis Xela, votre assistante Tech-Deal. Posez-moi votre question !" },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  const reply = (text: string) => {
    const t = text.toLowerCase();
    const found = knowledge.find((k) => k.keywords.some((w) => t.includes(w)));
    return found?.reply ?? fallback;
  };

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { role: "bot", text: reply(q) }]), 600);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le chatbot"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-orange text-primary-foreground shadow-orange hover:scale-110 transition-transform"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl bg-card shadow-hover border border-border animate-scale-in">
          <div className="flex items-center gap-3 bg-secondary p-4 text-secondary-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-orange">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display font-semibold leading-tight">Xela</p>
              <p className="font-sans text-xs text-white/70">Assistante Tech-Deal · en ligne</p>
            </div>
          </div>
          <div className="h-80 overflow-y-auto bg-muted/40 p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 font-sans text-sm leading-snug ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card text-foreground border border-border rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="flex gap-2 border-t border-border bg-card p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Écrivez votre message…"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={send} variant="hero" size="icon" aria-label="Envoyer"><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
