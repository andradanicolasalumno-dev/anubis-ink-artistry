import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/galeria", label: "Galería" },
  { to: "/sobre", label: "Sobre Nosotros" },
  { to: "/reservar", label: "Reservar" },
  { to: "/pagos", label: "Pagos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-display tracking-[0.25em] text-gradient-gold">
            ANUBIS
          </span>
          <span className="text-xl md:text-2xl font-display tracking-[0.25em] text-foreground/90">
            TATTOO
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/anubistattoo.r4/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 px-6 py-4 flex flex-col gap-4 bg-background/95 backdrop-blur">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/anubistattoo.r4/"
            target="_blank"
            rel="noreferrer"
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            Instagram
          </a>
        </div>
      )}
    </header>
  );
}
