import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ShieldCheck, Sparkles, Heart, Coffee } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros · AnubisTattoo" },
      { name: "description", content: "Conocé el estudio AnubisTattoo: filosofía, higiene y experiencia premium." },
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

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: ShieldCheck,
              title: "Higiene y seguridad",
              text: "Material 100% descartable y esterilizado. Protocolos certificados, guantes, barreras y bioseguridad en cada paso.",
            },
            {
              icon: Sparkles,
              title: "Filosofía artística",
              text: "Trabajamos diseños personalizados. No copiamos: interpretamos tu idea para convertirla en una pieza original.",
            },
            {
              icon: Heart,
              title: "Experiencia y técnica",
              text: "Años de oficio en blackwork, realismo, minimalismo, arte egipcio y tradicional japonés.",
            },
            {
              icon: Coffee,
              title: "Ambiente premium",
              text: "Estudio privado, climatizado, con música, café y todo lo necesario para que disfrutes la sesión.",
            },
          ].map((b) => (
            <div key={b.title} className="glass rounded-2xl p-8">
              <b.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-xl">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
