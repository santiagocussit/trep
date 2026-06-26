import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trep - Imágenes con IA",
    short_name: "Trep",
    description: "Crea imágenes con IA al instante",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0221",
    theme_color: "#7C3AED",
    orientation: "portrait",
    icons: [
      {
        src: "/icono.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icono.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icono.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
