"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");
    setImageUrl(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al generar la imagen");
      }

      const data = await res.json();
      setImageUrl(data.imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) handleGenerate();
  };

  return (
    <section id="generator" className="mx-auto max-w-3xl px-4 py-12">
      <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-text sm:text-4xl">
          Crea tu imagen con IA
        </h1>
        <p className="mb-8 text-center text-sm text-text-muted">
          Escribí lo que imaginás y Trep lo genera al instante
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ej: Un gato astronauta en el espacio"
            className="flex-1 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-muted/50 focus:border-primary"
            disabled={loading}
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Generando...
              </>
            ) : (
              "Generar"
            )}
          </button>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        {loading && (
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <svg className="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-50"
                />
              </svg>
              Creando imagen...
            </div>
            <div className="h-64 w-full max-w-md animate-pulse rounded-xl bg-card sm:h-80" />
          </div>
        )}

        {imageUrl && !loading && (
          <div className="mt-8">
            <div className="relative mx-auto overflow-hidden rounded-xl border border-border">
              <Image
                src={imageUrl}
                alt={prompt}
                width={768}
                height={768}
                className="h-auto w-full object-cover"
                unoptimized
                priority
              />
            </div>
            <button
              onClick={() => {
                const a = document.createElement("a");
                a.href = imageUrl;
                a.download = `trep-${Date.now()}.png`;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                a.click();
              }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary-light transition-all hover:bg-primary/10 sm:w-auto"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5 5 5-5M12 4v12"
                />
              </svg>
              Descargar imagen
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
