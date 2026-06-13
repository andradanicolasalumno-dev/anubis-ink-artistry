import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Star,
  CheckCircle2,
  Clock,
  MapPin,
  Instagram,
  MessageCircle,
  Palette,
  CalendarCheck,
  Syringe,
  HeartPulse,
  MessageSquare,
} from "lucide-react";
import anubisLogo from "@/assets/anubis-logo.png";
import anubisAvatar from "@/assets/anubis-avatar.png";
import artistNicolas from "@/assets/artist-nicolas.jpg";
import blackwork1 from "@/assets/gallery/blackwork-1.jpg";
import blackandgrey1 from "@/assets/gallery/blackandgrey-1.jpg";
import realismo1 from "@/assets/gallery/realismo-1.jpg";
import minimalista1 from "@/assets/gallery/minimalista-1.jpg";
import animales1 from "@/assets/gallery/animales-1.jpg";
import flores1 from "@/assets/gallery/flores-1.jpg";
import lettering1 from "@/assets/gallery/lettering-1.jpg";
import mandalas1 from "@/assets/gallery/mandalas-1.jpg";
import blackandgrey2 from "@/assets/gallery/blackandgrey-2.jpg";
import blackandgrey3 from "@/assets/gallery/blackandgrey-3.jpg";
import animales2 from "@/assets/gallery/animales-2.jpg";
import flores2 from "@/assets/gallery/flores-2.jpg";
import minimalista2 from "@/assets/gallery/minimalista-2.jpg";

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

const trustItems = [
  { icon: Award, text: "Más de una década de experiencia" },
  { icon: Palette, text: "Diseños exclusivos para cada cliente" },
  { icon: Shield, text: "Material descartable y esterilizado" },
  { icon: HeartPulse, text: "Atención personalizada" },
  { icon: Sparkles, text: "Ambiente cómodo y profesional" },
  { icon: MapPin, text: "Ubicación céntrica en Río Cuarto" },
];

const testimonials = [
  { name: "Lucía M.", text: "Excelente atención y un trabajo impecable. Me explicó cada paso y el resultado superó lo que imaginaba." },
  { name: "Mauro R.", text: "Mi mejor tatuaje hasta ahora. Súper recomendable, técnica y trato 10 de 10." },
  { name: "Camila S.", text: "Ambiente profesional y mucha dedicación en cada detalle. Volvería sin dudarlo." },
  { name: "Federico A.", text: "Me hizo un cover up que parecía imposible. Quedó increíble, gracias Nico." },
  { name: "Sofía P.", text: "Higiene impecable, diseño personalizado y un trato hermoso. 100% recomendado." },
  { name: "Joaquín D.", text: "El mejor estudio de Río Cuarto. Calidad premium del primer minuto al último." },
];

const process = [
  { icon: MessageSquare, title: "Consulta y asesoramiento", text: "Charlamos tu idea, referencias, zona y tamaño." },
  { icon: Palette, title: "Diseño personalizado", text: "Creamos una pieza única, ajustada a tu estilo." },
  { icon: CalendarCheck, title: "Reserva del turno", text: "Confirmamos fecha y seña para asegurar tu sesión." },
  { icon: Syringe, title: "Sesión de tatuaje", text: "Material esterilizado y ambiente cómodo y privado." },
  { icon: HeartPulse, title: "Cuidados posteriores", text: "Te acompañamos en el proceso de cicatrización." },
];

const instagramShots = [blackwork1, blackandgrey2, realismo1, lettering1, mandalas1, animales2, flores2, minimalista2];

