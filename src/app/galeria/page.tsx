import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galería",
  description: "Galería de imágenes generadas con IA por Trep",
};

const images = [
  { src: "/galery/gato-en-el-espacio-con-un-traje-espacial.jpg", alt: "Gato en el espacio con traje espacial", cols: 1, rows: 1 },
  { src: "/galery/genera-a-messi-abrazando-a-critiano-ronaldo.jpg", alt: "Messi abrazando a Cristiano Ronaldo", cols: 2, rows: 1 },
  { src: "/galery/genera-a-un-chico-volando-por-el-espacio.jpg", alt: "Chico volando por el espacio", cols: 1, rows: 2 },
  { src: "/galery/genera-un-avion-de-combate.jpg", alt: "Avión de combate", cols: 1, rows: 1 },
  { src: "/galery/genera-un-jardin-con-plantas-lindas.jpg", alt: "Jardín con plantas", cols: 1, rows: 1 },
  { src: "/galery/genera-una-imagen-de-un-agujero-negro.jpg", alt: "Agujero negro", cols: 1, rows: 1 },
  { src: "/galery/genera-una-manzana-con-ojos-saltones-y-boca-grande.jpg", alt: "Manzana con ojos saltones", cols: 1, rows: 1 },
  { src: "/galery/genera-una-multitud-de-personas-haciendo-protestas.jpg", alt: "Multitud haciendo protestas", cols: 2, rows: 1 },
  { src: "/galery/perro.jpg", alt: "Perro", cols: 1, rows: 1 },
  { src: "/galery/pitos.jpg", alt: "Pitos", cols: 1, rows: 1 },
];

export default function GaleriaPage() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-16 sm:px-12 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-text sm:text-4xl">
          Galería
        </h1>
        <p className="mb-16 text-center text-sm text-text-muted sm:text-base">
          Imágenes creadas por la comunidad de Trep
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                img.cols > 1 ? "col-span-2" : ""
              } ${img.rows > 1 ? "row-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.cols > 1 ? 768 : 384}
                height={img.rows > 1 ? 768 : 384}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
