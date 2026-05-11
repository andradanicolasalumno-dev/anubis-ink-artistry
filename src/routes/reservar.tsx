import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Upload, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/reservar")({
  head: () => ({
    meta: [
      { title: "Reservá tu sesión · AnubisTattoo" },
      { name: "description", content: "Reservá tu sesión de tatuaje en AnubisTattoo. Formulario rápido o WhatsApp directo." },
    ],
  }),
  component: Reservar,
});

function Reservar() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hola AnubisTattoo, quiero reservar:%0A
Nombre: ${data.get("nombre")}%0A
Tel: ${data.get("telefono")}%0A
Idea: ${data.get("idea")}%0A
Fecha: ${data.get("fecha")}%0A
Tamaño: ${data.get("tamano")}%0A
Zona: ${data.get("zona")}`;
    window.open(`https://wa.me/5493584314853?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Reservas</p>
          <h1 className="mt-3 text-4xl md:text-6xl">Reservá tu sesión</h1>
          <div className="mt-6 gold-divider w-24 mx-auto" />
          <p className="mt-6 text-muted-foreground">
            Completá el formulario o contactanos directo por WhatsApp.
          </p>
        </div>

        <a
          href="https://wa.me/5493584314853?text=Hola%20AnubisTattoo%2C%20quiero%20reservar%20una%20sesi%C3%B3n"
          target="_blank"
          rel="noreferrer"
          className="mt-10 mx-auto flex max-w-md items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-white font-semibold tracking-widest uppercase text-sm shadow-deep hover:scale-105 transition-transform"
        >
          <MessageCircle className="h-5 w-5" /> Reserva rápida por WhatsApp
        </a>

        <form onSubmit={handleSubmit} className="mt-12 glass rounded-2xl p-8 md:p-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Nombre" name="nombre" required />
            <Field label="Teléfono" name="telefono" type="tel" required />
          </div>
          <Field label="Idea del tatuaje" name="idea" textarea required />
          <div className="grid gap-6 md:grid-cols-3">
            <Field label="Fecha preferida" name="fecha" type="date" />
            <Field label="Tamaño aprox." name="tamano" placeholder="ej. 10cm" />
            <Field label="Zona del cuerpo" name="zona" placeholder="ej. antebrazo" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-primary mb-2">
              Imagen de referencia
            </label>
            <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-dashed border-primary/40 bg-input/30 px-4 py-4 hover:border-primary transition-colors">
              <Upload className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                {fileName ?? "Subir imagen (opcional)"}
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold hover:scale-[1.02] transition-transform"
          >
            <Send className="h-4 w-4" />
            Enviar reserva
          </button>
          {sent && (
            <p className="text-center text-sm text-primary">
              ¡Te llevamos a WhatsApp para confirmar tu reserva!
            </p>
          )}
        </form>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-lg bg-input/40 border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-primary mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={cls} />
      ) : (
        <input type={type} name={name} required={required} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}
