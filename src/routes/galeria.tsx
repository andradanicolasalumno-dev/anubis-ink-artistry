import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Play } from "lucide-react";
import { useState } from "react";
import blackwork1 from "@/assets/gallery/blackwork-1.jpg";
import realismo1 from "@/assets/gallery/realismo-1.jpg";
import animales1 from "@/assets/gallery/animales-1.jpg";
import flores1 from "@/assets/gallery/flores-1.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería · AnubisTattoo" },
      { name: "description", content: "Galería de tatuajes: blackwork, realismo, minimalista, animales y flores." },
    ],
  }),
  component: Galeria,
});

const categories = ["Todos", "Blackwork", "Realismo", "Minimalista", "Animales", "Flores"] as const;
type Category = typeof categories[number];

type Piece = { src: string; category: Exclude<Category, "Todos">; title: string };

const pieces: Piece[] = [
  { src: blackwork1, category: "Blackwork", title: "Rosas & dinero" },
  { src: realismo1, category: "Realismo", title: "Leona & retrato" },
  { src: animales1, category: "Animales", title: "Leona y cachorros" },
  { src: flores1, category: "Flores", title: "Lilium & rosa" },
];

function Galeria() {
  const [active, setActive] = useState<Category>("Todos");
  const filtered = active === "Todos" ? pieces : pieces.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-6xl">Galería</h1>
          <div className="mt-6 gold-divider w-24 mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Una selección de trabajos realizados en el estudio. Cada pieza es única, hecha a mano y con una historia detrás.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest border transition-colors ${
                active === s
                  ? "bg-gradient-gold text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-xs uppercase tracking-widest text-primary">{p.category}</p>
                <p className="text-sm text-foreground/90 mt-1">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video gallery */}
        <div className="mt-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Reels</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Proceso en video</h2>
          <div className="mt-6 gold-divider w-24 mx-auto" />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl glass cursor-pointer"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.16 0.01 60), oklch(0.08 0.005 60))",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background to-transparent">
                <p className="text-sm text-foreground/90">Reel #{i + 1}</p>
                <p className="text-xs text-muted-foreground">Próximamente</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
