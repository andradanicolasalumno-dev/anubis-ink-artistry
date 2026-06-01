import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Sparkles, Shield, Award } from "lucide-react";
import anubisLogo from "@/assets/anubis-logo.jpg";
import anubisAvatar from "@/assets/anubis-avatar.jpg";
import anubisGracias from "@/assets/anubis-gracias.jpg";
import blackwork1 from "@/assets/gallery/blackwork-1.jpg";
import blackandgrey1 from "@/assets/gallery/blackandgrey-1.jpg";
import realismo1 from "@/assets/gallery/realismo-1.jpg";
import minimalista1 from "@/assets/gallery/minimalista-1.jpg";
import animales1 from "@/assets/gallery/animales-1.jpg";
import flores1 from "@/assets/gallery/flores-1.jpg";
import lettering1 from "@/assets/gallery/lettering-1.jpg";
import mandalas1 from "@/assets/gallery/mandalas-1.jpg";

const styles = [
  { name: "Blackwork", img: blackwork1 },
  { name: "Black and Grey", img: blackandgrey1 },
  { name: "Realismo", img: realismo1 },
  { name: "Minimalista", img: minimalista1 },
  { name: "Animales", img: animales1 },
  { name: "Flores", img: flores1 },
  { name: "Lettering", img: lettering1 },
  { name: "Mandalas", img: mandalas1 },
] as const;

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
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary animate-fade-up">
              <Sparkles className="h-3 w-3" /> Estudio Premium · Río Cuarto
            </div>
            <div className="mt-8 flex justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.05s" }}>
              <img
                src={anubisLogo}
                alt="AnubisTattoo logo"
                className="w-56 md:w-72 h-auto drop-shadow-[0_0_40px_rgba(212,168,76,0.35)] animate-float-slow"
              />
            </div>
            <div className="mt-8 gold-divider w-40 mx-auto lg:mx-0" />
            <p className="mt-8 text-xl md:text-2xl font-display tracking-[0.4em] text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              EL ARTE EN TU PIEL
            </p>
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-base text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Tatuajes hechos a mano con precisión, técnica y arte. Cada diseño cuenta una historia.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
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
          <div className="hidden lg:flex justify-center items-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent blur-3xl" />
              <img
                src={anubisAvatar}
                alt="Anubis mascot"
                className="relative w-[420px] h-auto drop-shadow-[0_30px_60px_rgba(212,168,76,0.25)]"
              />
            </div>
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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((s) => (
            <Link
              key={s.name}
              to="/galeria"
              search={{ cat: s.name }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden glass group hover:scale-[1.02] transition-transform"
            >
              <img
                src={s.img}
                alt={`Estilo ${s.name}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundImage: "linear-gradient(180deg, transparent 35%, oklch(0.08 0 0 / 0.9))" }}
              />
              <span className="absolute bottom-5 left-5 right-5 text-lg font-display tracking-widest text-primary group-hover:text-gradient-gold">
                {s.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/galeria" className="text-sm uppercase tracking-widest text-primary hover:underline">
            Explorar galería completa →
          </Link>
        </div>
      </section>

      {/* GRACIAS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center glass rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="flex justify-center">
            <img
              src={anubisGracias}
              alt="Gracias por elegirnos"
              className="w-full max-w-md h-auto drop-shadow-[0_20px_50px_rgba(212,168,76,0.25)]"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Comunidad</p>
            <h2 className="mt-3 text-3xl md:text-5xl text-gradient-gold">¡Gracias por elegirnos!</h2>
            <div className="mt-6 gold-divider w-24 mx-auto lg:mx-0" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Cada cliente que confía en nosotros forma parte de la historia de AnubisTattoo.
              Gracias por dejarnos ser parte de tu piel y de tu historia.
            </p>
            <Link
              to="/reservar"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold hover:scale-105 transition-transform"
            >
              Reservá tu turno
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
