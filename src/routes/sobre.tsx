import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ShieldCheck, Sparkles, Heart, Coffee, MapPin, Clock, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros · AnubisTattoo" },
      { name: "description", content: "Conocé el estudio AnubisTattoo: Nicolás Andrada, tatuador desde 2012 en Río Cuarto." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Sobre nosotros</p>
          <h1 className="mt-3 text-4xl md:text-6xl">El estudio</h1>
          <div className="mt-6 gold-divider w-24 mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            AnubisTattoo nace de la pasión por el arte sobre piel. Un espacio donde la técnica, la higiene
            y la experiencia se combinan para crear piezas únicas, pensadas y ejecutadas con precisión.
            Cada cliente, cada sesión, cada trazo: un ritual.
          </p>
        </div>

        {/* TATUADOR */}
        <div className="mt-16 glass rounded-2xl p-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Tatuador</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-display tracking-widest text-gradient-gold">
            NICOLÁS ANDRADA
          </h2>
          <div className="mt-4 gold-divider w-16 mx-auto" />
          <p className="mt-6 text-base md:text-lg text-muted-foreground">
            Tatuando desde el año <span className="text-primary font-semibold">2012</span>.
            Más de una década perfeccionando el arte sobre piel.
          </p>
        </div>

        {/* INFO PRACTICA */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-8">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-xl">Dirección</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Galería Río Cuarto · Local 13<br />
              Vélez Sarsfield 143, Río Cuarto, Córdoba.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-xl">Horarios</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Lunes a Sábados<br />
              09:00 – 13:00 hs · 16:30 – 20:00 hs
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "Higiene y seguridad",
              text: "Material 100% descartable y esterilizado. Se abre todo delante tuyo y luego se descarta cada elemento usado.",
            },
            {
              icon: Sparkles,
              title: "Filosofía artística",
              text: "Trabajamos diseños personalizados. No copiamos: interpretamos tu idea para convertirla en una pieza original.",
            },
            {
              icon: Heart,
              title: "Experiencia y técnica",
              text: "Más de 10 años de oficio en varios estilos, nos adaptamos a tu idea.",
            },
            {
              icon: Coffee,
              title: "Ambiente premium",
              text: "Estudio privado, climatizado, con música, lo necesario para que disfrutes la sesión.",
            },
          ].map((b) => (
            <div key={b.title} className="glass rounded-2xl p-8">
              <b.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-xl">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* EDAD */}
        <div className="mt-10 glass rounded-2xl p-8 border border-primary/30 flex items-start gap-4">
          <AlertCircle className="h-8 w-8 text-primary shrink-0" />
          <div>
            <h3 className="text-xl">Edad mínima · +18</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Para realizarte un tatuaje debés ser <span className="text-primary font-semibold">mayor de 18 años</span>.
              Los menores de edad solo podrán tatuarse <span className="text-primary font-semibold">acompañados por su padre, madre o tutor legal</span>,
              presentando DNI de ambos.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
