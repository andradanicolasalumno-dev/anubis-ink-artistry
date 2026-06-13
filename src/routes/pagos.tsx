import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Banknote, CreditCard, Landmark, Smartphone } from "lucide-react";

export const Route = createFileRoute("/pagos")({
  head: () => ({
    meta: [
      { title: "Métodos de Pago · AnubisTattoo" },
      { name: "description", content: "Aceptamos efectivo, débito, transferencia y Mercado Pago." },
    ],
  }),
  component: Pagos,
});

const methods = [
  { icon: Banknote, title: "Efectivo", desc: "Pago en el estudio." },
  { icon: CreditCard, title: "Tarjetas", desc: "Débito y crédito con 15% de recargo." },
  { icon: Landmark, title: "Transferencia", desc: "CBU / Alias." },
  { icon: Smartphone, title: "Mercado Pago", desc: "QR o link de pago." },
];

function Pagos() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Pagos</p>
          <h1 className="mt-3 text-4xl md:text-6xl">Métodos de pago</h1>
          <div className="mt-6 gold-divider w-24 mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Aceptamos múltiples formas de pago para que reservar tu tatuaje sea simple y cómodo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((m) => (
            <div
              key={m.title}
              className="glass rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <m.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Para reservar la sesión se solicita una seña que se descuenta del total.
        </p>
      </section>
    </Layout>
  );
}
