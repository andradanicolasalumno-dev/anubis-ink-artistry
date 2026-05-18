import { Instagram, MessageCircle, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-2xl tracking-[0.3em] text-gradient-gold">ANUBIS TATTOO</h3>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Estudio de tatuajes premium. Arte con significado, hecho a mano con precisión y pasión.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <a href="https://wa.me/5493584314853" target="_blank" rel="noreferrer" className="hover:text-primary">
                +54 358 431 4853
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-primary" />
              <a href="https://www.instagram.com/anubistattoo.r4/" target="_blank" rel="noreferrer" className="hover:text-primary">
                @anubistattoo.r4
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5" />
              <span>
                Galería Río Cuarto · Local 13<br />
                Vélez Sarsfield 143, Río Cuarto
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-primary mb-4">Horario</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Lunes a Sábados</li>
            <li>09:00 – 13:00 hs</li>
            <li>16:30 – 20:00 hs</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground space-y-1">
        <p>+18 · Menores deben asistir acompañados por su padre, madre o tutor legal.</p>
        <p>© {new Date().getFullYear()} AnubisTattoo · Ink with meaning.</p>
      </div>
    </footer>
  );
}
