import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden px-4 pb-8 pt-16 text-center sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-15" />
        <div className="relative">
          <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-6xl">
            Imágenes con IA,
            <br />
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              al instante
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-text-muted sm:text-base">
            Describí lo que querés y Trep genera imágenes únicas con inteligencia artificial en segundos.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/generar"
              className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover"
            >
              Empezar a crear
            </Link>
            <a
              href="#how"
              className="rounded-xl border border-border px-8 py-3 text-sm font-semibold text-text-muted transition-all hover:border-primary hover:text-primary-light"
            >
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      <section
        id="how"
        className="mx-auto max-w-5xl px-4 py-16 sm:py-24"
      >
        <h2 className="mb-12 text-center text-2xl font-bold text-text sm:text-3xl">
          Cómo funciona
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Escribí tu idea",
              desc: "Describí lo que querés generar con palabras simples.",
            },
            {
              step: "2",
              title: "IA lo crea",
              desc: "Nuestra inteligencia artificial transforma tu texto en imagen.",
            },
            {
              step: "3",
              title: "Descargá",
              desc: "Obtené tu imagen lista para usar o compartir.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-border bg-card/30 p-6 text-center backdrop-blur transition-all hover:border-primary/50"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary-light">
                {item.step}
              </div>
              <h3 className="mb-2 font-semibold text-text">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} Trep. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
