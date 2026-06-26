import type { Metadata } from "next";
import ImageGenerator from "@/components/ImageGenerator";

export const metadata: Metadata = {
  title: "Generar",
  description: "Crea imágenes con IA al instante",
};

export default function GenerarPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12 sm:py-16">
      <ImageGenerator />
    </div>
  );
}
