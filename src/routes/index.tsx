import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Sparkles, Shield, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AnubisTattoo · Estudio de Tatuajes Premium" },
      { name: "description", content: "Estudio de tatuajes premium en Río Cuarto. Arte con significado. Reservá tu sesión." },
      { property: "og:title", content: "AnubisTattoo · Ink with meaning" },
      { property: "og:description", content: "Estudio de tatuajes premium. Blackwork, realismo, minimalista, egipcio y japonés." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(0.78 0.14 80 / 0.25), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.55 0.22 28 / 0.2), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary animate-fade-up">
            <Sparkles className="h-3 w-3" /> Estudio Premium · Río Cuarto
          </div>
          <h1 className="mt-8 text-5xl md:text-8xl font-display tracking-[0.15em] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient-gold">ANUBIS</span>
            <span className="block text-foreground/95 mt-2">TATTOO</span>
          </h1>
          <div className="mt-8 gold-divider w-40 mx-auto" />
          <p className="mt-8 text-xl md:text-2xl font-display tracking-[0.4em] text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            INK WITH MEANING
          </p>
          <p className="mt-4 max-w-xl mx-auto text-base text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Tatuajes hechos a mano con precisión, técnica y arte. Cada diseño cuenta una historia.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/reservar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold hover:scale-105 transition-transform"
            >
              Reservá tu sesión
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/galeria"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
            >
              Ver galería
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-6 md:grid-cols-3">
        {[
          { icon: Award, title: "Arte único", text: "Diseños personalizados creados desde cero para cada cliente." },
          { icon: Shield, title: "Higiene total", text: "Material esterilizado, descartable y protocolos certificados." },
          { icon: Sparkles, title: "Experiencia premium", text: "Ambiente cómodo, climatizado y privado para tu sesión." },
        ].map((f, i) => (
          <div key={i} className="glass rounded-2xl p-8 hover:border-primary/40 transition-colors">
            <f.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-xl">{f.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      {/* STYLES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Estilos</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Lo que tatuamos</h2>
          <div className="mt-6 gold-divider w-24 mx-auto" />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["Blackwork", "Realismo", "Minimalista", "Egipcio", "Japonés"].map((s) => (
            <div
              key={s}
              className="aspect-[3/4] rounded-xl glass flex items-end p-5 group hover:scale-[1.02] transition-transform cursor-pointer"
              style={{
                backgroundImage: "linear-gradient(180deg, transparent 40%, oklch(0.08 0 0 / 0.85))",
              }}
            >
              <span className="text-lg font-display tracking-widest text-primary group-hover:text-gradient-gold">
                {s}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/galeria" className="text-sm uppercase tracking-widest text-primary hover:underline">
            Explorar galería completa →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