const SITE_URL = "https://anubis-ink-artistry.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AnubisTattoo · Estudio de Tatuajes en Río Cuarto" },
      {
        name: "description",
        content:
          "Estudio de tatuajes premium en Río Cuarto. Tatuador profesional con más de 13 años de experiencia en blackwork, realismo, lettering y diseños personalizados. Reservá tu sesión.",
      },
      {
        name: "keywords",
        content:
          "tatuajes Río Cuarto, estudio de tatuajes Río Cuarto, tatuador profesional Río Cuarto, cover up Río Cuarto, diseños personalizados Río Cuarto, blackwork, realismo, lettering",
      },
      { property: "og:title", content: "AnubisTattoo · Estudio de Tatuajes en Río Cuarto" },
      {
        property: "og:description",
        content:
          "Tatuajes personalizados en Río Cuarto. Más de 20 años transformando ideas en piezas únicas y personalizadas para tu piel. Trae tu idea y te asesoramos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          name: "AnubisTattoo",
          image: `${SITE_URL}/og.jpg`,
          url: SITE_URL,
          telephone: "+54 358 431 4853",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vélez Sarsfield 147",
            addressLocality: "Río Cuarto",
            addressRegion: "Córdoba",
            addressCountry: "AR",
          },
          geo: { "@type": "GeoCoordinates", latitude: -33.1232, longitude: -64.3493 },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "20:00",
            },
          ],
          sameAs: ["https://www.instagram.com/anubistattoo.r4/"],
        }),
      },
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
                className="w-44 md:w-60 h-auto drop-shadow-[0_0_40px_rgba(212,168,76,0.35)] animate-float"
              />
            </div>
            <div className="mt-8 gold-divider w-40 mx-auto lg:mx-0" />
            <h1 className="mt-8 text-3xl md:text-5xl lg:text-6xl text-gradient-gold animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Tatuajes personalizados en Río Cuarto
            </h1>
            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Más de 20 años transformando ideas en piezas únicas y personalizadas para tu piel. Trae tu idea y te asesoramos.
            </p>

            {/* Trust badges */}
            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                "+20 años de experiencia",
                "Diseños personalizados",
                "Material esterilizado",
                "Atención profesional",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Link
                to="/reservar"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold hover:scale-105 transition-transform"
              >
                Reservar turno
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

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Confianza</p>
          <h2 className="mt-3 text-3xl md:text-5xl">¿Por qué elegir AnubisTattoo?</h2>
          <div className="mt-6 gold-divider w-24 mx-auto" />
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="rounded-xl bg-primary/10 p-3 border border-primary/20">
                <t.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm md:text-base text-foreground/90 mt-1">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARTIST */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-gold opacity-60 blur-xl" />
            <div className="relative rounded-3xl p-[2px] bg-gradient-gold">
              <img
                src={artistNicolas}
                alt="Nicolás Andrada, tatuador profesional en Río Cuarto"
                loading="lazy"
                width={1024}
                height={1024}
                className="rounded-[calc(1.5rem-2px)] w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">El artista</p>
            <h2 className="mt-3 text-3xl md:text-5xl text-gradient-gold">Conocé al artista</h2>
            <div className="mt-6 gold-divider w-24 mx-auto lg:mx-0" />
            <h3 className="mt-6 text-2xl md:text-3xl">Nicolás Andrada</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-primary">Tatuador profesional desde 2012</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Especializado en <strong className="text-foreground/90">blackwork, realismo, lettering, arte egipcio</strong> y proyectos personalizados.
              Más de una década perfeccionando técnicas y creando piezas únicas para cada cliente en Río Cuarto.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
              >
                Ver trayectoria
              </Link>
              <Link
                to="/reservar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold hover:scale-105 transition-transform"
              >
                Reservar con Nicolás
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Award, title: "Arte único", text: "Diseños personalizados creados desde cero para cada cliente." },
          { icon: Shield, title: "Higiene total", text: "Material esterilizado, descartable y protocolos certificados." },
          { icon: Sparkles, title: "Experiencia premium", text: "Ambiente cómodo, climatizado y privado para tu sesión." },
        ].map((f, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
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
                alt={`Tatuajes estilo ${s.name} en Río Cuarto`}
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

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Proceso</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Tu tatuaje paso a paso</h2>
          <div className="mt-6 gold-divider w-24 mx-auto" />
        </div>
        <div className="mt-16 relative">
          {/* progress line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <li key={i} className="relative text-center">
                <div className="mx-auto relative z-10 h-16 w-16 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-gold">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">Paso {i + 1}</p>
                <h3 className="mt-2 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Testimonios</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Lo que dicen nuestros clientes</h2>
          <div className="mt-6 gold-divider w-24 mx-auto" />
        </div>

        {/* Desktop grid */}
        <div className="mt-12 hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Mobile auto-scroll carousel */}
        <div className="mt-12 md:hidden overflow-hidden relative" aria-label="Testimonios">
          <div className="flex gap-4 animate-marquee w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[80vw] max-w-[320px] shrink-0">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Instagram</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Seguí nuestro trabajo día a día</h2>
          <div className="mt-6 gold-divider w-24 mx-auto" />
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {instagramShots.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/anubistattoo.r4/"
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl glass group"
            >
              <img
                src={img}
                alt="Publicación de AnubisTattoo en Instagram"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-primary" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/anubistattoo.r4/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
          >
            <Instagram className="h-4 w-4" /> Ver Instagram
          </a>
        </div>
      </section>

      {/* LOCATION / MAP */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Ubicación</p>
          <h2 className="mt-3 text-3xl md:text-5xl">Visitanos en Río Cuarto</h2>
          <div className="mt-6 gold-divider w-24 mx-auto" />
        </div>
        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch">
          <div className="glass rounded-2xl p-8 flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl">AnubisTattoo Studio</h3>
                <p className="mt-2 text-muted-foreground">
                  Vélez Sarsfield 147<br />
                  Río Cuarto, Córdoba, Argentina
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <Clock className="h-6 w-6 text-primary mt-1" />
              <div className="text-muted-foreground">
                <p>Lunes a Sábados</p>
                <p>09:00 – 13:00 hs · 16:30 – 20:00 hs</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=V%C3%A9lez+Sarsfield+147+R%C3%ADo+Cuarto+C%C3%B3rdoba"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold hover:scale-105 transition-transform"
              >
                Cómo llegar
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/5493584314853"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden glass aspect-[4/3] lg:aspect-auto min-h-[320px]">
            <iframe
              title="Ubicación de AnubisTattoo en Río Cuarto"
              src="https://www.google.com/maps?q=V%C3%A9lez%20Sarsfield%20147%2C%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba%2C%20Argentina&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale-[0.3] contrast-110"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, oklch(0.78 0.14 80 / 0.3), transparent 45%), radial-gradient(circle at 70% 60%, oklch(0.55 0.22 28 / 0.25), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Reservas abiertas</p>
          <h2 className="mt-4 text-4xl md:text-6xl text-gradient-gold">
            ¿Listo para llevar tu idea a la piel?
          </h2>
          <div className="mt-6 gold-divider w-32 mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactanos hoy mismo y reservá tu próxima sesión en AnubisTattoo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-gold hover:scale-105 transition-transform"
            >
              Reservar turno
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/5493584314853"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/anubistattoo.r4/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm text-foreground/90 leading-relaxed flex-1">"{text}"</p>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-primary">{name}</p>
    </div>
  );
}
